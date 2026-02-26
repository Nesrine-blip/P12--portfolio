import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

function Hero() {

  // Smooth scroll to a section by its id
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">

      {/* Background glow effect */}
      <div className="hero-glow"></div>

      <div className="container">
        <div className="hero-content" data-aos="fade-up">

          {/* LEFT COLUMN — text & buttons */}
          <div className="hero-left">
            <div className="hero-text">

              <h1 className="hero-greeting" data-aos="fade-right">
                Bonjour, je suis <span className="neon-text">Nesrine</span>
              </h1>

              <h2 className="hero-title" data-aos="fade-right" data-aos-delay="100">
                <span className="typing-wrapper">Développeuse Front-End</span>
              </h2>

              <p className="hero-specialty neon-text-hover" data-aos="fade-right" data-aos-delay="200">
                Spécialisée en React et interfaces modernes
              </p>

              <p className="hero-description" data-aos="fade-right" data-aos-delay="300">
                Passionnée par la création d'interfaces accessibles et performantes.
                De l'enseignement au développement web, je mobilise rigueur et créativité.
              </p>

              {/* Call-to-action buttons */}
              <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
                <button onClick={() => scrollTo('projects')} className="neon-button">
                  Voir mes projets
                </button>
                <button onClick={() => scrollTo('contact')} className="neon-button outline">
                  Me contacter
                </button>
              </div>

              {/* Social links */}
              <div className="hero-social" data-aos="fade-up" data-aos-delay="500">

                <a
                  href="https://github.com/Nesrine-blip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link neon-border"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="mailto:nisoudev@gmail.com"
                  className="social-link neon-border"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — profile photo */}
          <div className="hero-right" data-aos="zoom-in" data-aos-delay="200">
            <div className="hero-avatar-wrapper">
              <img
                src="/nesrine-photo.jpg"
                alt="Nesrine - Développeuse Front-End"
                className="hero-avatar-large"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;