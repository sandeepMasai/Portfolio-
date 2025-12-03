import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Online Quiz Application',
      description:
        'A full-stack Online Assessment Portal built with React and Node.js, featuring role-based access control, real-time assessments, and comprehensive question management',
      image: '/src/assets/image_quiz.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/sandeepMasai/Online-Quiz-Application.git',
      demo: 'https://online-quiz-application-1-un43.onrender.com/',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Micro-Skill-Builder',
      description: 'Micro-Skill-Builder is a micro-learning platform frontend built with React. It provides a clean, engaging UI for learners, instructors, and admins to interact with the backend APIs: browse courses, enroll, track XP & badges, take quizzes, and manage content',
      image: '/src/assets/micro skill.png',
      tags: ['React', 'JWT-based authentication', 'MongoDB', 'Tailwind', 'State Management'],
      github: 'https://github.com/sandeepMasai/Micro-Skill-Builder.git',
      demo: 'https://micro-skill-builder-frontend.onrender.com/',
      gradient: 'from-emerald-600 to-teal-500',
    },
    {
      title: 'Candidate Referral  Dashboard',
      description: 'Candidate Referral Management SystemA full-stack web application for managing candidate referrals with user authentication, role-based access control, and cloud-based resume storage.',
      image: '/src/assets/referral Dashboard.png',
      tags: ['React.js', 'Chart.js', 'REST API', 'MongoDB'],
      github: 'https://github.com/sandeepMasai/Candidate-Referral-Management-System.git',
      demo: 'https://candidate-referral-management-system-1-ixmp.onrender.com/login',
      gradient: 'from-orange-600 to-amber-500',
    },
    {
      title: 'Weather Forecast App',
      description: 'Weather App A real-time weather web application built using HTML, CSS, and JavaScript. This app allows users to search for any city and view the current weather, a city map, and a 5-day weather forecast using public APIs',
      image: '/src/assets/weather App.png',
      tags: ['HTML', 'Weather API', 'Geolocation', 'CSS', 'Javascript'],
      github: 'https://github.com/sandeepMasai/Weather-App.git',
      demo: 'https://venerable-valkyrie-1ff6fb.netlify.app/',
      gradient: 'from-sky-600 to-blue-500',
    },
    {
      title: 'MediQuick',
      description: 'MediQuick is a fully responsive, modern e-commerce platform designed for an online pharmacy. Built with React, Tailwind CSS, and ShadCN UI, it offers a seamless user experience across devices. The platform focuses on intuitive interactions, secure prescription handling, and real-time order tracking.',
      image: '/src/assets/MediQuick.png',
      tags: ['React', 'Tailwind CSS', 'ShadCN UI ', 'Context API', 'React Router DOM'],
      github: 'https://github.com/sandeepMasai/Online-Pharmacy-.git',
      demo: 'https://gentle-dasik-015e65.netlify.app/',
      gradient: 'from-rose-600 to-pink-500',
    },
    {
      title: 'books-library-management',
      description:
        'Comprehensive fitness tracking app with workout plans, progress tracking, nutrition logging, and social features.',
      image: '/src/assets/book-m.png',
      tags: ['React', 'Tailwind CSS', 'Context API', 'React Router DOM'],
      github: 'https://github.com/sandeepMasai/Books-Library-Management.git',
      demo: 'https://books-library-management-1-30t8.onrender.com',
      gradient: 'from-green-600 to-emerald-500',
    },

    {
      title: 'MediLab ',
      description: 'MediLab is a modern, responsive medical laboratory website template built with HTML, CSS, and Bootstrap. It includes a Home page, About Us, Services, and Contact pages, all designed to showcase medical services. Easily customizable by updating text, images',
      image: '/src/assets/medLab.png',
      tags: [' HTML', ' CSS', ' Bootstrap', 'responsive', 'Font Awesome Icons'],
      github: 'https://github.com/sandeepMasai/medilab.git',
      demo: 'https://678bfc0ac2d5bacb6295a4c6--gorgeous-crisp-3c0e40.netlify.app/#departments',
      gradient: 'from-green-600 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Animated floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400/15 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-cyan-400/15 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-purple-400/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-700/50 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                  ></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
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
