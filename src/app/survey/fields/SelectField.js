/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withTranslation } from 'react-i18next'

import { errorMessage } from './../../utils/forms'


function SelectField({t, i18n, question, register, errors}) {
  
  return (
    <div>
      <div className="field has-addons">
        <div className="control">
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
        </div>
        {question.format[`suffix_${i18n.language}`] !== null && (
          <p className="control">
            <a className="button is-static">
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
