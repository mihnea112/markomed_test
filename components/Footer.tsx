import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary dark:bg-[#0a0a0a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 bg-primary"></div>
              <div className="h-6 w-1 bg-primary/70"></div>
              <div className="h-8 w-1 bg-primary"></div>
              <span className="text-xl font-bold tracking-widest ml-2">
                MARKO MED
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Partenerul tău de încredere în tehnologie medicală de avangardă.
            </p>
          </div>

          <div>
            <h5 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
              Navigare Rapidă
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/despre-noi" className="hover:text-white transition">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-white transition">
                  Catalog Produse
                </Link>
              </li>
              <li>
                <Link to="/furnizori" className="hover:text-white transition">
                  Furnizori
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
              Contact
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-sm mt-1">
                  place
                </span>
                <span>
                  Str. I. Vacarescu, nr. 19, ap. 4, 
                  <br />
                  Timisoara, Romania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-sm">phone</span>
                <span>+40 723 174 945</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-sm">email</span>
                <span>office@markomed.ro</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
              Newsletter
            </h5>
            <p className="text-xs text-gray-400 mb-4">
              Abonează-te pentru noutăți din industrie.
            </p>
            <form className="flex gap-2">
              <input
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-primary placeholder-gray-500"
                placeholder="Email-ul tău"
                type="email"
              />
              <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded text-sm transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 MARKO MED. Toate drepturile rezervate.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Termeni și condiții
            </a>
            <a href="#" className="hover:text-white">
              Politica de confidențialitate
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
