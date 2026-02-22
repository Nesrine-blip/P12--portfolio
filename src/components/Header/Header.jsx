import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Logo cliquable */}
          <div className="logo neon-text" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <span className="logo-bracket">{'<'}</span>
            Nesrine
            <span className="logo-bracket">{'/>'}</span>
          </div>

          {/* Menu Desktop */}
          <ul className="nav-menu desktop-menu">
            <li><a onClick={() => scrollToSection('home')} className="nav-link">Accueil</a></li>
            <li><a onClick={() => scrollToSection('about')} className="nav-link">À propos</a></li>
            <li><a onClick={() => scrollToSection('skills')} className="nav-link">Compétences</a></li>
            <li><a onClick={() => scrollToSection('projects')} className="nav-link">Projets</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="nav-link neon-button">Contact</a></li>
          </ul>

          {/* Burger Menu */}
          <button 
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Menu Mobile */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Accueil</a></li>
            <li><a onClick={() => scrollToSection('about')}>À propos</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Compétences</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projets</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;