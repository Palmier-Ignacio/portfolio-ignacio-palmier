import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    name: 'RepasioAI',
    desc: 'Plataforma de estudio con flashcards generadas por inteligencia artificial. Permite crear mazos de tarjetas, estudiar con repetición espaciada y generar preguntas automáticamente usando IA.',
    url: 'https://repasioai.vercel.app/',
    tags: ['React', 'API IA', 'Nest', 'Tailwind'],
    status: 'Live',
    accent: '#C8602A',
  },
  {
    name: 'Metalúrgica Tesei',
    desc: 'Sitio institucional completo para empresa metalúrgica argentina. Diseño profesional, catálogo de productos, formulario de contacto y optimización SEO para posicionamiento web.',
    url: 'https://www.metalurgicatesei.com.ar/',
    tags: ['Node.js', 'CSS', 'EJS', 'Javascript', 'SEO'],
    status: 'Live',
    accent: '#3A7BD5',
  },
  {
    name: 'Más proyectos próximamente',
    desc: 'Estoy trabajando en nuevos proyectos que se agregarán aquí. Si querés ver más de mi trabajo, visitá mi GitHub.',
    url: 'https://github.com/palmier-Ignacio',
    tags: ['En construcción'],
    status: 'Soon',
    accent: '#888',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Proyectos</p>
        <h2 className="section-title">Lo que construí</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div className={`project-card ${p.status === 'Soon' ? 'project-card--soon' : ''}`}>
      <div className="project-card-top">
        <div className="project-header">
          <h3 className="project-name">{p.name}</h3>
          <span className={`project-status project-status--${p.status.toLowerCase()}`}>
            {p.status}
          </span>
        </div>
        <p className="project-desc">{p.desc}</p>
      </div>
      <div className="project-footer">
        <div className="project-tags">
          {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
        {p.status !== 'Soon' && (
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Ver ${p.name}`}>
            <ExternalLink size={15} />
          </a>
        )}
        {p.status === 'Soon' && (
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
            <Github size={15} />
          </a>
        )}
      </div>
    </div>
  )
}
