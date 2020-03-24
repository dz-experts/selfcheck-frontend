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

  stepForward = ({answer}) => {
    if (this.state.current_step > 0 && !answer) {
      return Promise.reject()
    }

    // append answer if applicable
    this.setState(state => ({
      answers: [...state.answers, ...answer?[answer]:[]]
    }))

    if (this.state.current_step < this.state.questions.length) {
      // if we did not reach the end of the survey, yet, simply step forward.
      this.setState(state => ({
        current_step: state.current_step + 1,
      }))
      return Promise.resolve()
    } else if (this.state.current_step === this.state.questions.length) {
      // if we have indeed reached the end of the survey, submit and only step forward on success.
      return api_questions.post({answers: this.state.answers})
        .then((response) => {
          if (response.status === 200) {
            this.setState(state => ({
              current_step: state.current_step + 1,
              results: response.data
            }))
            return Promise.resolve()
          } else {
            return Promise.reject()
          }
        })
    }
  }

  stepBack = () => {
    this.setState(state => {
      let answers_copy = [...state.answers]
      answers_copy.splice(answers_copy.length - 1, 1) // remove last answer
      return {
        current_step: this.state.current_step - 1,
        answers: answers_copy
      }
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
    const {current_step, questions, loading, loading_failed} = this.state

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
              <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                <ul>
                  <li>
                      <span><span className={`tag ${current_tab === INFORMATION_TAB?'is-primary':'is-light'}`}>1</span> {t('Informations')}</span>
                  </li>
                  <li>
                      <span><span className={`tag ${current_tab === QUESTIONS_TAB?'is-primary':'is-light'}`}>2</span> {t('Questionnaire')}</span>
                  </li>
                  <li>
                      <span><span className={`tag ${current_tab === RESULTS_TAB?'is-primary':'is-light'}`}>3</span> {t('Résultats')}</span>
                  </li>
                </ul>
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
                  stepForward={this.stepForward}
                  stepBack={this.stepBack}
                />
              )}
              {current_tab === RESULTS_TAB && (
                <SurveyResultsTab
                  reset={this.reset}
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
