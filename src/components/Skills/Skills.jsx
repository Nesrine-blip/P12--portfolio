import './Skills.css';
import skillsData from '../../data/skills';

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Compétences Techniques</h2>

        <div className="skills-container">
          {skillsData.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="skills-category"
              data-aos="fade-up"
              data-aos-delay={catIndex * 100}
            >
              <div className="category-header">
                <div className="category-line"></div>
                <h3 className="category-title">{category.category}</h3>
                <div className="category-line"></div>
              </div>

              <div className="skills-grid-new">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="skill-card-new"
                    data-aos="zoom-in"
                    data-aos-delay={catIndex * 100 + techIndex * 50}
                  >
                    <div className="skill-icon-wrapper">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="skill-logo-new"
                      />
                    </div>
                    <span className="skill-name-new">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;