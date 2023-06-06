import React from 'react';
import Partner from '../../components/partner/partner'

import CDG from '../../assets/img/CDG.jpg'
import POLE from '../../assets/img/Pole.png'
import CAP from '../../assets/img/Cap.png'
import CAF from '../../assets/img/Caf.png'
import MILE from '../../assets/img/Mile.png'

import Image1 from '../../assets/img/rendezvous.png'; // Change path to real image
import Image2 from '../../assets/img/carnet.png'; // Change path to real image
import Image3 from '../../assets/img/dora.jpg'; // Change path to real image

const Spie = () => (
<div className="spie-page">
    <h1 className="spie-page__title">SPIE</h1>
    <p className="spie-page__definition">
    Une méthode concertée entre partenaires pour que toutes les structures appelées à intervenir dans le parcours vers l’emploi d’une personne (Conseil départemental, Pôle emploi, Caisse d’allocations familiales, Cap emploi, mission locale, associations, CCAS, etc.) se coordonnent et simplifient ses démarches. <br />
    Chaque individu doit se voir proposer un parcours d’accompagnement personnalisé prenant en compte toutes ses difficultés pour s’insérer (logement, santé, mobilité, etc.). Ce parcours est coordonné entre les différents professionnels pour lui éviter de multiplier les démarches, avec un suivi dans le temps qui lui est proposé. <br />
    Cette volonté repose sur la conviction que seul l’accès à l’emploi permet une sortie durable de la pauvreté. Le droit à un accompagnement personnalisé doit plus que jamais devenir une réalité tangible et accessible en tout point du territoire.
    </p>

    <h2 className="spie-page__subtitle">Membres du Consortium SPIE</h2>
    {/* <ul className="spie-page__members">
      <li>
        <strong>Membre 1 :</strong> Mission...
      </li>
      <li>
        <strong>Membre 2 :</strong> Mission... 
      </li>
      <li>
        <strong>Membre 3 :</strong> Mission... 
      </li>
    </ul> */}
    <div className="spie-page__members">
        <Partner picture={POLE} title="Pôle d'emploi" author="Demandeur d'emploi"/>
        <Partner picture={CAP} title="Cap Emploi" author="Emploi pour personnes handicapées"/>
        <Partner picture={CAF} title="CAF" author="Prestations familiales et sociales"/>
        <Partner picture={CDG} title="Conseil départemental" author="Développement local"/>
        <Partner picture={MILE} title="Mission Local" author="Insertion professionnelle des jeunes"/>
    </div>
    <h2 className="spie-page__subtitle">Public cible du SPIE</h2>
    <table className="spie-page__public-table">
      <thead>
        <tr>
          <th></th>
          <th>Cible prioritaire</th>
          <th>Cible complémentaire : DE (demandeur d'emploi)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cible 1 : jeunes 18/26 ans</td>
          <td>
            <ul>
                <li>Jeunes sortant de L'ASE</li>
                <li>Jeunes placés sous-main de justice</li>
                <li> Jeunes parents avec freins sociaux</li>
            </ul>
          </td> {/* Put the public's description here */}
          <td></td>
        </tr>
        <tr>
          <td>Cible 2 : Bénéficiaires du RSA</td>
          <td>Description...
            <ul>
                <li>BRSA+ 50 ans, en situation d'isolement avec enfants(s) à charge et en recherche d'emploi, disponible pour un retour à l'emploi</li>
                <li>Les primo entrants :</li>
                <ul>
                    <li>Hommes primo entrant entre 26 et 40ans</li>
                    <li>Femme célibataire primo entrant sans enfant</li>
                </ul>
            </ul>
          </td> {/* Put the public's description here */}
          <td></td>
        </tr>
        <tr>
          <td>Cible 3 : Travailleur Handicapé notamment</td>
          <td></td> {/* Put the public's description here */}
          <td>
            <ul>
                <li>Les DE TH accompagnés pour l'accès à l'emploi, bénéficiaire de l'AAH</li>
                <li>Les DE TH accompagnés pour l'accès à l'emploi, sans revenu</li>
            </ul>
          </td> 
        </tr>
        <tr>
          <td>Cible 4 : DE entre 30 et 45 ans</td>
          <td></td> {/* Put the public's description here */}
          <td>Femmes, plus 3 ans d'inscription, sans revenu</td> 
        </tr>
        {/* Continue for other publics */}
      </tbody>
    </table>

    <h2 className="spie-page__subtitle">Logiciels SPIE</h2>
    <div className="spie-page__software">
      <div className="spie-page__software-item">
        <h3 className="spie-page__software-item-title">Rendez-vous Insertion</h3>
        <img src={Image1} alt="Rendez-vous Insertion" className="spie-page__software-item-image" />
        <p className="spie-page__software-item-description">Logiciel de prise de rendez-vous pour les bénéficiaires du SPIE. 
        Les conseillers d'insertion peuvent utiliser ce logiciel pour planifier des rendez-vous avec les bénéficiaires et suivre leur progression.</p>
      </div>
      <div className="spie-page__software-item">
        <h3 className="spie-page__software-item-title">Carnet de Bord</h3>
        <img src={Image2} alt="Carnet de Bord" className="spie-page__software-item-image" />
        <p className="spie-page__software-item-description">Outil de suivi des actions réalisées par les bénéficiaires du SPIE et des résultats obtenus. 
        Les conseillers d'insertion peuvent utiliser ce logiciel pour enregistrer les actions réalisées par les bénéficiaires, telles que les formations suivies, les stages effectués, les candidatures envoyées, etc. <br/>
        Ils peuvent également suivre les résultats obtenus, tels que les offres d'emploi obtenues, les diplômes obtenus, etc.</p> {/* Put the software's description here */}
      </div>
      <div className="spie-page__software-item">
        <h3 className="spie-page__software-item-title">Dora</h3>
        <img src={Image3} alt="Dora"className="spie-page__software-item-image" />
        <p className="spie-page__software-item-description">Logiciel d'orientation professionnelle pour les bénéficiaires du SPIE. 
        Les bénéficiaires peuvent utiliser ce logiciel pour identifier les métiers qui correspondent le mieux à leurs compétences et à leurs aspirations professionnelles. 
        Les conseillers d'insertion peuvent également utiliser ce logiciel pour aider les bénéficiaires à définir leur projet professionnel et à identifier les formations et les offres d'emploi correspondant à leurs objectifs.</p> {/* Put the software's description here */}
      </div>
    </div>
  </div>
);

export default Spie;