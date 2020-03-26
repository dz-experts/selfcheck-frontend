import React from 'react';
import { withTranslation } from 'react-i18next'


function SurveyResultsSeverity0({t}) {
  
  return (
    <article className="message is-info">
      <div className="message-header">
        <p>{t('Votre état ne semble pas préoccupant.')}</p>
      </div>
      <div className="message-body content">
        <strong>{t('Restez chez vous.')}</strong>
        <p>
          {t('#RestezChezVous - limitez les contacts avec d\'autres personnes. Le virus peut être propagé par des porteurs ne montrant pas de symptômes.')}
        </p>
      </div>
    </article>
  );
}

export default withTranslation()(SurveyResultsSeverity0);
