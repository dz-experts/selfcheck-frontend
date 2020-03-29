import React from 'react';
import { withTranslation } from 'react-i18next'

import SelfCheckResultsSeverity0 from './SelfCheckResultsSeverity0'
import SelfCheckResultsSeverity1 from './SelfCheckResultsSeverity1'
import SelfCheckResultsSeverity3 from './SelfCheckResultsSeverity3'


function SelfCheckResultsTab({ t, results, reset }) {

  return (
    <div>

      <div className="box">

        <h2 className="title">{t('Résultats')}</h2>

        <article className="message">
          <div className="message-body">
            {t('La recommandation affichée peut évoluer suivant les informations en provenance des autorités de santé et des chercheurs. Elle ne constitue pas un avis médical. En cas de doute, demandez conseil à votre médecin ou pharmacien.')}
          </div>
        </article>

        {results?.severity === 0 && (<SelfCheckResultsSeverity0 />)}
        {results?.severity === 1 && (<SelfCheckResultsSeverity1 />)}
        {results?.severity === 3 && (<SelfCheckResultsSeverity3 />)}
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

export default withTranslation()(SelfCheckResultsTab);
