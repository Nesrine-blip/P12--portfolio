import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">À Propos</h2>
        
        <div className="about-content">
          {/* Colonne gauche - Infos */}
          <div className="about-left" data-aos="fade-right">
            <div className="about-info">
              <div className="info-item">
                <span className="info-label neon-text">Nom :</span>
                <span className="info-value">Nesrine</span>
              </div>
              <div className="info-item">
                <span className="info-label neon-text">Localisation :</span>
                <span className="info-value">Paris, France</span>
              </div>
              <div className="info-item">
                <span className="info-label neon-text">Email :</span>
                <span className="info-value">nisoudev@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label neon-text">Formation :</span>
                <span className="info-value">OpenClassrooms</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Texte */}
          <div className="about-right" data-aos="fade-left">
            <div className="about-story">
              <h3 className="story-title neon-underline">Mon Parcours</h3>
              <p className="story-text">
                Reconversion professionnelle réussie de l'enseignement du français vers le développement web. 
                Formation intensive chez OpenClassrooms avec spécialisation en React et interfaces modernes.
              </p>
            </div>

            <div className="about-story">
              <h3 className="story-title neon-underline">Expertise</h3>
              <p className="story-text">
                Maîtrise de React, Redux et JavaScript ES6+. Expertise en optimisation des performances 
                et accessibilité web à travers des projets concrets.
              </p>
            </div>

            <div className="about-story">
              <h3 className="story-title neon-underline">Objectifs</h3>
              <p className="story-text">
                Intégrer une équipe produit innovante pour contribuer à l'architecture de solutions 
                accessibles et performantes tout en continuant à évoluer techniquement.
              </p>
            </div>

            {/* Bouton CV */}
            <div className="about-actions" data-aos="fade-up">
              <a 
                href="/CV-Nesrine.pdf" 
                download 
                className="neon-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;