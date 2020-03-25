import React from 'react';
import { withTranslation } from 'react-i18next'

import { errorMessage } from './../../utils/forms'


function NumberField({t, question, register, errors}) {

  return (
    <div className="control">
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
      {errors[question.key] && (<p className="help is-danger">{errors[question.key].message}.</p>)}
    </div>
  );
}

export default withTranslation()(NumberField);
