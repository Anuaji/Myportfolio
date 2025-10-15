import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "HTML5", level: 95 },
         { name: "Jquery", level: 60 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React JS", level: 92 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: <Database className="text-green-600" size={24} />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "JAVA", level: 60 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "REST API", level: 92 },
        { name: "API Integration", level: 90 }
      ]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="text-purple-600" size={24} />,
      skills: [
        { name: "GitHub", level: 88 },
        { name: "GitLab", level: 82 },
        { name: "Postman", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "NPM", level: 85 }
      ]
    },
    {
      title: "Other Skills",
      icon: <Globe className="text-orange-600" size={24} />,
      skills: [
        { name: "Responsive Design", level: 90 },
      
        { name: "Project Management", level: 85 },
        { name: "Team Collaboration", level: 92 },
        { name: "Problem Solving", level: 88 }
      ]
    }
  ];

const getSkillColor = (level) => {
  if (level >= 90) return 'bg-green-500';
  if (level >= 80) return 'bg-blue-500';
  if (level >= 70) return 'bg-yellow-500';
  return 'bg-red-500';
};


  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologieshhhhh</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern web technologies with hands-on experience in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently exploring advanced React patterns, microservices architecture, and cloud technologies 
              to enhance my development skills and deliver better solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Learning: TypeScript
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Exploring: AWS
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Interested: Docker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;