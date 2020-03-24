import React from 'react';
import { withTranslation } from 'react-i18next'


function NumberField({t, question, answer}) {
  
  return (
    <div className="control">
      <input className="input" type="number" placeholder={t('Inserez un nombre')} />
    </div>
  );
}

export default withTranslation()(NumberField);
