import React from 'react';
import { withTranslation } from 'react-i18next'


function SelectField({t, i18n, question, register, errors}) {
  
  return (
    <div className="control">
      <div className={`select ${errors[question.id]?'is-danger':''}`}>
        <select
          name={question.id}
          ref={register({
            required: true
          })}
        >
          {question.format.choices.map((choice) => (
            <option key={choice.value} value={choice.value}>{choice[`label_${i18n.language}`]}</option>
          ))}
        </select>
      </div>
      {errors[question.id] && (<p className="help is-danger">{t('Donnée non valide')}.</p>)}
      
    </div>
  );
}

export default withTranslation()(SelectField);
