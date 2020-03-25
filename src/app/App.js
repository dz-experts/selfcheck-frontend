/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { renderRoutes } from "react-router-config"


function App({t, i18n, route}) {

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
            {t('Ce site d’information n’est pas un dispositif médical, il ne délivre pas d’avis médical.')}
          </p>
        </div>
      </footer>

    </div>
  );
}

export default withTranslation()(App);
