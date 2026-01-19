
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Toate');
  const categories = ['Toate', 'Lasere Medicale', 'Ribcap', 'Elicina', 'Invitalis'];

  const filteredProducts = activeCategory === 'Toate' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory || p.brand === activeCategory.toUpperCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Catalog de Produse</h1>
      
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition shadow-sm border ${
              activeCategory === cat 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="group bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all overflow-hidden flex flex-col"
          >
            <div className="relative h-64 bg-slate-50 dark:bg-slate-900 overflow-hidden p-6 flex items-center justify-center">
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Nou</span>
              )}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">-{product.discount}%</span>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="text-xs text-primary font-bold mb-1 uppercase tracking-wide">{product.brand}</div>
              <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-2 leading-tight group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                {product.description}
              </p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
                {product.price ? (
                  <span className="text-xl font-bold text-slate-900 dark:text-white">{product.price.toLocaleString()} Lei</span>
                ) : (
                  <span className="text-sm font-semibold text-primary">Solicită Ofertă</span>
                )}
                <div className="bg-primary text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-icons-outlined text-sm">visibility</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
