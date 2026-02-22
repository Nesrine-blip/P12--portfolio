import './Skills.css';
import skillsData from '../../data/skills';

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Compétences Techniques
        </h2>

        <div className="skills-container">
          {skillsData.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="skills-category"
              data-aos="fade-up"
              data-aos-delay={catIndex * 100}
            >
              {/* Titre de la catégorie */}
              <div className="category-header">
                <div className="category-line"></div>
                <h3 className="category-title">{category.category}</h3>
                <div className="category-line"></div>
              </div>

              {/* Grille des compétences */}
              <div className="skills-grid">
                {category.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <div 
                      key={techIndex} 
                      className="skill-card"
                      data-aos="zoom-in"
                      data-aos-delay={catIndex * 100 + techIndex * 50}
                    >
                      <div className="skill-icon-wrapper">
                        <IconComponent 
                          className="skill-icon" 
                          style={{ color: tech.color }}
                        />
                      </div>
                      <span className="skill-name">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;