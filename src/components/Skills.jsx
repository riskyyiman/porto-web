import React from 'react';

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-y-1 gap-x-2 mt-5" style={{ opacity: '1', filter: 'blur(0px)', transform: 'none' }}>
      {['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'JavaScript', 'React', 'Php', 'Node.js', 'Express', 'MySQL', 'GitHub', 'Vs Code', 'C#', 'Vite', 'Kotlin', 'FireBase'].map((tech) => (
        <span key={tech} className="bg-black text-white px-4 py-2 rounded-3xl text-sm font-medium">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default Skills;
