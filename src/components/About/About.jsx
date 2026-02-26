import './About.css';

// Personal info displayed in the left card
const INFO_ITEMS = [
  { label: 'Nom :',         value: 'Nesrine' },
  { label: 'Localisation :', value: 'Paris, France' },
  { label: 'Email :',       value: 'nisoudev@gmail.com' },
  { label: 'Formation :',   value: 'OpenClassrooms' },
];

// Story sections displayed on the right
const STORY_SECTIONS = [
  {
    title: 'Mon Parcours',
    text: "Reconversion professionnelle réussie de l'enseignement vers le développement web. Formation intensive chez OpenClassrooms avec spécialisation en React et interfaces modernes.",
  },
  {
    title: 'Expertise',
    text: "Expertise en HTML, CSS, JavaScript et React avec un accent mis sur l'accessibilité des sites et les performances.",
  },
  {
    title: 'Objectifs',
    text: "Intégrer une équipe produit innovante pour contribuer à l'architecture de solutions accessibles et performantes tout en continuant à évoluer techniquement.",
  },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">À Propos</h2>

        <div className="about-content">

          {/* LEFT — info card */}
          <div className="about-left" data-aos="fade-right">
            <div className="about-info">
              {INFO_ITEMS.map((item, i) => (
                <div key={i} className="info-item">
                  <span className="info-label neon-text">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — story blocks */}
          <div className="about-right" data-aos="fade-left">
            {STORY_SECTIONS.map((section, i) => (
              <div key={i} className="about-story">
                <h3 className="story-title neon-underline">{section.title}</h3>
                <p className="story-text">{section.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;