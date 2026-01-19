
import React from 'react';
import { TEAM, DOMAINS } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Story Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-surface-dark">
        <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Despre Noi</span>
                <h1 className="text-4xl lg:text-5xl font-serif text-slate-800 dark:text-white leading-tight">
                  Povestea <span className="text-primary">MARKO MED</span>
                </h1>
                <div className="w-20 h-1 bg-primary"></div>
              </div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                De peste două decenii, MARKO MED redefinește standardele în distribuția de tehnologie medicală laser în România. Călătoria noastră a început cu o viziune simplă: să aducem inovația medicală de top în clinicile românești.
              </p>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                Astăzi, suntem mândri să fim parteneri de încredere pentru sute de specialiști, oferind nu doar echipamente, ci soluții complete care transformă vieți. Angajamentul nostru pentru excelență și integritate rămâne neschimbat.
              </p>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 transform translate-x-4 translate-y-4 rounded-lg transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                alt="Echipa MARKO MED" 
                className="relative rounded-lg shadow-2xl object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://picsum.photos/seed/teamwork/800/1000" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-surface-dark p-8 md:p-12 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="md:w-1/3 flex justify-center md:justify-start">
                <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square max-w-sm rounded-lg overflow-hidden border-4 border-slate-50 dark:border-slate-700 shadow-inner group">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="md:w-2/3 space-y-6 text-center md:text-left">
                <div>
                  <h2 className="text-3xl font-serif text-slate-800 dark:text-white mb-2">{member.name}</h2>
                  <p className="text-primary font-medium uppercase tracking-wide text-sm">{member.role}</p>
                </div>
                <blockquote className="text-xl italic text-slate-500 dark:text-slate-400 font-serif border-l-4 border-primary pl-6">
                  "{member.quote}"
                </blockquote>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
                <div className="pt-4 flex justify-center md:justify-start gap-4">
                  <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">email</span></button>
                  <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">share</span></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:shadow-lg transition-all">
              <span className="material-icons-outlined text-4xl text-primary mb-6">flag</span>
              <h3 className="text-xl font-bold mb-4 font-serif text-slate-800 dark:text-white">Misiune</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Să facilităm accesul medicilor din România la cele mai performante tehnologii laser, contribuind astfel la ridicarea standardelor actului medical.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:shadow-lg transition-all">
              <span className="material-icons-outlined text-4xl text-primary mb-6">visibility</span>
              <h3 className="text-xl font-bold mb-4 font-serif text-slate-800 dark:text-white">Viziune</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Să devenim liderul incontestabil și prima alegere a profesioniștilor din sănătate pentru soluții integrate de tehnologie medicală avansată.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:shadow-lg transition-all">
              <span className="material-icons-outlined text-4xl text-primary mb-6">diamond</span>
              <h3 className="text-xl font-bold mb-4 font-serif text-slate-800 dark:text-white">Valori</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Integritate în parteneriate, excelență în servicii, inovație continuă și responsabilitate față de pacientul final.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
