import React from 'react';
import { withTranslation } from 'react-i18next'

function AboutScreen({t}) {

  return (
    <div>

      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container content">
            <h1 className="title">
              {t('À propos')}
            </h1>
            <p>
              {t('DZ Scientists VS Corona est un groupe né de manière organique, initié par une poignée d’amis, au début de la crise liée au COVID-19 en Algérie. Nous sommes aujourd’hui une centaine d’algériens complètement indépendants et répartis partout sur la planète avec des expertises en Sciences, Ingénierie et Informatiques. Nous sommes tous unis pour une seule vocation : aider notre pays à traverser cette crise sans précédent.')}
            </p>

            <p>
              {t('Notre objectif est de rationaliser et fédérer plusieurs initiatives de lutte contre le COVID-19 en Algérie, pour une prestation de soutien efficace et efficiente. Nous travaillons ensemble pour développer une large gamme de solutions techniques dans le but d’aider les professionnels de la santé algériens et le public algérien dans leur lutte quotidienne.')}
            </p>

            <p>
              {t('Nous travaillons actuellement sur plusieurs projets :')}
              <ul>
                <li>{t('Importation de Kits de test pour l’Algérie.')}</li>
                <li>{t('Production en masse de masques de protection (Face Shields).')}</li>
                <li>{t('Production en matériels de protection (Masques, Blouses, etc).')}</li>
                <li>{t('Production et déploiement d’applications permettant au corps médical ainsi qu’à la population de se prémunir et de s’orienter face à la crise.')}</li>
                <li>{t('Élaboration d’un respirateur artificiel « Made in Algeria ».')}</li>
              </ul>
            </p>

            <p>
              {t('Pour finir, il est important de noter que nous ne sommes ni une entreprise, ni une association, ni un regroupement politique, nous sommes un groupe de jeunes qui travaillons main dans la main afin de trouver au mieux de nos capacités, des solutions à la crise actuelle !')}
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}

export default withTranslation()(AboutScreen);
