/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { renderRoutes } from "react-router-config"

import { isRTL } from './i18n'


function App({t, i18n, route}) {

  useEffect(() => {
    // ensure page text direction follows language changes
    document.body.dir = isRTL(i18n.language)?'rtl':'ltr'
  });


  return (
    <div>
      
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <strong>{t('Accueil')}</strong>
            </Link>

            <a href="#" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-end">
            <a
              href="#"
              className={`navbar-item ${i18n.language === 'fr'?'is-active':''}`}
              onClick={(e) => {
                i18n.changeLanguage('fr');
                e.preventDefault();
              }}
            >
              Français
            </a>
            <a
              href="#"
              className={`navbar-item ${i18n.language === 'ar'?'is-active':''}`}
              onClick={(e) => {
                i18n.changeLanguage('ar');
                e.preventDefault();
              }}
            >
              العربية
            </a>
          </div>
        </div>
      </nav>

      {renderRoutes(route.routes)}

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              {t('Algorithme d\'orientation mis à jour sur les recommandations de la note n 9 du 18 mars 2020.')}
            </p>
            <p>
              {t('Ce site d\’information n\’est pas un dispositif médical, il ne délivre pas d\’avis médical.')}
            </p>
            <p>
              <div
                dangerouslySetInnerHTML={{__html: t('Projet solidaire d\'urgence, créé par le groupe <b>DZ-Scientists VS Corona</b>.')}}>
              </div>

            </p>
          </div>
        </footer>
 

    </div>
  );

}

export default withTranslation()(App);
