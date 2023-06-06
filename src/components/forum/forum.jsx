function Forum() {
    return (
      <div className="forum">
        <div style={{backgroundColor: '#1B7B6D', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: "7em", color: 'white'}}>
            <h1>Forum</h1>
        </div>
        <div className="thread">
            <h2 style={{fontWeight: 'bold', fontSize: '2em'}}>LOGEMENT</h2>
            <div style={{display:'flex', justifyContent: 'space-between' }}>
                <p style={{fontWeight: 'bold'}}>Forum</p>
                <div>
                    <ul style={{display:'flex', width: '20em', justifyContent: 'space-between', marginRight: '10em', fontWeight: 'bold'}}>
                        <li>Sujet</li>
                        <li>Post</li>
                        <li>Dernier Post</li>
                    </ul>
                </div>
            </div>
            <div className="comments">
            <div className="comment">
                <div>
                    <h3 style={{fontWeight: 'bold'}}>Manque d'accessibilité et d'abordabilité du logement</h3>
                    <p>Cette situation peut entraîner un cycle de pauvreté et d'exclusion sociale</p>
                </div>
                <div>
                    <ul style={{display:'flex', width: '23em', justifyContent: 'space-between', marginRight: '6.4em'}}>
                        <li style={{paddingLeft: '1em'}}>2</li>
                        <li>6</li>
                        <li>
                            <div style={{paddingRight: '1em'}}>
                                <p>Par Corinne</p>
                                <p>6 juin 2023 11:11</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="comment">
                <div>
                    <h3 style={{fontWeight: 'bold'}}>Discrimination dans l'accès au logement</h3>
                    <p>Cela rend leur insertion dans la société beaucoup plus difficile</p>
                </div>
                <div>
                    <ul style={{display:'flex', width: '23em', justifyContent: 'space-between', marginRight: '6.4em'}}>
                        <li style={{paddingLeft: '1em'}}>1</li>
                        <li>2</li>
                        <li>
                            <div style={{paddingRight: '1em'}}>
                                <p>Par Corinne</p>
                                <p>6 juin 2023 11:16</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div className="thread">
            <h2 style={{fontWeight: 'bold', fontSize: '2em'}}>HANDICAP</h2>
            <div style={{display:'flex', justifyContent: 'space-between' }}>
                <p style={{fontWeight: 'bold'}}>Forum</p>
                <div>
                    <ul style={{display:'flex', width: '20em', justifyContent: 'space-between', marginRight: '10em', fontWeight: 'bold'}}>
                        <li>Sujet</li>
                        <li>Post</li>
                        <li>Dernier Post</li>
                    </ul>
                </div>
            </div>
            <div className="comments">
            <div className="comment">
                <div>
                    <h3 style={{fontWeight: 'bold'}}>Discrimination dans l'accès au logement</h3>
                    <p>Cela rend leur insertion dans la société beaucoup plus difficile</p>
                </div>
                <div>
                    <ul style={{display:'flex', width: '23em', justifyContent: 'space-between', marginRight: '6.4em'}}>
                        <li style={{paddingLeft: '1em'}}>4</li>
                        <li>7</li>
                        <li>
                            <div style={{paddingRight: '1em'}}>
                                <p>Par Marie</p>
                                <p>5 juin 2023 09:42</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div className="thread">
            <h2 style={{fontWeight: 'bold', fontSize: '2em'}}>ÉDUCATION ET JEUNESSE</h2>
            <div style={{display:'flex', justifyContent: 'space-between' }}>
                <p style={{fontWeight: 'bold'}}>Forum</p>
                <div>
                    <ul style={{display:'flex', width: '20em', justifyContent: 'space-between', marginRight: '10em', fontWeight: 'bold'}}>
                        <li>Sujet</li>
                        <li>Post</li>
                        <li>Dernier Post</li>
                    </ul>
                </div>
            </div>
            <div className="comments">
            <div className="comment">
                <div>
                    <h3 style={{fontWeight: 'bold'}}>Inégalités dans l'accès à l'éducation</h3>
                    <p>Cela crée un cycle de pauvreté et d'inégalité qui peut être difficile à briser</p>
                </div>
                <div>
                    <ul style={{display:'flex', width: '23em', justifyContent: 'space-between', marginRight: '6.4em'}}>
                        <li style={{paddingLeft: '1em'}}>2</li>
                        <li>6</li>
                        <li>
                            <div style={{paddingRight: '1.2em'}}>
                                <p>Par Catherine</p>
                                <p>6 juin 2023 09:51</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="comment">
                <div>
                    <h3 style={{fontWeight: 'bold'}}>Qualité de l'éducation</h3>
                    <p>Un manque de qualité dans l'éducation peut laisser les jeunes mal préparés pour le monde du travail et la vie en général.</p>
                </div>
                <div>
                    <ul style={{display:'flex', width: '23em', justifyContent: 'space-between', marginRight: '6.4em'}}>
                        <li style={{paddingLeft: '1em'}}>6</li>
                        <li>3</li>
                        <li>
                            <div style={{paddingRight: '1em'}}>
                                <p>Par Sarah</p>
                                <p>6 juin 2023 14:46</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="comment">
                <div>
                    <h3 style={{fontWeight: 'bold'}}>Santé mentale et bien-être des jeunes</h3>
                    <p>Cela peut à son tour affecter leur capacité à apprendre et à s'épanouir.</p>
                </div>
                <div>
                    <ul style={{display:'flex', width: '23em', justifyContent: 'space-between', marginRight: '6.4em'}}>
                        <li style={{paddingLeft: '1em'}}>1</li>
                        <li>2</li>
                        <li>
                            <div style={{paddingRight: '1em'}}>
                                <p>Par Sarah</p>
                                <p>6 juin 2023 15:07</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }

  export default Forum;