import React from 'react';
import { withTranslation } from 'react-i18next'

import { errorMessage } from './../../utils/forms'


function TextField({t, question, register, errors}) {
  
  return (
    <div className="control">
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
      {errors[question.key] && (<p className="help is-danger">{errors[question.key].message}.</p>)}
    </div>
  );
}

export default withTranslation()(TextField);
