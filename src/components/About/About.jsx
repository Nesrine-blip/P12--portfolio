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
                <span className="info-value">Vitry-sur-Seine, France</span>
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
                Reconversion professionnelle réussie de l'enseignement vers le développement web. 
                Formation intensive chez OpenClassrooms avec spécialisation en React et interfaces modernes.
              </p>
            </div>

            <div className="about-story">
              <h3 className="story-title neon-underline">Expertise</h3>
              <p className="story-text">
                Expertise en HTML, CSS, JavaScript et React avec un accent mis sur l'accessibilité des sites et les performances.
              </p>
            </div>

            <div className="about-story">
              <h3 className="story-title neon-underline">Objectifs</h3>
              <p className="story-text">
                Intégrer une équipe produit innovante pour contribuer à l'architecture de solutions 
                accessibles et performantes tout en continuant à évoluer techniquement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;