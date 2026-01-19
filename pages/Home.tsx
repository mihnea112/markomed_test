
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, SUPPLIERS, DOMAINS } from '../constants';

const Home: React.FC = () => {
  // Show only top 4 products on the home page for a featured look
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
                Tehnologie Medicală de Avangardă
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-slate-800 dark:text-white leading-tight">
                Redefinim standardele în <span className="text-primary italic">chirurgia laser</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                Partenerul tău premium pentru distribuția de echipamente laser medicale de ultimă generație. Aducem inovația în clinicile din România.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/catalog" className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 text-center">
                  Catalog Produse
                </Link>
                <Link to="/furnizori" className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-bold transition-all text-center">
                  Parteneri Internaționali
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3"></div>
              <img 
                src="https://picsum.photos/seed/medtech/800/600" 
                alt="Medical Laser Tech" 
                className="relative rounded-2xl shadow-2xl object-cover w-full aspect-video grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 bg-white dark:bg-surface-dark border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase mb-12">Distribuitor Autorizat</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 dark:opacity-40 hover:opacity-100 transition-opacity duration-500">
            {SUPPLIERS.map(s => (
              <div key={s.id} className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-widest">
                {s.logoType === 'text' ? s.logo : <span className="text-primary">{s.name}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Domains */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-slate-800 dark:text-white mb-4">Domenii de Expertiză</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {DOMAINS.map((d, i) => (
              <div key={i} className="group p-8 bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-100 dark:border-slate-800 text-center">
                <span className="material-icons-outlined text-5xl text-primary mb-4 group-hover:scale-110 transition-transform">
                  {d.icon}
                </span>
                <h3 className="font-bold text-slate-800 dark:text-white">{d.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white dark:bg-surface-dark overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-3 block">Inovație & Performanță</span>
              <h2 className="text-4xl font-serif text-slate-800 dark:text-white mb-4">Produse Recomandate</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-slate-600 dark:text-slate-400">
                Explorați cele mai performante soluții tehnologice selectate pentru a oferi precizie maximă și rezultate superioare în practica medicală.
              </p>
            </div>
            <Link to="/catalog" className="group text-primary font-bold flex items-center gap-2 transition-all uppercase tracking-widest text-sm whitespace-nowrap">
              Vezi tot catalogul 
              <span className="material-icons-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="relative h-64 bg-white dark:bg-surface-dark overflow-hidden p-8 flex items-center justify-center m-2 rounded-xl">
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest z-10 shadow-lg shadow-primary/20">Nou</span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[10px] text-primary font-bold mb-2 uppercase tracking-[0.2em]">{product.brand}</div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-4 leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                    <span className="text-sm font-bold text-slate-400 group-hover:text-primary transition-colors">Vezi mai multe</span>
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-icons-outlined text-sm">arrow_outward</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Support Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-16 text-center">
             <div className="group space-y-6">
               <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:rotate-6 transition-transform">
                 <span className="material-icons-outlined text-4xl">verified</span>
               </div>
               <h4 className="font-serif font-bold text-xl dark:text-white">Garanția Calității</h4>
               <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                 Colaborăm exclusiv cu producători de renume mondial pentru a asigura echipamente certificate conform standardelor ISO și CE.
               </p>
             </div>
             <div className="group space-y-6">
               <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:rotate-6 transition-transform">
                 <span className="material-icons-outlined text-4xl">engineering</span>
               </div>
               <h4 className="font-serif font-bold text-xl dark:text-white">Suport Tehnic Avansat</h4>
               <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                 Echipa noastră oferă instalare profesională, instruire dedicată și mentenanță rapidă pentru a minimiza timpul de nefuncționare.
               </p>
             </div>
             <div className="group space-y-6">
               <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:rotate-6 transition-transform">
                 <span className="material-icons-outlined text-4xl">psychology</span>
               </div>
               <h4 className="font-serif font-bold text-xl dark:text-white">Consultanță Strategica</h4>
               <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                 Beneficiați de expertiza noastră pentru a identifica cea mai eficientă tehnologie adaptată nevoilor specifice ale clinicii dumneavoastră.
               </p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
