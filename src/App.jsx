import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Plus, Sun, Moon } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Placeholder data for projects
  const [projects] = useState([
    {
      id: 1,
      title: "Project Placeholder 1",
      description: "This is where your first project description will go. You can talk about the tech stack and what you learned.",
      tags: ["React", "CSS", "Demo"],
      link: "#"
    },
  ]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-colors duration-300 ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'} border-b backdrop-blur-sm`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              MyPortfolio
            </span>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center sm:text-left space-y-6 mb-24">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-600">Adrian</span>.
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm a developer building things for the web. This is my digital garden where I share my projects and what I'm learning.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-transform hover:-translate-y-0.5">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#" className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-medium transition-colors ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-white'}`}>
              <Github size={18} /> GitHub
            </a>
            <a href="#" className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-medium transition-colors ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-white'}`}>
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-24">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Code className="text-blue-500" /> Selected Projects
            </h2>
            <span className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              More coming soon
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Cards */}
            {projects.map((project) => (
              <div key={project.id} className={`group relative rounded-2xl border transition-all duration-300 hover:shadow-xl ${darkMode ? 'bg-slate-800 border-slate-700 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500/50'}`}>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                      <Code size={24} />
                    </div>
                    <a href={project.link} className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`mb-6 flex-grow ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span key={index} className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* "Add New" Placeholder */}
            <div className={`rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-6 text-center h-64 transition-colors ${darkMode ? 'border-slate-700 hover:border-slate-600 hover:bg-slate-800/50' : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'}`}>
              <div className={`p-4 rounded-full mb-4 ${darkMode ? 'bg-slate-800 text-slate-600' : 'bg-slate-100 text-slate-400'}`}>
                <Plus size={32} />
              </div>
              <p className={`font-medium ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                Future Project Slot
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
        <p>© {new Date().getFullYear()} Adrian's Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}