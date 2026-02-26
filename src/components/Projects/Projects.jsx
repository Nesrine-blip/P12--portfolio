import { useState } from 'react';
import { FaGithub, FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';
import projectsData from '../../data/projects';

function Projects() {
  const [currentIndex,    setCurrentIndex]    = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating,     setIsAnimating]     = useState(false);

  // Change slide with a short fade transition
  const goTo = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  const prevProject = () => goTo((currentIndex - 1 + projectsData.length) % projectsData.length);
  const nextProject = () => goTo((currentIndex + 1) % projectsData.length);

  const project = projectsData[currentIndex];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Mes Projets</h2>

        <div className="carousel-wrapper" data-aos="fade-up" data-aos-delay="200">

          {/* Desktop arrows — hidden on mobile via CSS */}
          <button className="carousel-arrow-modern left" onClick={prevProject} disabled={isAnimating} aria-label="Projet précédent">
            <FaChevronLeft size={22} />
          </button>

          {/* Project card */}
          <div className="carousel-content-modern">
            <div className={`project-card-modern ${isAnimating ? 'fade-out' : 'fade-in'}`}>

              {/* Project image */}
              <div className="project-image-modern">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Project details */}
              <div className="project-details-modern">

                <div className="project-header-modern">
                  <h3 className="project-title-modern">{project.title}</h3>
                  <p className="project-subtitle-modern">{project.subtitle}</p>
                </div>

                <p className="project-description-modern">{project.description}</p>

                {/* Category tags */}
                <div className="project-tags-modern">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag-modern">{tag}</span>
                  ))}
                </div>

                {/* Tech stack (first 4 items) */}
                <div className="project-stack-modern">
                  <h4>Stack :</h4>
                  <div className="stack-list">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="stack-item">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="project-actions-modern">
                  <button className="btn-modern primary" onClick={() => setSelectedProject(project)}>
                    <FaSearch size={18} />
                    Voir les détails
                  </button>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-modern secondary">
                    <FaGithub size={18} />
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          </div>

          <button className="carousel-arrow-modern right" onClick={nextProject} disabled={isAnimating} aria-label="Projet suivant">
            <FaChevronRight size={22} />
          </button>

          {/* Mobile arrows — shown below the card on small screens */}
          <div className="carousel-nav-mobile">
            <button className="carousel-arrow-modern" onClick={prevProject} disabled={isAnimating} aria-label="Projet précédent">
              <FaChevronLeft size={22} />
            </button>
            <button className="carousel-arrow-modern" onClick={nextProject} disabled={isAnimating} aria-label="Projet suivant">
              <FaChevronRight size={22} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="carousel-indicators-modern">
            {projectsData.map((p, i) => (
              <button
                key={i}
                className={`indicator-modern ${i === currentIndex ? 'active' : ''}`}
                onClick={() => goTo(i)}
                disabled={isAnimating}
                aria-label={`Aller au projet ${p.title}`}
              >
                <span className="indicator-tooltip">{p.title}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Detail modal — opens when "Voir les détails" is clicked */}
        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content neon-border" onClick={(e) => e.stopPropagation()}>

              {/* Close button */}
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <FaTimes size={24} />
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

                {/* Modal action buttons */}
                <div className="modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="neon-button">
                    <FaGithub size={20} style={{ marginRight: '8px' }} />
                    Voir sur GitHub
                  </a>
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="neon-button">
                      <FiExternalLink size={20} style={{ marginRight: '8px' }} />
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