import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with MERN stack featuring user authentication, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Restaurant Website',
      description: 'A modern restaurant website with online reservation system, menu management, and customer reviews built with WordPress.',
      image: '/api/placeholder/400/250',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theme'],
      category: 'wordpress',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather data and forecasts with beautiful visualizations.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A full-featured blogging platform with user authentication, rich text editor, and comment system.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A custom WordPress portfolio theme for a creative agency with custom post types and advanced custom fields.',
      image: '/api/placeholder/400/250',
      technologies: ['WordPress', 'ACF', 'SCSS', 'jQuery'],
      category: 'wordpress',
      github: '#',
      live: '#',
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'wordpress', label: 'WordPress' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const ProjectCard = ({ project }) => (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card overflow-hidden hover-shadow-xl transition-all duration-300 transform hover--translate-y-1 group">
        {/* Project Image */}
        <div className="position-relative overflow-hidden h-48" style={{backgroundColor: '#f8fafc'}}>
          <div className="w-full h-full d-flex align-items-center justify-content-center" style={{background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)'}}>
            <svg className="w-16 h-16" fill="none" stroke="#64748b" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Overlay */}
          <div className="position-absolute inset-0 d-flex align-items-center justify-content-center space-x-4 group-hover-opacity-100 transition-opacity duration-300" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', opacity: 0}}>
            <a 
              href={project.github}
              className="bg-white text-gray-900 p-3 rounded-full hover-bg-gray-100 transition-colors duration-200"
              aria-label="View GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a 
              href={project.live}
              className="bg-blue-600 text-white p-3 rounded-full hover-bg-blue-700 transition-colors duration-200"
              aria-label="View Live Demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="position-absolute top-4 start-4">
              <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover-text-blue-600 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="d-flex space-x-4">
            <a 
              href={project.github}
              className="text-gray-600 hover-text-gray-900 text-sm font-medium transition-colors duration-200 text-decoration-none"
            >
              View Code
            </a>
            <a 
              href={project.live}
              className="text-blue-600 hover-text-blue-700 text-sm font-medium transition-colors duration-200 text-decoration-none"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-16 md-py-24 bg-gray-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md-text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A showcase of my recent work and the technologies I've been exploring
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border-0 ${
                    activeFilter === filter.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover-bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="row">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="card p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Want to See More?
                </h3>
                <p className="text-gray-600 mb-6">
                  Check out my GitHub profile for more projects and contributions to open source.
                </p>
                <a 
                  href="#"
                  className="btn-primary text-decoration-none"
                >
                  Visit GitHub Profile
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects