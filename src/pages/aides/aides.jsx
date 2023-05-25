import React from 'react'
import Section from '../../components/section/section'
import PropTypes from 'prop-types';

const Aides = ({datas}) => {
  return (
    <div className='aides'>
        <article className='aides__navigation'>
            <h2 className='aides__navigation-title'>NOS AIDES</h2>
            <div className='aides__navigation-group'>
                <ul className='aides__navigation-group-1'>
                    <li>INSERTION ET RETOUR À L'EMPLOI</li>
                    <li>LOGEMENT</li>
                    <li>ÉDUCATION ET JEUNESSE</li>
                    <li>PERSONNES ÂGÉES</li>
                </ul>
                <ul className='aides__navigation-group-2'>
                    <li>HANDICAP</li>
                    <li>ROUTES ET DÉPLACEMENTS</li>
                    <li>CULTURE ET PATRIMOINE</li>
                    <li>SPORTS ET LOISIRS</li>
                </ul>
                <ul className='aides__navigation-group-3'>
                    <li>AGRICULTURE</li>
                    <li>TOURISME</li>
                    <li>AIDES AUX COLLECTIVITÉS</li>
                </ul>
            </div>
        </article>
        <section className='aides__section'>
            <div className='aides__section-group'>
                {datas.data.map((data, index) => {
                    return (
                        <div key={index} className='aides__section-group-social'>
                            <h2 className='aides__section-group-social-titre'>{data.titre}</h2>
                            <div className='aides__section-group-social-card'>
                                {data.cards.map((card, index) => (
                                <Section 
                                key={index} 
                                image={card.image} 
                                title={card.title} 
                                />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            <aside className='aides__section-aside'>
                <h3 className='aides__section-aside-title'>Dernières Actualité</h3>
                    <div className='aides__section-aside-group'>
                        <p className='aides__section-aside-group-date'>22 mai 2023</p>
                        <h4 className='aides__section-aside-group-titre'>Séminaire au WTC</h4>
                        <p className='aides__section-aside-group-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem incidunt fuga harum consectetur nostrum quam cum laudantium modi. 
                        Sed iusto officiis harum ipsum consequuntur optio dignissimos dolores commodi aperiam labore?</p>
                    </div>
                    <div className='aides__section-aside-group'>
                        <p className='aides__section-aside-group-date'>27 mai 2023</p>
                        <h4 className='aides__section-aside-group-titre'>Relais Inter Entreprise</h4>
                        <p className='aides__section-aside-group-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem incidunt fuga harum consectetur nostrum quam cum laudantium modi. 
                        Sed iusto officiis harum ipsum consequuntur optio dignissimos dolores commodi aperiam labore?</p>
                    </div>
                    <div className='aides__section-aside-group'>
                        <p className='aides__section-aside-group-date'>01 juin 2023</p>
                        <h4 className='aides__section-aside-group-titre'>Séminaire au WTC</h4>
                        <p className='aides__section-aside-group-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem incidunt fuga harum consectetur nostrum quam cum laudantium modi. 
                        Sed iusto officiis harum ipsum consequuntur optio dignissimos dolores commodi aperiam labore?</p>
                    </div>
                    <div className='aides__section-aside-group'>
                        <p className='aides__section-aside-group-date'>06 juin 2023</p>
                        <h4 className='aides__section-aside-group-titre'>Séminaire lancement SPIE</h4>
                        <p className='aides__section-aside-group-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem incidunt fuga harum consectetur nostrum quam cum laudantium modi. 
                        Sed iusto officiis harum ipsum consequuntur optio dignissimos dolores commodi aperiam labore?</p>
                    </div>
            </aside>
        </section>
    </div>
  )
}

Aides.propTypes = {
    datas: PropTypes.arrayOf(PropTypes.shape({
      titre: PropTypes.string,
      cards: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
      })),
    })),
  }

export default Aides