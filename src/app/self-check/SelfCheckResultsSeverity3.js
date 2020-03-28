import React from 'react';
import { withTranslation } from 'react-i18next'


function SelfCheckResultsSeverity3({t}) {

  return (
    <article className="message is-warning">
      <div className="message-header">
        <p>{t('Vos symptômes nécessitent une prise en charge rapide.')}</p>
      </div>
      <div className="message-body content">
        <h4>{t('Appelez le')} <a href="tel:3030">30 30</a></h4>
        <h4>{t('ou consulter le site du Ministère de la santé :')} <a href="http://www.sante.gov.dz">www.sante.gov.dz</a></h4>
        <p>
          {t('Les services d\'urgence disposent des dernières procédures en vigueur dans votre zone géographique. Une prise en charge adaptée à votre région et à votre état de santé vous sera proposée.')}
        </p>

        <strong>{t('Restez chez vous.')}</strong>
        <p>
          {t('#RestezChezVous - limitez les contacts avec d\'autres personnes. Le virus peut être propagé par des porteurs ne montrant pas de symptômes.')}
        </p>
      </div>
    </article>
  );
}

export default withTranslation()(SelfCheckResultsSeverity3);
