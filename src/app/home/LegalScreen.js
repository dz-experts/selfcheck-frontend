import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { isRTL } from './../i18n'


function HomeScreen({t, i18n}) {

  return (
    <div>

      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {t('À propos & Mentions légales')}
            </h1>
            <div class="columns">
              <div class="column is-four-fifths is-offset-one-fifth">
                <h3 class="subtitle is-4">{t('À propos de site et la politique de confidentialité')}</h3>
                <p></p>

                <h3 class="subtitle is-4">{t('Mentions légales')}</h3>
                <p></p>
              </div>

            </div>


          </div>
        </div>
      </section>

    </div>
  );
}

export default withTranslation()(HomeScreen);
