import { Code2, Database, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Full-Stack Development',
      description: 'Expert in building end-to-end applications with modern frameworks and technologies.',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Engineering',
      description: 'Specialized in .NET Core, Django, and Node.js for robust backend solutions.',
    },
    {
      icon: <Zap size={32} />,
      title: 'REST API Design',
      description: 'Creating scalable and efficient REST APIs following best practices.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-gray-300 text-lg text-center leading-relaxed">
            I'm a passionate Full-Stack Software Developer with expertise in backend technologies,
            specializing in .NET Core, Django, and modern JavaScript frameworks. I build scalable,
            efficient applications and REST APIs that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
