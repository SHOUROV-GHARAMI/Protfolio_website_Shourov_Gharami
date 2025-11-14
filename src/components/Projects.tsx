import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Inventory Management System',
      description: 'A comprehensive inventory tracking system with real-time updates and analytics.',
      tech: ['.NET Core', 'MSSQL', 'React'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication and role-based access.',
      tech: ['Django REST', 'PostgreSQL', 'JWT'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Employee Management System',
      description: 'Full-featured HR management system with employee tracking and payroll.',
      tech: ['ASP.NET', 'MSSQL', 'Bootstrap'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Real-Time Task Tracker',
      description: 'Collaborative task tracking application with real-time updates and notifications.',
      tech: ['MERN Stack', 'Socket.io', 'Redux'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Odoo Inventory Module',
      description: 'Custom inventory module for Odoo ERP with advanced reporting features.',
      tech: ['Python', 'Odoo', 'PostgreSQL'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Web Scraping & Data Aggregation',
      description: 'Automated data collection tool with cleaning and aggregation capabilities.',
      tech: ['Python', 'BeautifulSoup', 'Pandas'],
      demo: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-cyan-900/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 min-h-[3rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
