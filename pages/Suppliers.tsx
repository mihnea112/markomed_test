
import React from 'react';
import { SUPPLIERS } from '../constants';

const Suppliers: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="relative bg-white dark:bg-surface-dark pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Parteneri Internaționali
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            MARKO MED este distribuitor exclusiv în România pentru producători de elită în domeniul tehnologiei medicale. Aducem inovația mai aproape de pacienți.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <span className="material-icons text-primary mr-2">verified</span> Calitate Certificată
            </div>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <span className="material-icons text-primary mr-2">public</span> Branduri Globale
            </div>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <span className="material-icons text-primary mr-2">handshake</span> Parteneriate Exclusive
            </div>
          </div>
        </div>
      </header>

      <main className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SUPPLIERS.map(s => (
              <div key={s.id} className="group bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden flex flex-col">
                <div className="h-48 bg-white flex items-center justify-center p-12 border-b border-slate-100 dark:border-slate-800">
                  {s.logoType === 'image' ? (
                    <img src={s.logo} alt={s.name} className="max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <div className={`text-4xl font-black tracking-widest ${s.id === 'ribcap' ? 'text-slate-800' : 'text-primary italic font-serif'}`}>
                      {s.logo}
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{s.name}</h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">{s.country}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1">
                    {s.description}
                  </p>
                  <button className="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                    Vezi Portofoliu <span className="material-icons-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Doriți să deveniți partener?</h2>
            <p className="opacity-90 max-w-xl">Suntem mereu în căutarea unor noi colaborări pentru a extinde portofoliul de soluții medicale premium în România.</p>
          </div>
          <button className="px-10 py-4 bg-white text-primary font-bold rounded-lg shadow-xl transition-transform hover:scale-105">
            Contactați-ne
          </button>
        </div>
      </section>
    </div>
  );
};

export default Suppliers;
