import { useState } from 'react';
import './Skills.css';
import skillsData from '../../data/skills';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Front-End');

  const categories = skillsData.map(cat => cat.category);
  const currentSkills = skillsData.find(cat => cat.category === activeCategory)?.technologies || [];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Compétences Techniques</h2>

        {/* Filtres par catégorie */}
        <div className="skills-filters" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de compétences */}
        <div className="skills-grid" data-aos="fade-up" data-aos-delay="200">
          {currentSkills.map((tech, index) => (
            <div 
              key={index} 
              className="skill-card neon-card"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="skill-icon">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="logo-tech"
                />
              </div>
              <h3 className="skill-name">{tech.name}</h3>
              
              {/* Barre de progression */}
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${tech.level}%` }}
                  >
                    <span className="progress-text">{tech.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;