import React from 'react';
import { ExternalLink, Github, Lightbulb } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Villu Genius Loan App",
      description: "A user-friendly and efficient digital platform designed to simplify the loan application and management process. Built with modern web technologies, offering seamless experience for personal and business loans.",
      features: [
        "Instant loan eligibility checks",
        "Document upload system",
        "Real-time loan tracking",
        "Automated EMI calculations",
        "Secure payment integrations"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"],
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Featured Project"
    },
    {
      title: "Feril - Job Portal",
      description: "Comprehensive job portal integrating students, employees, employers and institutions. A complete ecosystem for career development and recruitment.",
      features: [
        "Multi-user role management",
        "Job posting and search",
        "Student learning modules",
        "Campus interview scheduling",
        "Real-time notifications"
      ],
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Production"
    },
    {
      title: "NFC Business Card",
      description: "Modern networking tool with NFC technology for seamless professional information sharing. Tap to instantly transfer resume, portfolio, and contact details.",
      features: [
        "NFC chip integration",
        "Instant data transfer",
        "Digital portfolio showcase",
        "Contact management",
        "Analytics dashboard"
      ],
      technologies: ["ReactJS", "NodeJS", "MongoDB", "NFC API", "Express JS"],
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Innovation"
    },
    {
      title: "Business Champion Platform",
      description: "Educational website empowering business personnel with tools and knowledge to make informed decisions and run successful businesses.",
      features: [
        "Business analytics tools",
        "Educational content management",
        "Decision support system",
        "Performance tracking",
        "Resource library"
      ],
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Live"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Featured Project':
        return 'bg-purple-100 text-purple-800';
      case 'Production':
        return 'bg-green-100 text-green-800';
      case 'Innovation':
        return 'bg-blue-100 text-blue-800';
      case 'Live':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <Lightbulb className="text-yellow-500 flex-shrink-0 ml-2" size={20} />
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            Let's Talk
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;