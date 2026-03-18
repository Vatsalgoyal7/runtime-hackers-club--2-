import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Terminal, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-hacker-green flex items-center justify-center rounded-sm rotate-45">
                <Terminal className="text-black -rotate-45" size={18} />
              </div>
              <span className="font-mono font-bold text-lg tracking-tighter">
                RUNTIME<span className="text-hacker-green">HACKERS</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm font-mono leading-relaxed">
              The elite tech community pushing the boundaries of innovation and security. Join us in building the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-hacker-green transition-colors"><Github size={20} /></a>
              <a href="#" className="text-white/40 hover:text-hacker-green transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-hacker-green transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-mono font-bold mb-6 uppercase tracking-widest text-sm">RESOURCES</h4>
            <ul className="space-y-4">
              {['About Us', 'Events', 'Projects', 'Achievements', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-white/40 hover:text-hacker-green transition-colors text-sm font-mono">
                    {item.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-mono font-bold mb-6 uppercase tracking-widest text-sm">CONTACT_US</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-white/40 text-sm font-mono">
                <Mail size={16} className="text-hacker-green" />
                <span>hello@runtimehackers.club</span>
              </li>
              <li className="flex items-center space-x-3 text-white/40 text-sm font-mono">
                <Phone size={16} className="text-hacker-green" />
                <span>+91 7310698091</span>
              </li>
              <li className="flex items-center space-x-3 text-white/40 text-sm font-mono">
                <MapPin size={16} className="text-hacker-green" />
                <span>IMS Engineering College, Ghaziabad</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-mono font-bold mb-6 uppercase tracking-widest text-sm">NEWSLETTER</h4>
            <p className="text-white/40 text-xs font-mono mb-4">Get the latest updates on events and projects.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="EMAIL_ADDR"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-xs font-mono focus:outline-none focus:border-hacker-green w-full"
              />
              <button className="bg-hacker-green text-black px-4 py-2 rounded-r-lg font-mono font-bold text-xs hover:bg-white transition-colors">
                SUB
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
            © 2026 RUNTIME HACKERS CLUB. ALL_RIGHTS_RESERVED.
          </p>
          <div className="flex space-x-6 text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-hacker-green transition-colors">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-hacker-green transition-colors">TERMS_OF_SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
