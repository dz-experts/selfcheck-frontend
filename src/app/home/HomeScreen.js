import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function HomeScreen({t}) {
  
  return (
    <div>

      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {t('Vous pensez avoir été exposé au Coronavirus COVID-19 et avez des symptômes ?')}
            </h1>
            <h2 className="subtitle">
              {t('Faites le test pour répondre en citoyen éclairé selon vos symptômes.')}
            </h2>
            <Link to="/survey" className="button is-primary">
              <span>{t('Démarrer le test')}</span>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default withTranslation()(HomeScreen);
