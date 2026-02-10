import { useState } from 'react';
import './Projects.css';
import projectsData from '../../data/projects';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToProject = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Mes Projets</h2>

        {/* Carrousel moderne */}
        <div className="carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
          <button 
            className="carousel-arrow-modern left" 
            onClick={prevProject}
            disabled={isAnimating}
            aria-label="Projet précédent"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="carousel-content-modern">
            <div className={`project-card-modern ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              {/* Image du projet */}
              <div className="project-image-modern">
                <img src={currentProject.image} alt={currentProject.title} />
              </div>

              {/* Informations du projet */}
              <div className="project-details-modern">
                <div className="project-header-modern">
                  <h3 className="project-title-modern">{currentProject.title}</h3>
                  <p className="project-subtitle-modern">{currentProject.subtitle}</p>
                </div>

                <p className="project-description-modern">{currentProject.description}</p>

                {/* Tags */}
                <div className="project-tags-modern">
                  {currentProject.tags.map((tag, i) => (
                    <span key={i} className="tag-modern">{tag}</span>
                  ))}
                </div>

                {/* Stack technique */}
                <div className="project-stack-modern">
                  <h4>Stack :</h4>
                  <div className="stack-list">
                    {currentProject.stack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="stack-item">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="project-actions-modern">
                  <button 
                    className="btn-modern primary"
                    onClick={() => setSelectedProject(currentProject)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Voir les détails
                  </button>
                  <a 
                    href={currentProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-modern secondary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button 
            className="carousel-arrow-modern right" 
            onClick={nextProject}
            disabled={isAnimating}
            aria-label="Projet suivant"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Indicateurs modernes */}
          <div className="carousel-indicators-modern">
            {projectsData.map((project, index) => (
              <button
                key={index}
                className={`indicator-modern ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                disabled={isAnimating}
                aria-label={`Aller au projet ${project.title}`}
              >
                <span className="indicator-tooltip">{project.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modal détails projet */}
        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content neon-border" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="modal-body">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                
                <h2 className="modal-title neon-text">{selectedProject.title}</h2>
                <p className="modal-subtitle">{selectedProject.subtitle}</p>

                <div className="modal-section">
                  <h3 className="section-subtitle neon-underline">Contexte</h3>
                  <p>{selectedProject.context}</p>
                </div>

                <div className="modal-section">
                  <h3 className="section-subtitle neon-underline">Objectifs</h3>
                  <p>{selectedProject.objectives}</p>
                </div>

                <div className="modal-section">
                  <h3 className="section-subtitle neon-underline">Stack Technique</h3>
                  <div className="modal-stack">
                    {selectedProject.stack.map((tech, i) => (
                      <span key={i} className="stack-tag neon-border">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3 className="section-subtitle neon-underline">Compétences Développées</h3>
                  <p>{selectedProject.skills}</p>
                </div>

                <div className="modal-section">
                  <h3 className="section-subtitle neon-underline">Résultats</h3>
                  <p>{selectedProject.results}</p>
                </div>

                <div className="modal-section">
                  <h3 className="section-subtitle neon-underline">Améliorations Possibles</h3>
                  <p>{selectedProject.improvements}</p>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neon-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Voir sur GitHub
                  </a>
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="neon-button"
                    >
                      Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;