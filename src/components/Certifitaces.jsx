import { EyeOff, Eye } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

const certificates = [
  {
    image: '../../images/SERT1.png',
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    issued: 'Nov 30, 2023',
    URL: 'https://www.dicoding.com/certificates/MRZM85ML0ZYQ',
  },
  {
    image: '../../images/SERT2.png',
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    issued: 'Feb 22, 2024',
    URL: 'https://www.dicoding.com/certificates/0LZ02MW3RX65',
  },
  {
    image: '../../images/SERT3.png',
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding',
    issued: 'Feb 27, 2024',
    URL: 'https://www.dicoding.com/certificates/JMZVD5Q5QZN9',
  },
  {
    image: '../../images/SERT4.png',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding',
    issued: 'Apr 3, 2024',
    URL: 'https://www.dicoding.com/certificates/0LZ06O460Z65',
  },
  {
    image: '../../images/SERT5.png',
    title: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding',
    issued: 'Aug 24, 2024',
    URL: 'https://www.dicoding.com/certificates/L4PQ1L07QXO1',
  },
  {
    image: '../../images/SERT6.png',
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    issued: 'Sep 16, 2024',
    URL: 'https://www.dicoding.com/certificates/JMZV36NKNPN9',
  },
  {
    image: '../../images/SERT7.png',
    title: 'Financial Literacy 101',
    issuer: 'Dicoding',
    issued: 'May 5, 2025',
    URL: 'https://www.dicoding.com/certificates/JMZVE7VL3PN9',
  },
  {
    image: '../../images/SERT8.png',
    title: 'Belajar JavaScript',
    issuer: 'Always Dicoding',
    issued: '12 Maret 2025',
    URL: 'https://alwaysngoding.com/sertifikat/c2VydGlmaWthdC0yNjA4',
  },
  {
    image: '../../images/SERT9.png',
    title: 'Belajar CSS',
    issuer: 'Always Ngoding',
    issued: '19 Juli 2024',
    URL: 'https://alwaysngoding.com/sertifikat/c2VydGlmaWthdC0yMTky',
  },
  {
    image: '../../images/SERT10.png',
    title: 'Belajar HTML',
    issuer: 'Always Ngoding',
    issued: '01 Juli 2024 ',
    URL: 'https://alwaysngoding.com/sertifikat/c2VydGlmaWthdC0yMTY2',
  },
];

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <div>
      <div className="space-y-5 mb-10">
        <div className="inline-flex items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 transition text-sm py-2.5 px-3">Certificates</div>
        <h2 className="font-bold text-3xl sm:text-5xl tracking-tight">Browse my achievements</h2>
        <p className="text-base text-[#7a7a7a] md:text-xl">Certifications and awards that showcase my journey of continuous learning and expertise in the field.</p>
      </div>

      <div className="flex justify-start mt-6">
        <button onClick={() => setShowAll(!showAll)} className="inline-flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-black/80 transition">
          {showAll ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showAll ? '' : ''}
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCertificates.map((cert, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col group relative">
            <div className="relative w-full aspect-[3/2] overflow-hidden">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <a href={cert.URL} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition-opacity opacity-0 group-hover:opacity-100">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
              <div>
                <h3 className="text-lg font-bold text-left">{cert.title}</h3>
                <p className="text-sm text-gray-500 text-left">{cert.issuer}</p>
              </div>
              <p className="text-sm text-gray-400 text-left">Issued {cert.issued}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
