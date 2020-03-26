import React from 'react';
import { withTranslation } from 'react-i18next'

function LegalScreen({t, i18n}) {

  return (
    <div>

      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {t('À propos & Mentions légales')}
            </h1>
            <div className="columns">
              <div className="column is-four-fifths is-offset-one-fifth">
                <h3 className="subtitle is-4">{t('À propos de site et la politique de confidentialité')}</h3>
                <p></p>

                <h3 className="subtitle is-4">{t('Mentions légales')}</h3>
                <p></p>
              </div>

            </div>


          </div>
        </div>
      </section>

    </div>
  );
}

export default withTranslation()(LegalScreen);
