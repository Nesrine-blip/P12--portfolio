import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* Top row — logo + social links */}
        <div className="footer-content">

          {/* Brand */}
          <div className="footer-brand">
            <div className="logo neon-text">
              <span className="logo-bracket">{'<'}</span>
              Nesrine
              <span className="logo-bracket">{'/>'}</span>
            </div>
            <p className="footer-tagline">Développeuse Front-End passionnée</p>
          </div>

          {/* Social links */}
          <div className="footer-social">

            <a
              href="https://github.com/Nesrine-blip"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon neon-border"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="mailto:nisoudev@gmail.com"
              className="social-icon neon-border"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>

          </div>
        </div>

        {/* Bottom row — copyright */}
        <div className="footer-bottom">
          <p>&copy; {year} Nesrine. Tous droits réservés.</p>
          <p className="made-with">
            Développé avec <span className="neon-text">React</span> & <span className="neon-text">❤️</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;