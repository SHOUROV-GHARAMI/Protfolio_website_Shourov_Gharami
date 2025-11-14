import { Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-[1000ms]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <span className="text-cyan-400 text-lg font-mono">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Shourov Gharami
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Full-Stack <span className="text-purple-400"> Software Developer </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Specialized in backend engineering, REST APIs, and building modern applications with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold">
                  <Mail size={20} />
                  Hire Me
                </span>
              </a>
              <a
                href="#contact"
                className="group relative px-8 py-3 bg-transparent border-2 border-cyan-500 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-cyan-500/10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-cyan-400 font-semibold">
                  <Download size={20} />
                  Download CV
                </span>
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
                <img
                  src="/SHOUROV_GHARAMI.jpg"
                  alt="Shourov Gharami"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
