import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Animated floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sandeep Kumar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up animation-delay-200">
            Full Stack Developer & Creative Problem Solver
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            Crafting elegant solutions to complex problems with modern web technologies.
            Passionate about creating exceptional user experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-600">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-slate-800/80 backdrop-blur-sm text-white rounded-lg font-medium border-2 border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in animation-delay-800">
            <a
              href="https://github.com/sandeepMasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-300 hover:text-blue-400 border border-slate-700/50"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-kumar-a1abb7214/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-300 hover:text-blue-400 border border-slate-700/50"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sk245444@gmail.com"
              className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-300 hover:text-blue-400 border border-slate-700/50"
            >
              <Mail size={24} />
            </a>

            <a
              href="/Sandeep_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-300 hover:text-blue-400 border border-slate-700/50"
              aria-label="View Resume"
            >
              <Download size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-slate-400 hover:text-blue-400 transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
