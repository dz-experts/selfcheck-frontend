/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withTranslation } from 'react-i18next'

import { errorMessage } from './../../utils/forms'


function NumberField({t, i18n, question, register, errors}) {

  return (
    <div class="field has-addons">
      <p class="control">
        <input
          className={`input ${errors[question.key]?'is-danger':''}`}
          name={question.key}
          type="number"
          step={question.format.kind==='decimal'?"0.01":"1"}
          ref={register({
            required: {value: true, message: errorMessage('required', t)()},
            ...question.format.min!==undefined?{min: {value: question.format.min, message: errorMessage('min', t)(question.format.min) }}:{},
            ...question.format.max!==undefined?{max: {value: question.format.max, message: errorMessage('max', t)(question.format.max) }}:{}
          })}
        />
      </p>
      {question.format[`suffix_${i18n.language}`] !== null && (
        <p class="control">
          <a class="button is-static">
            {question.format[`suffix_${i18n.language}`]}
          </a>
        </p>
      )}
      {errors[question.key] && (<p className="help is-danger">{errors[question.key].message}.</p>)}
    </div>
  );
}

export default withTranslation()(NumberField);
