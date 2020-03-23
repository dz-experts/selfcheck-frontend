import React from 'react';
import { withTranslation } from 'react-i18next'


function SurveyResultsTab({t, reset}) {
  
  return (
    <div>

      <div className="box">
        <h2 className="title">
          {t('Résultats')}
        </h2>
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
