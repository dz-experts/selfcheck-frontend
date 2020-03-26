/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withTranslation } from 'react-i18next'

import { errorMessage } from './../../utils/forms'


function TextField({t, i18n, question, register, errors}) {
  
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <input
            className={`input ${errors[question.key]?'is-danger':''}`}
            name={question.key}
            type="text"
            ref={register({
              required: {value: true, message: errorMessage('required', t)()},
              ...question.format.min_length!==undefined?{minLength: {value: question.format.minLength, message: errorMessage('minLength', t)(question.format.minLength) }}:{},
              ...question.format.max_length!==undefined?{maxLength: {value: question.format.maxLength, message: errorMessage('maxLength', t)(question.format.maxLength) }}:{}
            })}
          />
        </p>
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

export default withTranslation()(TextField);
