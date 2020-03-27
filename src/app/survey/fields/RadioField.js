import React from 'react';
import { withTranslation } from 'react-i18next'

import { errorMessage } from './../../utils/forms'
import { isRTL } from './../../i18n'


function RadioField({t, i18n, question, register, errors}) {
  
  return (
    <div>
      {question.format.choices.map((choice, index) => (
        <div className="field" key={choice.value}>
          <input
            type="radio"
            className={`is-checkradio ${isRTL(i18n.language)?'is-rtl': ''}`}
            id={`radio_${question.key}_${index}`}
            name={question.key}
            value={choice.value}
            ref={register({
              required: {value: true, message: errorMessage('required', t)()}
            })}
          />
          <label htmlFor={`radio_${question.key}_${index}`}>{choice[`label_${i18n.language}`]}</label>
        </div>
      ))}
      {errors[question.key] && (<p className="help is-danger">{errors[question.key].message}.</p>)}
    </div>
  );
}

export default withTranslation()(RadioField);
