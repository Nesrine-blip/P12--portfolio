import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaSass, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma,
  FaCode
} from 'react-icons/fa';
import { 
  SiRedux, 
  SiMongodb
} from 'react-icons/si';

const skills = [
  {
    category: "Front-End",
    technologies: [
      { 
        name: "HTML5", 
        icon: FaHtml5, 
        color: "#E34F26" 
      },
      { 
        name: "CSS3", 
        icon: FaCss3Alt, 
        color: "#1572B6" 
      },
      { 
        name: "JavaScript", 
        icon: FaJs, 
        color: "#F7DF1E" 
      },
      { 
        name: "React", 
        icon: FaReact, 
        color: "#61DAFB" 
      },
      { 
        name: "Redux", 
        icon: SiRedux, 
        color: "#764ABC" 
      },
      { 
        name: "Sass", 
        icon: FaSass, 
        color: "#CC6699" 
      }
    ]
  },
  {
    category: "Back-End",
    technologies: [
      { 
        name: "Node.js", 
        icon: FaNodeJs, 
        color: "#339933" 
      },
      { 
        name: "MongoDB", 
        icon: SiMongodb, 
        color: "#47A248" 
      }
    ]
  },
  {
    category: "Outils",
    technologies: [
      { 
        name: "Git", 
        icon: FaGitAlt, 
        color: "#F05032" 
      },
      { 
        name: "GitHub", 
        icon: FaGithub, 
        /* Couleur blanche/grise claire pour être visible sur fond sombre */
        color: "#e0e0e0" 
      },
      { 
        name: "Figma", 
        icon: FaFigma, 
        color: "#F24E1E" 
      },
      { 
        name: "VS Code", 
        icon: FaCode,
        color: "#007ACC" 
      }
    ]
  }
];

export default skills;