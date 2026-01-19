
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Acasă', path: '/' },
    { name: 'Despre Noi', path: '/despre-noi' },
    { name: 'Produse', path: '/catalog' },
    { name: 'Furnizori', path: '/furnizori' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-surface-dark/95 backdrop-blur shadow-sm border-b border-gray-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="flex items-end gap-1 h-10">
                <div className="w-1.5 h-10 bg-gray-600 dark:bg-gray-400"></div>
                <div className="w-1.5 h-8 bg-gray-600 dark:bg-gray-400"></div>
                <div className="w-1.5 h-10 bg-primary"></div>
                <div className="w-1.5 h-6 bg-gray-600 dark:bg-gray-400"></div>
                <div className="w-1.5 h-9 bg-gray-600 dark:bg-gray-400"></div>
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-gray-700 dark:text-white">
                MARKO <span className="font-normal text-gray-500 dark:text-gray-400">MED</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 transition"
            >
              <span className="material-icons-outlined dark:hidden">dark_mode</span>
              <span className="material-icons-outlined hidden dark:block">light_mode</span>
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary p-2"
            >
              <span className="material-icons-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                document.documentElement.classList.toggle('dark');
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300"
            >
              Toggle Dark Mode
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
