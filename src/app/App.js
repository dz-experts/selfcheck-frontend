/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { renderRoutes } from "react-router-config"
import Cookies from 'js-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { isRTL } from './i18n'
import constants from './../constants'


function App({t, i18n, route, history}) {

  useEffect(() => {
    // ensure page text direction follows language changes
    document.body.dir = isRTL(i18n.language)?'rtl':'ltr'

    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    
    return () => {
      unlisten();
    }
  });

  const [isActiveLanguageMenu, setIsActiveLanguageMenu] = useState(false);

  return (
    <div>
      
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <strong>{t('Accueil')}</strong>
            </Link>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className={`navbar-item has-dropdown ${isActiveLanguageMenu ? "is-active" : ""}`}>
                <div
                  className="navbar-link is-arrowless"
                  onBlur={(e) => {
                    setIsActiveLanguageMenu(false)
                  }}
                  onFocus={(e) => {
                    setIsActiveLanguageMenu(!isActiveLanguageMenu)
                  }}
                  tabIndex="0"
                >
                  {((language) => {
                    switch (language) {
                      case 'fr':
                        return 'Français'
                      case 'ar':
                          return 'العربية'
                      default:
                        return 'Language'
                    }
                  })(i18n.language)}
                  <span className="icon is-small" style={{margin: isRTL(i18n.language)?'0 .5rem 0 0':'0 0 0 .5rem'}}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </div>

                <div className="navbar-dropdown">
                  <a
                    href="#"
                    className={`navbar-item ${i18n.language === 'fr'?'is-active':''}`}
                    onMouseDown={(e) => {
                      i18n.changeLanguage('fr');
                      Cookies.set(constants.COOKIE_LANG_KEY, 'fr')
                      setIsActiveLanguageMenu(false)
                    }}
                  >
                    Français
                  </a>
                  <a
                    href="#"
                    className={`navbar-item ${i18n.language === 'ar'?'is-active':''}`}
                    onMouseDown={(e) => {
                      i18n.changeLanguage('ar');
                      Cookies.set(constants.COOKIE_LANG_KEY, 'ar')
                      setIsActiveLanguageMenu(false)
                    }}
                  >
                    العربية
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {renderRoutes(route.routes)}

      <footer className="footer">
        <div className="container">
          <div className="columns">
              <div className="column">
                  <aside className="menu">
                  <p className="menu-label">
                      {t('Contacts utiles')}
                  </p>
                      <ul className="menu-list">
                          <li><a href="tel:3030">{t('Appelez le')}  30 30</a></li>
                          <li><a href='http://www.sante.gov.dz/coronavirus/coronavirus-2019.html'>{t('Site du ministère de la Santé')}</a></li>
                      </ul>
                  </aside>
              </div>
                  <div className="column">
                  <aside className="menu">
                      <p className="menu-label">
                          {t('Navigation')}
                      </p>
                      <ul className="menu-list">
                          <li><Link to='/'>{t('Accueil')}</Link></li>
                          <li><Link to='/about'> {t('À propos')}</Link></li>
                          <li><Link to='/legal-notice'> {t('Mentions légales')}</Link></li>
                      </ul>
                  </aside>
              </div>
              <div className="column is-half">
                  <p>
                    {t('Ce site d’information n’est pas un dispositif médical et ne délivre pas d’avis médical.')}
                  </p>
                  <p dangerouslySetInnerHTML={{__html: t('Projet solidaire d\'urgence, créé par le groupe <b>DZ Scientists VS Corona</b>.')}}></p>
              </div>
          </div>
        </div>

      </footer>
 

    </div>
  );

}

export default compose(
  withRouter,
  withTranslation(),
)(App)

