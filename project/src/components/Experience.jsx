import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "Over 2.7 years of hands-on experience in coding, implementation, and maintenance support",
    "Strong understanding and integration of third-party web services",
    "Skilled communicator with excellent interpersonal and analytical skills",
    "Experienced in API integration & API creation",
    "Hands-on experience in development using MERN stack technologies",
    "Project management experience using Github and various tools",
    "Developing and maintaining website UI and functionality",
    "Ability to learn and adapt new technologies quickly",
    "Excellent team player with good communication and interpersonal skills"
  ];

  const projects = [
    {
      name: "Villu Genius Loan App",
      description: "A user-friendly and efficient digital platform designed to simplify the loan application and management process. Built with modern web technologies, offering seamless experience for personal business, or other types of loans.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
      features: ["Instant loan eligibility checks", "Document uploads", "Real-time loan tracking", "Automated EMI calculations", "Secure payment integrations"]
    },
    {
      name: "Feril",
      description: "A Job Portal integrating students, employees, employers and institutions. Students learn latest technologies, employees search for jobs, employers post jobs and get best resources, and institutes apply for campus interviews and seminars.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"]
    },
    {
      name: "NFC Business Card",
      description: "An innovative networking tool with NFC chip embedded in the card for seamless sharing of professional details. Simply tap with smartphone to transfer resume, portfolio, and contact information.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"]
    },
    {
      name: "Business Champion",
      description: "An educational website that empowers business personnel to successfully run their business by making calculative steps and informed decisions.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"]
    }
  ];

  const roles = [
    "Requirements gathering from client",
    "Front end development with UI Creation",
    "Created design documents for migration for client reference",
    "API Creation and API Integration"
  ];

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Advisorkhoj",
      location: "Bangalore, India",
      duration: "April 2025 - Present",
      status: "Current Position",
      statusColor: "bg-green-100 text-green-800",
      description: "Currently working on innovative financial technology solutions and web applications."
    },
    {
      title: "Full Stack Developer",
      company: "Cognex Technology",
      location: "Chennai, India", 
      duration: "September 2022 - March 2025",
      status: "2.5 Years Experience",
      statusColor: "bg-blue-100 text-blue-800",
      description: "Developed and maintained multiple web applications using MERN stack technologies."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">Building innovative solutions with modern technologies</p>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Journey</h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h4>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{job.company}</p>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className={`px-4 py-2 ${job.statusColor} rounded-full text-sm font-medium`}>
                      {job.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities & Achievements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Roles & Responsibilities */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Roles & Responsibilities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {roles.map((role, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.name}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {project.features && (
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-gray-900">Technologies:</h5>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;