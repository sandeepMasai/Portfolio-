import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with product management, cart functionality, and secure payment integration. Built with React and Node.js.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-emerald-600 to-teal-500',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking across multiple platforms.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Chart.js', 'REST API', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-orange-600 to-amber-500',
    },
    {
      title: 'Weather Forecast App',
      description:
        'Beautiful weather application with detailed forecasts, interactive maps, and location-based weather alerts using modern APIs.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Weather API', 'Geolocation', 'Charts'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-sky-600 to-blue-500',
    },
    {
      title: 'Portfolio CMS',
      description:
        'Content management system for portfolio websites with drag-and-drop builder, SEO optimization, and analytics integration.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'GraphQL', 'Headless CMS', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-rose-600 to-pink-500',
    },
    {
      title: 'Fitness Tracker',
      description:
        'Comprehensive fitness tracking app with workout plans, progress tracking, nutrition logging, and social features.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Charts', 'Push Notifications'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-green-600 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100 group"
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
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
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
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
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
