import { Code2, Database, Layout, Server } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend',
      color: 'from-blue-600 to-cyan-500',
      skills: [
        { name: 'React', level: 76 },
        { name: 'TypeScript', level: 60 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-emerald-600 to-teal-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 60 },
      ],
    },
    {
      icon: Database,
      title: 'Database',
      color: 'from-orange-600 to-amber-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Supabase', level: 90 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      icon: Code2,
      title: 'Tools & Others',
      color: 'from-violet-600 to-purple-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'CI/CD', level: 60 },
        { name: 'AWS', level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
