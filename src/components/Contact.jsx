import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

const Contact = () => {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 transition text-sm py-2.5 px-5">Contact</div>

      <h2 className="text-3xl font-bold mt-4 sm:text-5xl tracking-tight">Get in Touch</h2>

      <p className="text-base text-[#7a7a7a] md:text-xl">
        Want to chat? just shoot me a DM <span className="text-[#3b82f6] font-semibold">with a direct question on Instagram</span>
        or <span className="text-[#3b82f6] font-semibold">drop me an email,</span> and I’ll reply as soon as I can.
      </p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-3">Follow Me On</h3>
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/riskyyiman" target="_blank" rel="noopener noreferrer" className="  font-bold transition-transform transform hover:scale-110">
            <SiGithub className="w-8 h-8 text-black" />
          </a>
          <a href="https://www.instagram.com/manlael_/" target="_blank" rel="noopener noreferrer" className="font-bold transition-transform transform hover:scale-110">
            <SiInstagram className="w-8 h-8 text-black" />
          </a>
          <a href="https://www.linkedin.com/in/riskyimanlaelprasetio/" target="_blank" rel="noopener noreferrer" className="font-bold transition-transform transform hover:scale-110">
            <SiLinkedin className="w-8 h-8 text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
