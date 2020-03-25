/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withTranslation } from 'react-i18next'

import { errorMessage } from './../../utils/forms'


function SelectField({t, i18n, question, register, errors}) {
  
  return (
    <div>
      <div class="field has-addons">
        <p class="control">
          <div className={`select ${errors[question.key]?'is-danger':''}`}>
            <select
              name={question.key}
              ref={register({
                required: {value: true, message: errorMessage('required', t)()}
              })}
            >
              {question.format.choices.map((choice) => (
                <option key={choice.value} value={choice.value}>{choice[`label_${i18n.language}`]}</option>
              ))}
            </select>
          </div>
        </p>
        {question.format[`suffix_${i18n.language}`] !== null && (
          <p class="control">
            <a class="button is-static">
              {question.format[`suffix_${i18n.language}`]}
            </a>
          </p>
        )}
      </div>
      {errors[question.key] && (<p className="help is-danger">{errors[question.key].message}.</p>)}
    </div>
  );
}

export default withTranslation()(SelectField);
