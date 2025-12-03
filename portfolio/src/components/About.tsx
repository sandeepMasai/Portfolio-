import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: '1+ Years',
      description: 'Professional Experience',
    },
    {
      icon: Award,
      title: '50+ Projects',
      description: 'Successfully Completed',
    },
    {
      icon: GraduationCap,
      title: 'Continuous',
      description: 'Learning & Growth',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'About Web Development',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Animated floating shapes */}
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-400/15 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-cyan-400/15 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating
                seamless digital experiences. My journey in web development started over 1 years ago,
                and I've been fortunate to work on diverse projects that challenge and inspire me.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in building modern web applications using cutting-edge technologies like
                React, TypeScript, and Node.js. I believe in writing clean, maintainable code and
                creating interfaces that users love.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-700/50"
              >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
