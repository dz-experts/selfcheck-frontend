import React from 'react';
import { withTranslation } from 'react-i18next'


function CharField({t, question, answer}) {
  
  return (
    <div className="control">
      <input className="input" type="text" maxLength="1" placeholder={t('Insérez un caractère')} />
    </div>
  );
}

export default withTranslation()(CharField);
