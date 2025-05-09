import { source } from 'framer-motion/client';
import React, { useState } from 'react';

const Project = () => {
  const [activeTab, setActiveTab] = useState('development');

  const developmentProjects = [
    {
      title: 'BookSelf App',
      year: '2024',
      description: 'A simple web-based bookshelf app that allows users to add, search, mark as complete, and delete books. Built using vanilla HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '../../images/BookSelfApp.png',
      source: 'https://github.com/riskyyiman/bookSelf-App',
    },
    {
      title: 'Kasirin',
      year: '2025',
      description: 'A point-of-sale (POS) web application for managing product inventory, sales transactions, and visual analytics using React, Bootstrap, and JSON Server.',
      tech: ['React', 'Bootstrap', 'json-server'],
      image: '../../images/KasirApp.png',
      source: '#',
    },
    {
      title: 'Landing Page Bibit',
      year: '2024',
      description: 'A responsive landing page inspired by the Bibit investment platform, designed to showcase services and encourage user engagement. Built with HTML and Bootstrap.',
      tech: ['Html', 'Bootsrtap'],
      image: '../../images/LPBibit.png',
      source: '#',
    },
  ];

  const designProjects = [
    {
      title: 'DoIT',
      year: '2025',
      description: 'A task management mobile app designed to help users create, organize, and track their daily to-do lists. Built using Kotlin and Firebase for real-time data sync.',
      tech: ['Kotline', 'Firebase', 'Java'],
      image: '../../images/DOIT.png',
      source: '#',
    },
    {
      title: 'Volume Balok',
      year: '2024',
      description: 'An educational Android app for calculating the volume of rectangular prisms (balok) with interactive input fields. Built as a basic project using Kotlin and Java.',
      tech: ['Kotlin', 'Java'],
      image: '../../images/VolumeBalok.png',
      source: 'https://github.com/riskyyiman/hitungLuasBangun',
    },
  ];

  const projects = activeTab === 'development' ? developmentProjects : designProjects;

  return (
    <div>
      <div className="space-y-5 mb-10">
        <div className="inline-flex items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 transition text-sm py-2.5 px-3">My Projects</div>
        <h2 className="font-bold text-3xl sm:text-5xl tracking-tight">Check out my latest works</h2>
        <p className="text-base text-[#7a7a7a] md:text-xl">
          I develop websites, from simple pages to advanced web applications. I'm always looking for new challenges and opportunities to learn and grow as a developer. Here are some of my recent projects.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex rounded-lg bg-gray-200 p-1 gap-5">
          <button
            className={`flex-1 py-2 text-center text-sm font-medium rounded-md transition-colors ${activeTab === 'development' ? 'bg-white text-white border border-gray-300 shadow-sm' : 'bg-transparent text-[#7a7a7a]'}`}
            onClick={() => setActiveTab('development')}
          >
            Website
          </button>
          <button
            className={`flex-1 py-2 text-center text-sm font-medium rounded-md transition-colors ${activeTab === 'design' ? 'bg-white text-white border border-gray-300 shadow-sm' : 'bg-transparent text-[#7a7a7a]'}`}
            onClick={() => setActiveTab('design')}
          >
            Android
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border flex flex-col">
              <div
                className="w-full aspect-[16/9] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>
              <div className="p-4 space-y-2 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-left">{project.title}</h3>
                <p className="text-xs text-gray-500 text-left">{project.year}</p>
                <p className="text-gray-600 text-sm text-left">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-gray-200 text-xs font-medium px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="bg-black text-white text-xs px-4 py-1.5 rounded-md hover:bg-gray-800">
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
