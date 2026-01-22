import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary border-b-2 border-primary" : "text-slate-600 dark:text-slate-300 hover:text-primary transition-colors";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Desktop Nav - Logo removed */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wide">
            <Link to="/" className={`${isActive('/')} py-2`}>Acasă</Link>
            <Link to="/about" className={`${isActive('/about')} py-2`}>Despre Noi</Link>
            <Link to="/catalog" className={`${isActive('/catalog')} py-2`}>Produse</Link>
            <Link to="/partners" className={`${isActive('/partners')} py-2`}>Furnizori</Link>
            <Link to="/contact" className={`${isActive('/contact')} py-2`}>Contact</Link>
          </div>

          {/* Mobile Menu Button - Logo removed */}
          <div className="flex md:hidden items-center">
             {/* No logo here either */}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 transition rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
              <Search size={20} />
            </button>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 transition rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 transition relative rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold leading-none text-white transform translate-x-0 -translate-y-0 bg-primary rounded-full shadow-sm">2</span>
            </button>

            <button 
              className="md:hidden p-2 text-slate-500 dark:text-slate-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Acasă</Link>
             <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Despre Noi</Link>
            <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Produse</Link>
            <Link to="/partners" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Furnizori</Link>
            <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;