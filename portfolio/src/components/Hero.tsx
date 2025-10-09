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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Sandeep Kumar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-slide-up animation-delay-200">
            Full Stack Developer & Creative Problem Solver
          </p>

          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
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
              className="px-8 py-3 bg-white text-slate-700 rounded-lg font-medium border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in animation-delay-800">
            <a
              href="https://github.com/sandeepMasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="www.linkedin.com/in/sandeep-kumar-a1abb7214"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="sk245444@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
            
              <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-blue-600"
            >
                <Download size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-slate-400 hover:text-blue-600 transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
