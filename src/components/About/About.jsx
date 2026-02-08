import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">À Propos</h2>
        
        <div className="about-content">
          {/* Colonne gauche - Photo et infos */}
          <div className="about-left" data-aos="fade-right">
            <div className="about-image-wrapper">
              <img 
                src="/nesrine-photo.jpg" 
                alt="Nesrine" 
                className="about-image neon-border"
              />
            </div>
            
            <div className="about-info">
              <div className="info-item">
                <span className="info-label neon-text">Nom :</span>
                <span className="info-value">Nesrine</span>
              </div>
              <div className="info-item">
                <span className="info-label neon-text">Localisation :</span>
                <span className="info-value">Algérie</span>
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
                Après plusieurs années dans l'enseignement du français, j'ai découvert le développement web 
                via une formation OpenClassrooms. Cette reconversion m'a permis de réaliser que mon œil pour 
                la structure, ma rigueur pédagogique et ma logique technique formaient un duo puissant.
              </p>
            </div>

            <div className="about-story">
              <h3 className="story-title neon-underline">Expertise Technique</h3>
              <p className="story-text">
                Je maîtrise React, Redux, et JavaScript ES6+, avec une expertise particulière en optimisation 
                des performances et accessibilité web. J'ai développé ces compétences à travers des projets 
                concrets comme la création d'applications bancaires et de plateformes de location immobilière.
              </p>
            </div>

            <div className="about-story">
              <h3 className="story-title neon-underline">Approche & Différenciation</h3>
              <p className="story-text">
                Mon approche allie méthodologie structurée et attention obsessionnelle au détail. Je crois 
                qu'un code élégant et une UX parfaite ne sont pas incompatibles mais complémentaires. 
                Ma transition depuis l'enseignement me donne une perspective unique sur la clarté et 
                l'accessibilité des interfaces.
              </p>
            </div>

            <div className="about-story">
              <h3 className="story-title neon-underline">Objectifs</h3>
              <p className="story-text">
                Mon objectif est d'intégrer une équipe produit innovante où je pourrais contribuer à 
                l'architecture de solutions accessibles et performantes, tout en continuant à développer 
                mon expertise en React et en découvrir de nouvelles technologies.
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