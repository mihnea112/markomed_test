import React from "react";
import { Link } from "react-router-dom";
import {
  Flag,
  Eye,
  Gem,
  Activity,
  Scissors,
  Stethoscope,
  Microscope,
  ArrowRight,
} from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg.png"
            alt="Abstract Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
          {/* Big Logo */}
          <div className="mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center rounded-3xl bg-white/15 backdrop-blur-md border border-white/30 shadow-2xl shadow-black/40 p-8 ring-1 ring-white/20">
              <img
                src="/logo_white.png"
                alt="Marko Med Logo"
                className="w-72 md:w-[26rem] lg:w-[30rem] h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
              />
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto mb-6 mt-6"></div>
            <p className="text-lg md:text-2xl font-light text-teal-50 tracking-[0.2em] uppercase">
              Tehnologie Medicală de Avangardă
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up delay-100">
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              De peste două decenii, redefinim standardele în distribuția de
              tehnologie medicală laser în România. Partenerul tău de încredere
              pentru inovație și excelență.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1">
                Explorează Produsele
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-full font-bold text-lg transition-all hover:border-white/50">
                Contactează-ne
              </button>
            </div>
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-light dark:from-[#181818] to-transparent z-10"></div>
      </section>

      {/* Products Preview Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Catalog
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800 dark:text-white mt-2">
                Produse Recomandate
              </h2>
            </div>
            <Link
              to="/catalog"
              className="hidden md:flex items-center text-primary font-medium hover:text-primary-hover transition-colors group"
            >
              Vezi toate produsele{" "}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="group bg-white dark:bg-[#252525] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
              <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden p-4 flex items-center justify-center">
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Nou
                </span>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB_ylpfdz6WugAwmwDpnl0NjBN6yg-k3-hhS9LXYSLMZjBIug53ZkPzroMpH8zFlwlHAzZ6FNr_ZCRMEWCFnimaStxPeZFnfFuSH52e-G2gy4rsU8ECwcxsrnTRCZSfobDqFPl42bJnTPoLyvzCoRsBjIxwMlT5dhZ4HCrcbZ75sEi-AHyXRYJBLINqDKRfsJ-IA31LtYig04Cv-hfjsbI5KuH-4WSOVFIDFf35cBQkpF0nkb5VZku0yn1vHkOVdP9NGHlUfFdNbs"
                  alt="Lenny Grey"
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wide">
                  Ribcap
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                  Lenny Grey - Căciulă Protecție
                </h3>
                <div className="mt-auto flex justify-between items-center pt-4">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    650 Lei
                  </span>
                  <Link
                    to="/catalog"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Detalii
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white dark:bg-[#252525] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
              <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden p-4 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB8myxBZpPkAft8Hw7ni_ilc3wH8LbPKT_TJT_PFm2vJyudFWRAZrkvom8l0ofj_t-Iu5574xB3SKU0c511NpCrsDI3XBDL7Ay1BOeX6L_DnU00Ngkuo5KGKTit9UbS_dd7p6OVGRmiDHpmjJVN625xj-3-DDJnZwvUIppqUNkliiCw0QYddxnxW38DHVBHn4NR93G2TeXBAI5tTpSszm6ZbR238E8tDo4Hw8osGHQV0Wyssp4K3QqyjN2vUZLGgxZkeXA9kAwiw8"
                  alt="MeDioStar Monolith"
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wide">
                  Asclepion
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                  MeDioStar Monolith
                </h3>
                <div className="mt-auto flex justify-between items-center pt-4">
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Cere Ofertă
                  </span>
                  <Link
                    to="/catalog"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Detalii
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white dark:bg-[#252525] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
              <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden p-4 flex items-center justify-center">
                <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  -15%
                </span>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyf-zN3EicQb6mNssYrvzEeFDucR63YPuXFhyEN6LQCgJD1W7EoVdcvY0ShgB9I765HJBCxSlfRPzYCcPrjv2uaKoiMafOQBxNI9Vtgow0dTvTvaDWr_sa0phOXqjWbH4VaromL1ZI-mq4mXq8Jse5X9xJV__eHFJZyybKVlK_lLHyGQC7oBSilfvKo4SnaAKMcA_LjdXmigwT0Giz0h5ePYBb05Yz9UP9wZUBVr2fVIVgxlWAC8mnOn9oQTgt_oqavNW2zszL42Q"
                  alt="Elicina Eco"
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wide">
                  Elicina
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                  Elicina Eco - Cremă
                </h3>
                <div className="mt-auto flex justify-between items-center pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 line-through">
                      210 Lei
                    </span>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      178 Lei
                    </span>
                  </div>
                  <Link
                    to="/catalog"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Detalii
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group bg-white dark:bg-[#252525] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
              <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden p-4 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZlO7-YyzvlwC9pV6GybwWhmAbYoWRcMAMvfVciWITpyF_olbfmL2vsE5deSS69C9mrvkYWUB1UM93Gbkzt9QvWs4Tn2pWyZVcVnA9udheRPRqiewMMqyTARRgUIwBp8GxaRG_69m9arCLtMu3UH51vyipufjycm-1XPsR8ae-g8TQ931nmFgyefkNK45XNeBD1eR5zIEQdOFFrNOyjo2I6Si-f2unT42ZVMJfLJGV5uiHGbW25TwA3MaaRqEUYfm9qnuq12hHQCI"
                  alt="Perna Vital"
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wide">
                  Invitalis
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                  Pernă Ortopedică Vital
                </h3>
                <div className="mt-auto flex justify-between items-center pt-4">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    420 Lei
                  </span>
                  <Link
                    to="/catalog"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Detalii
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Vezi toate produsele
            </Link>
          </div>
        </div>
      </section>

      {/* Partners / Furnizori Section */}
      <section className="py-20 bg-slate-50 dark:bg-black/20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-slate-800 dark:text-white">
              Parteneri de Încredere
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-slate-500 dark:text-slate-400">
              Colaborăm cu lideri mondiali pentru a aduce excelența în România.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Biolitec */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-E-Ky_WSnNTAUg64ncTFD2MFA7oT7UtLrhsjtqORdVXAne1MTNZ-jdFJ0uSolCvO9_Oge3n4uXaVhrKRfD31KdZTse0WoFJTCpM0yf8ulsU9ima0_ZDcLNfvkQM4hUtfMxn_hb5HindIRTqTvGTbcT6OoJaDb2cdAs9qxYZHI1U_Y01ofydy6NggBf_a0kpGwoW1_onRkQBB5IP_EjhiMcqTyMdxbviZRg6tsgYCCf4aKSqHFVw_ZorVZQySjSu2977RngKSqgTk"
              alt="Biolitec"
              className="h-10 object-contain"
            />

            {/* Ribcap */}
            <div className="text-xl font-black text-gray-800 dark:text-gray-300 tracking-wider">
              RIBCAP
            </div>

            {/* Elicina */}
            <div className="text-xl font-serif text-green-700 dark:text-green-500 italic font-bold">
              elicina
            </div>

            {/* Invitalis */}
            <div className="text-lg font-sans font-bold text-blue-900 dark:text-blue-400 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-blue-900 dark:border-blue-400"></div>
              INVITALIS
            </div>

            {/* Nouvag */}
            <div className="text-xl font-sans font-bold text-teal-600 dark:text-teal-400 tracking-wide uppercase">
              NOUVAG
            </div>

            {/* Score */}
            <div className="text-2xl font-black text-gray-900 dark:text-gray-100 italic transform -skew-x-12">
              SCORE
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/partners"
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              Vezi toți furnizorii <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-white dark:bg-[#181818]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Flag size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-slate-800 dark:text-white">
                Misiune
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Să facilităm accesul medicilor din România la cele mai
                performante tehnologii laser, contribuind astfel la ridicarea
                standardelor actului medical.
              </p>
            </div>
            <div className="group p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-slate-800 dark:text-white">
                Viziune
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Să devenim liderul incontestabil și prima alegere a
                profesioniștilor din sănătate pentru soluții integrate de
                tehnologie medicală avansată.
              </p>
            </div>
            <div className="group p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Gem size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-slate-800 dark:text-white">
                Valori
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Integritate în parteneriate, excelență în servicii, inovație
                continuă și responsabilitate față de pacientul final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fields of Activity */}
      <section className="py-20 bg-slate-50 dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 dark:text-white mb-4">
              Domenii în care activăm
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-slate-500 dark:text-slate-400">
              Expertiză multidisciplinară pentru nevoile complexe ale medicinei
              moderne.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-black/20 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <Activity
                size={40}
                className="text-primary mb-4"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-slate-700 dark:text-slate-200">
                Dermatologie
              </h4>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-black/20 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <Scissors
                size={40}
                className="text-primary mb-4"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-slate-700 dark:text-slate-200">
                Chirurgie Plastică
              </h4>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-black/20 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <Stethoscope
                size={40}
                className="text-primary mb-4"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-slate-700 dark:text-slate-200">
                Ginecologie
              </h4>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-black/20 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <Microscope
                size={40}
                className="text-primary mb-4"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-slate-700 dark:text-slate-200">
                Medicină Estetică
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-serif text-slate-800 dark:text-white mb-2">
                Certificări & Calitate
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Toate echipamentele distribuite de MARKO MED sunt certificate CE
                și respectă cele mai riguroase standarde europene de siguranță.
              </p>
            </div>
            <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 px-4 py-2 rounded bg-white dark:bg-transparent">
                <span className="font-bold text-2xl text-slate-700 dark:text-slate-300">
                  CE
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                  Medical
                  <br />
                  Certified
                </span>
              </div>
              <div className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 px-4 py-2 rounded bg-white dark:bg-transparent">
                <span className="font-bold text-2xl text-slate-700 dark:text-slate-300">
                  ISO
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                  9001:2015
                  <br />
                  Certified
                </span>
              </div>
              <div className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 px-4 py-2 rounded bg-white dark:bg-transparent">
                <span className="font-bold text-2xl text-slate-700 dark:text-slate-300">
                  ISO
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                  13485
                  <br />
                  Medical Devices
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
