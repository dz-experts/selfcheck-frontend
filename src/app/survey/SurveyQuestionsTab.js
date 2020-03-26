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


function SurveyQuestionsTab({t, i18n, current_step, questions, answers, addAnswer, stepForward, stepBack}) {
  
  const current_question = questions[current_step - 1]
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  
  const defaultValues = {}
  defaultValues[current_question.key] = current_question.default_value

  const { handleSubmit, register, errors, reset } = useForm({defaultValues});
  
  const onSubmit = values => {
    setSubmitIsLoading(true)
    addAnswer(current_question.id, current_question.key, values[current_question.key], current_question.format)
    stepForward()
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
            if (answers.length) {
              let last_answer_values = {}
              last_answer_values[answers[answers.length - 1].key] = answers[answers.length - 1].value
              reset(last_answer_values)
            }
            stepBack()
            e.preventDefault()
          }}
        >
          <span className="icon is-small">
            <FontAwesomeIcon icon={isRTL(i18n.language)?faArrowRight:faArrowLeft} />
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
        <FontAwesomeIcon icon={isRTL(i18n.language)?faArrowLeft:faArrowRight} />
        </span>
      </button>

    </form>
  );
}

export default withTranslation()(SurveyQuestionsTab);
