import React from 'react';
import { withTranslation } from 'react-i18next'


function TextField({t, question, register, errors}) {
  
  return (
    <div className="control">
      <input
        className={`input ${errors[question.id]?'is-danger':''}`}
        name={question.id}
        type="text"
        ref={register({
          required: true,
          ...question.format.min_length!==undefined?{minLength: question.format.min_length}:{},
          ...question.format.max_length!==undefined?{maxLength: question.format.max_length}:{}
        })}
      />
      {errors[question.id] && (<p className="help is-danger">{t('Donnée non valide')}.</p>)}
    </div>
  );
}

export default withTranslation()(TextField);
