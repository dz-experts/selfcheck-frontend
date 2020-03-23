import React from 'react';
import { withTranslation } from 'react-i18next'

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
      questions: [
        // TODO: fetch questions from API
        {
            "id": 1,
            "type": "Number",
            "text_fr": "Quel est votre wilaya?",
            "text_ar": "ما هي ولايتك؟",
            "default_value": "09",
            "depends_on_question_value": null,
            "depends_on_question": null
        },
        {
            "id": 2,
            "type": "Number",
            "text_fr": "Quel est votre âge ?",
            "text_ar": "كم عمرك ؟",
            "default_value": "1",
            "depends_on_question_value": null,
            "depends_on_question": null
        },
        {
            "id": 3,
            "type": "CHAR",
            "text_fr": "Quel est votre sexe ?",
            "text_ar": "ما هو جنسك؟",
            "default_value": "M",
            "depends_on_question_value": null,
            "depends_on_question": null
        }
      ]
    };
  }

  stepForward = () => {
    this.setState({current_step: this.state.current_step + 1})
  }

  stepBack = () => {
    this.setState({current_step: this.state.current_step - 1})
  }

  reset = () => {
    this.setState({current_step: 0})
  }

  componentDidMount() {
    
  }
  
  componentWillUnmount() {
    
  }
  
  render() {
    const {t} = this.props
    const {current_step, questions} = this.state

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

      </div>
    );
  }
}

export default withTranslation()(SurveyScreen);
