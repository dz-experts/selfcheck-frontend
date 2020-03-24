import React from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function LoadingIndicator({t}) {
  
  return (
    <section className="section has-text-centered">
      <span className="icon is-large">
        <FontAwesomeIcon icon={faSpinner} pulse={true} size={'3x'} />
      </span>
      <br/>
      <br/>
      {t('Chargement..')}
    </section>
  );
}

export default withTranslation()(LoadingIndicator);
