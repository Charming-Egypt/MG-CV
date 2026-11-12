import footerBg from '../assets/Footer/Footer.png';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 md:py-16 px-6 md:px-16 min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Scale and translate the image to crop the top */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        {/* Dark overlay at the top to blend the background smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10">
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div>
              <p className="text-gray-400 text-sm mb-2">Connect with me</p>
              <a href="mailto:gm@discover-sharm.com" className="text-xl md:text-5xl font-medium hover:text-[#ff7a1a] transition-colors break-words">
                gm@discover-sharm.com
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <h3 className="text-lg md:text-2xl font-medium mb-2">Let's work together</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Open to guest services and front office opportunities.
            </p>
            <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#ff7a1a] transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        {/* Middle Section - Socials */}
        <div className="flex flex-wrap justify-between items-center py-6 border-t border-white/10 mb-4 text-sm md:text-lg font-medium">
          <a href="https://www.discover-sharm.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff7a1a] transition-colors">Website</a>
          <a href="tel:+201061693679" className="hover:text-[#ff7a1a] transition-colors">+20 106 169 3679</a>
          <a href="/Mohamed-Gamal-CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff7a1a] transition-colors">Download CV</a>
        </div>

        {/* Huge Text Section */}
        <div className="w-full text-center flex-1 flex items-center justify-center min-h-0">
          <h1 className="text-[11vw] font-bold leading-none tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
            MOHAMED GAMAL
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6">
          <p>© {new Date().getFullYear()} Mohamed Gamal Abd El-Mohsen. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Sharm El Sheikh, Egypt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
