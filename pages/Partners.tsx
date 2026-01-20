import React from 'react';
import { Verified, Globe, Handshake, ArrowRight } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Biolitec",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-E-Ky_WSnNTAUg64ncTFD2MFA7oT7UtLrhsjtqORdVXAne1MTNZ-jdFJ0uSolCvO9_Oge3n4uXaVhrKRfD31KdZTse0WoFJTCpM0yf8ulsU9ima0_ZDcLNfvkQM4hUtfMxn_hb5HindIRTqTvGTbcT6OoJaDb2cdAs9qxYZHI1U_Y01ofydy6NggBf_a0kpGwoW1_onRkQBB5IP_EjhiMcqTyMdxbviZRg6tsgYCCf4aKSqHFVw_ZorVZQySjSu2977RngKSqgTk",
      country: "Germania",
      description: "Lider global în tehnologia laser medicală minim invazivă. Soluții avansate pentru flebologie, urologie și chirurgie."
    },
    {
      name: "Ribcap",
      country: "Elveția",
      description: "Căști de protecție medicală revoluționare, combinând siguranța cu un design modern și confortabil pentru pacienți.",
      customLogo: (
        <div className="text-3xl font-black text-gray-800 tracking-wider">RIBCAP</div>
      )
    },
    {
      name: "Elicina",
      country: "Chile",
      description: "Pionieri în dermatocosmetică naturală, oferind soluții eficiente pentru regenerarea pielii și tratamentul cicatricilor.",
      customLogo: (
        <div className="text-2xl font-serif text-green-700 italic font-bold">elicina</div>
      )
    },
    {
      name: "Invitalis",
      country: "Germania",
      description: "Sisteme inovatoare de terapie prin masaj și wellness medical, dedicate recuperării și relaxării musculare profunde.",
      customLogo: (
        <div className="text-2xl font-sans font-bold text-blue-900 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-4 border-blue-900"></div>
            INVITALIS
        </div>
      )
    },
    {
      name: "Nouvag",
      country: "Elveția",
      description: "Echipamente de precizie pentru chirurgie dentară și medicală, recunoscute pentru fiabilitatea elvețiană și inovație.",
      customLogo: (
        <div className="text-2xl font-sans font-bold text-teal-600 tracking-wide uppercase">NOUVAG</div>
      )
    },
    {
      name: "Score",
      country: "Olanda",
      description: "Scaune ergonomice medicale și industriale de top, proiectate pentru a asigura postura corectă a profesioniștilor.",
      customLogo: (
        <div className="text-3xl font-black text-gray-900 italic transform -skew-x-12">SCORE</div>
      )
    }
  ];

  return (
    <div className="animate-fade-in">
      <header className="relative bg-white dark:bg-surface-dark pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Parteneri Internaționali
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              MARKO MED este distribuitor exclusiv în România pentru producători de elită în domeniul tehnologiei medicale. Aducem inovația mai aproape de pacienți prin parteneriate strategice de lungă durată.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                <Verified className="text-primary mr-2" size={18} />
                Calitate Certificată
              </div>
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                <Globe className="text-primary mr-2" size={18} />
                Branduri Globale
              </div>
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                <Handshake className="text-primary mr-2" size={18} />
                Parteneriate Exclusive
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col h-full">
                <div className="h-48 bg-white flex items-center justify-center p-8 border-b border-slate-100 dark:border-slate-700 relative">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-medium">{partner.country}</span>
                  </div>
                  {partner.customLogo ? partner.customLogo : (
                      <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`} 
                      className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{partner.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    {partner.description}
                  </p>
                  <button className="inline-flex items-center justify-center w-full px-4 py-3 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary hover:text-white transition-colors duration-300">
                    Află mai multe
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-sans font-bold mb-2">Doriți să deveniți partener?</h2>
            <p className="text-white/90 text-sm md:text-base max-w-xl">
              Suntem mereu în căutarea unor noi colaborări pentru a extinde portofoliul de soluții medicale premium în România.
            </p>
          </div>
          <div>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-slate-50 transition-colors shadow-md">
              Contactați-ne
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;