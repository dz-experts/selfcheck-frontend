import React from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function SurveyInformation({t, i18n, current_step, questions, stepForward, stepBack}) {
  
  const current_question = questions[current_step - 1]

  return (
    <div>

      <div className="box">
        
        <button
          className="button is-white"
          onClick={(e) => {
            stepBack()
            e.preventDefault()
          }}
        >
          <span className="icon is-small">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <span>{t('Question')} {current_step} {t('sur')} {questions.length}</span>
        </button>
        
        <h2 className="title">
          {current_question[`text_${i18n.language}`]}
        </h2>

      </div>

      <button
        className="button is-light"
        onClick={(e) => {
          stepForward()
          e.preventDefault()
        }}
      >
        <span>{t('Continuer')}</span>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>

    </div>
  );
}

export default withTranslation()(SurveyInformation);
