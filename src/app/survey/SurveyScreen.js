import React from 'react';
import { withTranslation } from 'react-i18next'

import api_questions from './../api/questions'

import ScreenLoadingIndicator from '../common/ScreenLoadingIndicator'
import ScreenError from '../common/ScreenError'
import SurveyInformationTab from './SurveyInformationTab'
import SurveyQuestionsTab from './SurveyQuestionsTab'
import SurveyResultsTab from './SurveyResultsTab'


const INFORMATION_TAB = 'INFORMATION_TAB'
const QUESTIONS_TAB = 'QUESTIONS_TAB'
const RESULTS_TAB = 'RESULTS_TAB'


class SurveyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loading_failed: false,
      current_step: 0,
      questions: [],
      answers: [],
      results: null
    };
  }

  addAnswer = (question_id, key, value) => {
    this.setState(state => {
      let prevAnswersList = [...state.answers]
      const already_existing_answer = prevAnswersList.filter((answer) => answer.key === key)?.[0]
      if (already_existing_answer) {
        return {
          answers: prevAnswersList.map((answer) => answer.key !== key?answer:{question_id, key, value})
        }
      }
      return {
        answers: [...state.answers, ...[{question_id, key, value}]]
      }
    })
  }

  removeAnswer = (key) => {
    this.setState(state => {
      return {
        answers: [...state.answers].filter(answer => answer.key !== key)
      }
    })
  }
  
  stepForward = () => {
    const {current_step, questions, answers} = this.state

    // determine next step
    let next_step = current_step + 1

    for (next_step; next_step <= questions.length; next_step++) {
      const next_question = questions[next_step - 1]
      if (next_question.depends_on_question === null || next_question.depends_on_question === undefined) {
        // next question does not depend on any prior answer, stop looking
        break
      }
      else {
        // next question does depend on a prior answer
        // eslint-disable-next-line no-loop-func
        const depended_upon_answer = answers.filter((answer) => answer.question_id === next_question.depends_on_question)[0]
        if (depended_upon_answer.value === next_question.depends_on_question_value) {
          break
        }
      }
    }
    
    if (next_step <= questions.length) {
      // if we did not reach the end of the survey, yet, simply step forward.
      this.setState({current_step: next_step})
      return Promise.resolve()
    }
    
    if (next_step > questions.length) {
      // if we have indeed reached the end of the survey, attempt submit, but only step forward on success.
      return api_questions.post({answers: answers})
        .then((response) => {
          if (response.status === 201) {
            this.setState({
              current_step: next_step,
              results: response.data
            })
            return Promise.resolve()
          } else {
            return Promise.reject()
          }
        })
    }
  }

  stepBack = () => {
    // step back to last saved answer/question
    const {current_step, questions, answers} = this.state
    let previous_step = current_step - 1
      
    if (answers.length) {
      const last_answer = answers[answers.length - 1]
      const last_question_index = questions.indexOf(questions.filter(question => question.key === last_answer.key)[0])
      previous_step = last_question_index + 1
      this.removeAnswer(last_answer.key)
    }

    this.setState({
      current_step: previous_step
    })
  }

  reset = () => {
    this.setState({
      current_step: 0,
      answers: [],
      results: null
    })
  }

  loadQuestions() {
    this.setState({
      loading: true,
      loading_failed: false
    })
    api_questions.get()
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            questions: response.data
          })
        }
        this.setState({
          loading: false
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
          loading_failed: true
        })
      })
  }

  refresh() {
    this.loadQuestions()
  }

  componentDidMount() {
    this.loadQuestions()
  }
  
  render() {
    const {t} = this.props
    const {current_step, questions, answers, results, loading, loading_failed} = this.state

    // what tab to show?
    let current_tab
    if (current_step === 0) {
      current_tab = INFORMATION_TAB
    } else if (current_step > 0 && current_step <= questions.length) {
      current_tab = QUESTIONS_TAB
    } else if (current_step === questions.length + 1) {
      current_tab = RESULTS_TAB
    } else {
      throw Error(`Invalid current_step value: ${current_step}`)
    }

    return (
      <div className="container">
        
        {loading && (
          <ScreenLoadingIndicator />
        )}

        {!loading && loading_failed && (
          <ScreenError
            message={t('Une erreur est survenue.')}
            buttonLabel={t('Rafraishir')}
            handleButtonClick={(e) => {
              e.preventDefault()
              this.refresh()
            }}
          />
        )}

        {!loading && !loading_failed && (
          <>
            <div className="section">
              <nav className="level">
                <div className="level-item has-text-centered">
                </div>
                <div className="level-item has-text-centered">
                  <span className={`tag ${current_tab === INFORMATION_TAB?'is-primary':'is-light'}`}>1</span> {t('Informations')}
                </div>
                <div className="level-item has-text-centered">
                  <span className={`tag ${current_tab === QUESTIONS_TAB?'is-primary':'is-light'}`}>2</span> {t('Questionnaire')}
                </div>
                <div className="level-item has-text-centered">
                  <span className={`tag ${current_tab === RESULTS_TAB?'is-primary':'is-light'}`}>3</span> {t('Résultats')}
                </div>
                <div className="level-item has-text-centered">
                </div>
              </nav>
              
            </div>

            <div className="section">
              {current_tab === INFORMATION_TAB && (
                <SurveyInformationTab
                  stepForward={this.stepForward}
                />
              )}
              {current_tab === QUESTIONS_TAB && (
                <SurveyQuestionsTab
                  current_step={current_step}
                  questions={questions}
                  answers={answers}
                  addAnswer={this.addAnswer}
                  removeAnswer={this.removeAnswer}
                  stepForward={this.stepForward}
                  stepBack={this.stepBack}
                />
              )}
              {current_tab === RESULTS_TAB && (
                <SurveyResultsTab
                  reset={this.reset}
                  results={results}
                />
              )}
            </div>
          </>
        )}

      </div>
    );
  }
}

export default withTranslation()(SurveyScreen);
