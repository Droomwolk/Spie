import CDG from '../../assets/img/CDG.jpg'

const homepage = () => {
  return (
    <div className='homepage'>
      <header className='homepage__header'>
        <img src={CDG} alt="logo" className='homepage__header-logo'/>
        <nav className='homepage__header-nav'>
          <input type="search" placeholder='Rechercher' className='homepage__header-nav-searchbar'/>
          <div className='homepage__header-nav-group'>
            <ul className='homepage__header-nav-group-list'>
              <li>À propos</li>
              <li>Partenaires</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </nav>
        <div className='homepage__header-login'>
          <button style={{marginRight: "1em"}}>Se connecter</button>
          <button>S'inscrire</button>
        </div>
      </header>
      <main className='homepage__main'>
        <article className='homepage__main-slogan'>
          <p>Ensemble, <strong style={{fontWeight: 'bold'}}>tissons</strong></p>
          <p>l'avenir du travail en Guadeloupe</p>
          <p><strong style={{fontWeight: 'bold'}}>SPIE</strong>, votre partenaire pour une insertion réussie !</p>
        </article>
        <section className='homepage__main-definition'>
          <p>Le SPIE Guadeloupe œuvre pour l'insertion professionnelle et l'accompagnement des bénéficiaires du RSA. <br/>
            En étroite collaboration avec nos partenaires locaux, nous créons des opportunités d'emploi adaptées à vos compétences et ambitions. <br/>
            Ensemble, nous bâtissons un avenir prometteur pour chacun et renforçons la dynamique économique de notre territoire.</p>
        </section>
      </main>
    </div>
  )
}

export default homepage