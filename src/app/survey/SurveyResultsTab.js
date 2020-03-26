import React from 'react';
import { withTranslation } from 'react-i18next'

import SurveyResultsSeverity0 from './SurveyResultsSeverity0'
import SurveyResultsSeverity1 from './SurveyResultsSeverity1'
import SurveyResultsSeverity3 from './SurveyResultsSeverity3'


function SurveyResultsTab({t, results, reset}) {
  
  return (
    <div>

      <div className="box">
        
        <h2 className="title">{t('Résultats')}</h2>
        
        <article className="message">
          <div className="message-body">
            {t('La recommandation affichée peut évoluer suivant les informations en provenance des autorités de santé et des chercheurs. Elle ne constitue pas un avis médical. En cas de doute, demandez conseil à votre médecin ou pharmacien.')}
          </div>
        </article>

        {results?.severity === 0 && (<SurveyResultsSeverity0 />)}
        {results?.severity === 1 && (<SurveyResultsSeverity1 />)}
        {results?.severity === 3 && (<SurveyResultsSeverity3 />)}
      </div>

      <button
        className="button is-light"
        onClick={(e) => {
          reset()
          e.preventDefault()
        }}
      >
        <span>{t('Reprendre le test')}</span>
      </button>

    </div>
  );
}

export default withTranslation()(SurveyResultsTab);
