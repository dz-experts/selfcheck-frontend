import React, { useState } from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";

import { isRTL } from './../i18n'

import TextField from './fields/TextField'
import NumberField from './fields/NumberField'
import SelectField from './fields/SelectField'
import RadioField from './fields/RadioField'


function SelfCheckQuestionsTab({t, i18n, current_step, questions, answers, addAnswer, stepForward, stepBack}) {
  
  const current_question = questions[current_step - 1]
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  
  const defaultValues = {}
  defaultValues[current_question.key] = current_question.default_value

  const { handleSubmit, register, unregister, errors, reset } = useForm({defaultValues});
  
  const onSubmit = values => {
    setSubmitIsLoading(true)

    // store answer
    addAnswer(current_question.id, current_question.key, values[current_question.key])

    // reset current form fields (needed in order for the form to be empty for use in the next question)
    let empty_values = {}
    empty_values[current_question.key] = "" // this exact line is important, so Radio fields can be reset too
    reset(empty_values)
    unregister(current_question.key)

    // step forward
    stepForward()
      .then(() => {
        setSubmitIsLoading(false)
      })
      .catch(() => {
        setSubmitIsLoading(false)
      })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <button
        type="button"
        className="button is-light is-small"
        onClick={(e) => {
          if (answers.length) {
            let last_answer_values = {}
            last_answer_values[answers[answers.length - 1].key] = answers[answers.length - 1].value
            reset(last_answer_values)
          }
          stepBack()
          e.preventDefault()
        }}
        style={{marginBottom: '1rem'}}
      >
        <span className="icon is-small">
          <FontAwesomeIcon icon={isRTL(i18n.language)?faArrowRight:faArrowLeft} />
        </span>
        <span>{t('Retour')}</span>
      </button>
      <div className="box">
        
        <span>{t('Question')} <strong>{current_step}</strong> {t('sur')} {questions.length}</span>
        
        <h2 className="title">
          {current_question[`text_${i18n.language}`]}
        </h2>

        <article className="message">
          <div className="message-body" style={{borderWidth: 0}}>
            {current_question.format.type.toLowerCase() === 'text' && (<TextField question={current_question} register={register} errors={errors} />)}
            {current_question.format.type.toLowerCase() === 'number' && (<NumberField question={current_question} register={register} errors={errors} />)}
            {current_question.format.type.toLowerCase() === 'select' && (<SelectField question={current_question} register={register} errors={errors} />)}
            {current_question.format.type.toLowerCase() === 'radio' && (<RadioField question={current_question} register={register} errors={errors} />)}
          </div>
        </article>

      </div>

      <button
        className={`button is-light ${submitIsLoading?'is-loading':''}`}
        type="submit"
      >
        <strong>{t('Continuer')}</strong>
        <span className="icon is-small">
        <FontAwesomeIcon icon={isRTL(i18n.language)?faArrowLeft:faArrowRight} />
        </span>
      </button>

    </form>
  );
}

export default withTranslation()(SelfCheckQuestionsTab);
