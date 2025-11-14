import { Award, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Development Certification',
      description: 'Comprehensive training in modern full-stack development',
      year: '2024',
    },
    {
      title: 'React & Next.js Advanced Training',
      description: 'Advanced concepts in React and Next.js ecosystem',
      year: '2023',
    },
    {
      title: 'Django REST Framework Certification',
      description: 'Building scalable REST APIs with Django',
      year: '2023',
    },
    {
      title: 'QA & Linux Training',
      description: 'Quality assurance practices and Linux system administration',
      year: '2022',
    },
    {
      title: 'Agile Project Management',
      description: 'Agile methodologies and project management best practices',
      year: '2022',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-900 to-gray-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full`}>
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-950 transform -translate-x-1/2 shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                    <div className={`ml-16 md:ml-0 flex-1 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                        <div className="flex items-center gap-2 mb-2 text-cyan-400">
                          <Award size={20} />
                          <span className="text-sm font-mono">{exp.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                          <CheckCircle2 size={20} className="text-purple-400" />
                          {exp.title}
                        </h3>
                        <p className="text-gray-400">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
