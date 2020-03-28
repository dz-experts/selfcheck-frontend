import React from 'react';
import { withTranslation } from 'react-i18next'

function LegalScreen({t}) {

  return (
    <div>

      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {t('À propos')}
            </h1>
            <h3 className="subtitle is-4">{t('Des informations à propos du siteweb, et politique de confidentialité.')}</h3>
            <p></p>

          </div>
        </div>
      </section>

    </div>
  );
}

export default withTranslation()(LegalScreen);
