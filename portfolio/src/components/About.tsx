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
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating
                seamless digital experiences. My journey in web development started over 1 years ago,
                and I've been fortunate to work on diverse projects that challenge and inspire me.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I specialize in building modern web applications using cutting-edge technologies like
                React, TypeScript, and Node.js. I believe in writing clean, maintainable code and
                creating interfaces that users love.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
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
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
