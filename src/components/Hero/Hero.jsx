import './Hero.css';

function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content" data-aos="fade-up">
          {/* Photo de profil */}
          <div className="hero-avatar" data-aos="zoom-in" data-aos-delay="200">
            <img 
              src="/nesrine-photo.jpg" 
              alt="Nesrine - Développeuse Front-End" 
              className="neon-avatar pulse-neon"
            />
          </div>

          {/* Texte principal */}
          <div className="hero-text">
            <h1 className="hero-greeting" data-aos="fade-right">
              Bonjour, je suis <span className="neon-text">Nesrine</span>
            </h1>
            
            <h2 className="hero-title" data-aos="fade-right" data-aos-delay="100">
              <span className="typing-effect">Développeuse Front-End</span>
            </h2>
            
            <p className="hero-specialty neon-text-hover" data-aos="fade-right" data-aos-delay="200">
              Spécialisée en accessibilité et interfaces utilisateur intuitives
            </p>

            <p className="hero-description" data-aos="fade-right" data-aos-delay="300">
              De la didactique du français au développement web : je mobilise mon sens de la pédagogie, 
              de la structuration et de la clarté pour concevoir des interfaces accessibles et efficaces.
            </p>

            {/* Boutons CTA */}
            <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
              <button onClick={scrollToProjects} className="neon-button">
                Voir mes projets
              </button>
              <button onClick={scrollToContact} className="neon-button outline">
                Me contacter
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-social" data-aos="fade-up" data-aos-delay="500">
              <a 
                href="https://github.com/Nesrine-blip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link neon-border"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/in/nesrine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link neon-border"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a 
                href="mailto:nisoudev@gmail.com"
                className="social-link neon-border"
                aria-label="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="600">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;