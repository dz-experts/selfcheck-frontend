import React from 'react';
import { withTranslation } from 'react-i18next'


function SurveyResultsSeverity3({t}) {
  
  return (
    <article className="message is-warning">
      <div className="message-header">
        <p>{t('Vos symptômes nécessitent une prise en charge rapide.')}</p>
      </div>
      <div className="message-body content">        
        <h4>{t('Appelez le')} <a href="tel:3030">30 30</a></h4>
        <p>
          {t('Fournir plus d\'inforamtions ici..')}
        </p>

        <strong>{t('Restez chez vous.')}</strong>
        <p>
          {t('#RestezChezVous - limitez les contacts avec d\'autres personnes. Le virus peut être propagé par des porteurs ne montrant pas de symptômes.')}
        </p>
      </div>
    </article>
  );
}

export default withTranslation()(SurveyResultsSeverity3);
