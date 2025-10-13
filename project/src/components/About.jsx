import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Full Stack Developments",
      description: "Expertise in MERN stack with modern development practices"
    },
    {
      icon: <Database className="text-green-600" size={24} />,
      title: "Database Design",
      description: "Proficient in MongoDB and database optimization"
    },
    {
      icon: <Globe className="text-purple-600" size={24} />,
      title: "API Integration",
      description: "Strong experience in API creation and third-party integrations"
    },
    {
      icon: <Smartphone className="text-orange-600" size={24} />,
      title: "Responsive Design",
      description: "Creating mobile-first, responsive web applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about creating customized solutions and currently seeking the position 
                of Full Stack Developer in an exciting and growing company. With 2.7+ years of experience, 
                I've been providing quality support to companies and building innovative web applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Started my career at Cognex Technology in Chennai (September 2022 - March 2025), where I 
                developed expertise in MERN stack technologies. Currently working at Advisorkhoj in Bangalore 
                since April 2025, specializing in development, API integration, and project management 
                using modern tools and technologies.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900">Education</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">B.E. Mechanical Engineering</span>
                  <span className="text-gray-500">74%</span>
                </div>
                <p className="text-gray-600 text-sm">Noorul Islam University (2016-2020)</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900">Languages</h4>
              <div className="flex gap-4 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">English</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Tamil</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Malayalam</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;