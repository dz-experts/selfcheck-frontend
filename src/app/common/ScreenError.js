import React from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


function ScreenError({t, message, buttonLabel, handleButtonClick}) {
  
  return (
    <section className="section has-text-centered" style={{paddingBottom: '10rem', paddingTop: '10rem'}}>
      <span className="icon is-large">
        <FontAwesomeIcon icon={faExclamationTriangle} size={'3x'} />
      </span>
      <br/>
      <br/>
      {message}
      <br/>
      <br/>
      <button
        className="button is-warning"
        onClick={handleButtonClick}
      >
        <span>{buttonLabel}</span>
      </button>
    </section>
  );
}

export default withTranslation()(ScreenError);
