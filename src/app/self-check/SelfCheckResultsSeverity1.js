import React from 'react';
import { withTranslation } from 'react-i18next'


function SelfCheckResultsSeverity1({t}) {

  return (
    <article className="message is-info">
      <div className="message-header">
        <p>{t('Vos symptômes indiquent qu\'un avis médical est nécessaire.')}</p>
      </div>
      <div className="message-body content">

        <strong>{t('Programmez une visite avec votre médecin traitant habituel ou la structure hospitalière la plus proche.')}</strong>


        <strong>{t('Surveillez attentivement votre état de santé.')}</strong>
        <ul>
          <li>{t('N’hésitez pas à contacter votre médecin en cas de doute.')}</li>
          <li>{t('Mesurez votre température deux fois par jour.')}</li>
          <li>{t('Refaites ce test en cas de nouveau symptôme pour réévaluer la situation.')}</li>
          <li>{t('Restez chez vous en attendant que les symptômes disparaissent, mais restez attentif à toute aggravation.')}</li>
        </ul>

        <strong>{t('Restez chez vous.')}</strong>
        <p>
          {t('#RestezChezVous - limitez les contacts avec d\'autres personnes. Le virus peut être propagé par des porteurs ne montrant pas de symptômes.')}
        </p>
      </div>
    </article>
  );
}

export default withTranslation()(SelfCheckResultsSeverity1);
