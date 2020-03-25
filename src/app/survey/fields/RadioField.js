import React from 'react';
import { withTranslation } from 'react-i18next'

import { errorMessage } from './../../utils/forms'


function RadioField({t, i18n, question, register, errors}) {
  
  return (
    <div className="control">
      {question.format.choices.map((choice) => (
        <label className="radio" key={choice.value}>
          <input
            type="radio"
            name={question.key}
            value={choice.value}
            ref={register({
              required: {value: true, message: errorMessage('required', t)()}
            })}
          />
          {choice[`label_${i18n.language}`]}
          <br/>
        </label>
      ))}
      {errors[question.key] && (<p className="help is-danger">{errors[question.key].message}.</p>)}
    </div>
  );
}

export default withTranslation()(RadioField);
