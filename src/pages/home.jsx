import Stack from '../components/Stack/Stack';
import Dock from '../components/Dock/Dock';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Certifitaces from '../components/Certifitaces';
import Contact from '../components/Contact';

const home = () => {
  const items = [
    {
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m0 0H5a2 2 0 01-2-2V10a2 2 0 012-2h3m6 8v-6m0 0l-2-2m2 2l2-2" />
        </svg>
      ),
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
      label: 'About',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m0-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      ),
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      label: 'Skills',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      label: 'Contact',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 4v6m0 4h.01M4 15a7 7 0 0114 0 7 7 0 01-14 0z" />
        </svg>
      ),
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
  ];

  return (
    <div className="bg-white relative">
      <div className="mx-auto max-w-[700px] py-10 sm:py-24 text-black">
        <div className="relative z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-6 xs:p-4">
          <div className="flex flex-col lg:flex-row justify-between mb-10 select-none gap-6">
            <div className="flex flex-1 flex-col gap-3 order-1 lg:order-none">
              <h1 className="text-xl font-bold sm:text-5xl xl:text-6xl/none tracking-tight text-left">Hi, I'm Riskyy 👋</h1>
              <p className="md:text-xl font-normal max-w-md leading-normal text-left">
                Frondend Developer, and a passionate learner. I love creating beautiful and functional web applications that provide great user experiences. I am always eager to learn new technologies and improve my skills.
              </p>
            </div>

            <div className="flex  lg:justify-end order-2 lg:order-none">
              <div className="relative" style={{ width: '190px', height: '190px', perspective: '600px' }}>
                <Stack />
              </div>
            </div>
          </div>

          <div className="mb-10" id="about">
            <div className="flex items-center space-x-2 group cursor-default">
              <p className="font-bold text-2xl leading-normal text-left" style={{ opacity: '1', filter: 'blur(0px)', transform: 'none' }}>
                About
              </p>
              {/* Ikon profil/interaktif */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-base font-medium text-gray-600 text-start" style={{ opacity: '1', filter: 'blur(0px)', transform: 'none' }}>
              I am currently pursuing a Bachelor’s degree at Universitas Muhammadiyah Purwokerto, majoring in Informatics Engineering. As an undergraduate student, I am continuously developing my skills and knowledge in the field of IT. I
              have a strong passion for creating impactful digital solutions and staying up to date with the latest technologies. I look forward to contributing meaningfully to the tech industry in the near future, and I'm actively seeking
              opportunities to grow both academically and professionally.
            </p>
          </div>

          <div className="mb-10" id="education" style={{ opacity: '1', filter: 'blur(0px)', transform: 'none' }}>
            <div className="flex items-center space-x-2 group cursor-default">
              <p className="font-bold text-2xl leading-normal text-left">Education</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l3-3m-3 3l-3-3" />
              </svg>
            </div>
            <Education />
          </div>

          <div className="mb-20" id="skills">
            <div className="flex items-center space-x-2 group">
              <p className="font-bold text-left text-2xl leading-normal transition-colors duration-300">Skills</p>
              {/* Ikon gear/tools untuk Skills */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.002 1.002 0 00.95.69h.098c.842 0 1.294 1.014.707 1.707a1.003 1.003 0 00.203 1.405 1.003 1.003 0 001.405-.203c.693-.587 1.707-.135 1.707.707v.098c0 .377.25.708.604.822a1 1 0 010 1.9.999.999 0 00-.604.822v.098c0 .842-1.014 1.294-1.707.707a1.003 1.003 0 00-1.405.203 1.003 1.003 0 00.203 1.405c.587.693.135 1.707-.707 1.707h-.098a1.002 1.002 0 00-.95.69c-.3.921-1.603.921-1.902 0a1.002 1.002 0 00-.95-.69h-.098c-.842 0-1.294-1.014-.707-1.707a1.003 1.003 0 00-.203-1.405 1.003 1.003 0 00-1.405.203c-.693.587-1.707.135-1.707-.707v-.098a1.002 1.002 0 00-.69-.95c-.921-.3-.921-1.603 0-1.902a1.002 1.002 0 00.69-.95v-.098c0-.842 1.014-1.294 1.707-.707a1.003 1.003 0 001.405-.203 1.003 1.003 0 00-.203-1.405c-.587-.693-.135-1.707.707-1.707h.098a1.002 1.002 0 00.95-.69zM12 15a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>
            <Skills />
          </div>

          <div className="mb-20 text-center flex flex-col items-center justify-center" id="projects">
            <Project />
          </div>

          <div className="mb-15 sm:mb-40 flex flex-col items-center justify-center text-center" id="certificates">
            <Certifitaces />
          </div>

          <div className="mb-8 flex flex-col items-center justify-center sm:mb-8 text-center" id="contact">
            <Contact />
          </div>
        </div>

        <div className="flex justify-end mt-10 relative group">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Back to top</div>
        </div>
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>
    </div>
  );
};

export default home;
