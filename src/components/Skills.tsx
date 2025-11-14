export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: ['C#', '.NET Core', 'ASP.NET MVC', 'Django REST', 'FastAPI', 'Node.js', 'Express.js'],
      color: 'cyan',
    },
    {
      title: 'Frontend',
      skills: ['Angular','React', 'Next', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      color: 'purple',
    },
    {
      title: 'Database',
      skills: ['MSSQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
      color: 'blue',
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Swagger'],
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; glow: string }> = {
      cyan: {
        border: 'border-cyan-500/30 hover:border-cyan-500',
        text: 'text-cyan-400',
        glow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]',
      },
      purple: {
        border: 'border-purple-500/30 hover:border-purple-500',
        text: 'text-purple-400',
        glow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]',
      },
      blue: {
        border: 'border-blue-500/30 hover:border-blue-500',
        text: 'text-blue-400',
        glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
      },
      pink: {
        border: 'border-pink-500/30 hover:border-pink-500',
        text: 'text-pink-400',
        glow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]',
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <h3 className={`text-xl font-semibold mb-4 ${colorClasses.text}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 bg-gray-800/50 border ${colorClasses.border} rounded-full text-sm text-gray-300 transition-all duration-300 ${colorClasses.glow} hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
