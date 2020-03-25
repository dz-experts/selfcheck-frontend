import React, { useState } from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";

import TextField from './fields/TextField'
import NumberField from './fields/NumberField'
import SelectField from './fields/SelectField'
import RadioField from './fields/RadioField'


function SurveyInformation({t, i18n, current_step, questions, stepForward, stepBack}) {
  
  const current_question = questions[current_step - 1]
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  
  const defaultValues = {}
  defaultValues[current_question.key] = current_question.default_value

  const { handleSubmit, register, errors, reset } = useForm({defaultValues});
  const onSubmit = values => {
    setSubmitIsLoading(true)
    stepForward({answer: {key: current_question.key, value: values[current_question.key]}})
      .then(() => {
        reset() // needed in order for the form to be reset for use in the next question
        setSubmitIsLoading(false)
      })
      .catch(() => {
        setSubmitIsLoading(false)
      })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="box">
        
        <button
          className="button is-white"
          onClick={(e) => {
            stepBack()
            e.preventDefault()
          }}
        >
          <span className="icon is-small">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <span>{t('Question')} {current_step} {t('sur')} {questions.length}</span>
        </button>
        
        <h2 className="title">
          {current_question[`text_${i18n.language}`]}
        </h2>

        <div className="tile">
          {current_question.format.type.toLowerCase() === 'text' && (<TextField question={current_question} register={register} errors={errors} />)}
          {current_question.format.type.toLowerCase() === 'number' && (<NumberField question={current_question} register={register} errors={errors} />)}
          {current_question.format.type.toLowerCase() === 'select' && (<SelectField question={current_question} register={register} errors={errors} />)}
          {current_question.format.type.toLowerCase() === 'radio' && (<RadioField question={current_question} register={register} errors={errors} />)}
        </div>

      </div>

      <button
        className={`button is-light ${submitIsLoading?'is-loading':''}`}
        type="submit"
      >
        <span>{t('Continuer')}</span>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>

    </form>
  );
}

export default withTranslation()(SurveyInformation);
