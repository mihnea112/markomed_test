import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Facebook, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary dark:bg-black text-white pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
               <div className="flex items-center justify-center h-8 w-8 bg-primary rounded shadow-sm text-white font-bold text-xl">
                M
              </div>
              <span className="text-xl font-bold tracking-widest ml-2">MARKO MED</span>
            </div>
            <p className="text-gray-400 text-sm">
              Partenerul tău de încredere în tehnologie medicală de avangardă.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h5 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Link-uri Rapide</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Despre Noi</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Portofoliu Produse</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Evenimente</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-primary" />
                <span>Strada Exemplului Nr. 10,<br/>București, România</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+40 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                 <Mail size={18} className="text-primary" />
                <span>office@markomed.ro</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h5 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Newsletter</h5>
            <p className="text-xs text-gray-400 mb-4">Abonează-te pentru noutăți din industria laserelor medicale.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email-ul tău" 
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-primary placeholder-gray-500"
              />
              <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded text-sm transition-colors">
                OK
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2023 MARKO MED. Toate drepturile rezervate.</p>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            <a href="#" className="hover:text-white">Termeni și condiții</a>
            <a href="#" className="hover:text-white">Politica de confidențialitate</a>
            <div className="flex gap-4 ml-4">
                <Facebook size={16} className="cursor-pointer hover:text-white" />
                <Linkedin size={16} className="cursor-pointer hover:text-white" />
                <Globe size={16} className="cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;