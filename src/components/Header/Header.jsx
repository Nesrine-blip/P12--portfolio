import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow to header when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to a section and close mobile menu
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Scroll back to top when logo is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Nav links list — easy to update
  const navLinks = [
    { label: 'Accueil',     id: 'home' },
    { label: 'À propos',    id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projets',     id: 'projects' },
    { label: 'Contact',     id: 'contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">

          {/* Logo — click to go top */}
          <div className="logo neon-text" onClick={scrollToTop}>
            <span className="logo-bracket">{'<'}</span>
            Nesrine
            <span className="logo-bracket">{'/>'}</span>
          </div>

          {/* Desktop navigation */}
          <ul className="nav-menu desktop-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  onClick={() => scrollTo(link.id)}
                  className={`nav-link ${link.id === 'contact' ? 'neon-button' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Burger button — mobile only */}
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

        {/* Mobile menu drawer */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a onClick={() => scrollTo(link.id)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
}

export default Header;