import React from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { isRTL } from './../i18n'


function SelfCheckPreambuleTab({t, i18n, stepForward}) {
  
  return (
    <div>

      <div className="box">
        <h2 className="title">{t('Préambule')}</h2>
        <p>
          {t('Cette application est fournie gratuitement, uniquement à titre informatif afin de participer à fluidifier la prise en charge des personnes à risque, par les services d’urgences pendant l’épidémie de Coronavirus COVID-19. Il est important de noter que l’exhaustivité, l’exactitude, le caractère à jour des informations et contenus mis à disposition dans cette application, ou leur adéquation à des finalités particulières, ne sont pas garantis.')}
          <br/><br/>
          {t('L’utilisateur reconnaît que l’application, y compris le test et les autres informations qu’elle contient, ne constituent en aucun cas un avis, une recommandation, un examen, un diagnostic, une prescription, ou tout autre acte de nature médicale notamment établi ou réalisé par un médecin ou un pharmacien. L’utilisation de l’application, de son contenu et de ses résultats ne remplace aucunement les directives nécessaires données par votre médecin ou votre pharmacien ou tout autre professionnel de santé compétent dans chaque cas particulier. Tout examen ou prise de décision de l’utilisateur doit être réalisé ou prise de manière autonome sur la base de l’information scientifique et clinique pertinente, de la notice officielle du produit concerné le cas échéant et en cas de doute, en consultant un médecin compétent.')}
          <br/><br/>
          {t('Les informations fournies dans le cadre cette application sont uniquement destinées aux informations de premier niveau. Cette première évaluation a pour but d’orienter l’utilisateur. L’absence d’avertissement concernant un risque ne signifie pas qu’il n’existe pas.')}
        </p>
      </div>

      <button
        className="button is-primary"
        onClick={(e) => {
          stepForward({})
          window.scrollTo(0, 0);
          e.preventDefault()
        }}
      >
        <span>{t('Démarrer le test')}</span>
        <span className="icon is-small">
          <FontAwesomeIcon icon={isRTL(i18n.language)?faArrowLeft:faArrowRight} />
        </span>
      </button>

    </div>
  );
}

export default withTranslation()(SelfCheckPreambuleTab);
