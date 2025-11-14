import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p className="mb-1">
              &copy; 2025 <span className="text-cyan-400 font-semibold"> Shourov Gharami</span>. All rights reserved.
            </p>
            {/* <p className="text-sm">Software Developer</p> */}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://mailto:shourovgharami222@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shourov-gharami-624a96206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/SHOUROV-GHARAMI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
