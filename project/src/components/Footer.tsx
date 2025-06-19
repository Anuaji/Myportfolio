import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ajith Kumar</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              with modern technologies and best practices.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Anuaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://teams.live.com/l/message/19:19af09981cf34b129d66e04f30a7d25e5ea214b1efde49e9331b8979fca4d8aa@oneToOne.skype/1750325839395?context=%7B%22contextType%22%3A%22chat%22%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:asajithkumar17@gmail.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 asajithkumar17@gmail.com</p>
              <p>📱 9500607417</p>
              <p>📍 Chennai, Tamil Nadu, India</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ajith Kumar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="text-red-500" size={16} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;