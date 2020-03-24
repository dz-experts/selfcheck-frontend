import React from 'react';
import { withTranslation } from 'react-i18next'


function NumberField({t, question, register, errors}) {
  
  return (
    <div className="control">
      <input
        className={`input ${errors[question.key]?'is-danger':''}`}
        name={question.key}
        type="number"
        step={question.format.decimal?"0.01":"1"}
        ref={register({
          required: true,
          ...question.format.min!==undefined?{min: question.format.min}:{},
          ...question.format.max!==undefined?{max: question.format.max}:{}
        })}
      />
      {errors[question.key] && (<p className="help is-danger">{t('Donnée non valide')}.</p>)}      
    </div>
  );
}

export default withTranslation()(NumberField);
