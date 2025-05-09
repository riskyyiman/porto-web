import React from 'react';

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col space-y-3">
        {/* Universitas Muhammadiyah Purwokerto */}
        <div className="flex items-center gap-4">
          <img src="../images/logo-ump.png" alt="school" className="w-12 h-12 rounded-full border-2 p-1 border-gray-400" />
          <a href="https://ump.ac.id" target="_blank" rel="noopener noreferrer" className="flex-grow flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <p className="font-bold text-xs sm:text-sm md:text-base text-black">UNIVERSITAS MUHAMMADIYAH PURWOKERTO</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transform transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-[#737373] font-medium">Okt 2023 - Now</p>
            </div>
            <p className="text-xs sm:text-sm md:text-sm text-[#737373]">Informatics Engineering</p>
          </a>
        </div>

        {/* SMK 75 2 Purwokerto */}
        <div className="flex items-center gap-4">
          <img src="../images/752PWT.jpg" alt="school" className="w-12 h-12 rounded-full border-2 p-1 border-gray-400" />
          <a href="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/9c7c3c77-064b-435b-a2aa-3985656b7a53" target="_blank" rel="noopener noreferrer" className="flex-grow flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <p className="font-bold text-xs sm:text-sm md:text-base text-black">SMK 75 2 PURWOKERTO</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transform transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-[#737373] font-medium">Okt 2019 - 2023</p>
            </div>
            <p className="text-xs sm:text-sm md:text-sm text-[#737373]">Automotive Light Vehicle Engineering</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
