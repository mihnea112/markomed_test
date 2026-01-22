import React from "react";
import {
  Award,
  Users,
  Target,
  Clock,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
            Povestea Noastră
          </h1>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Dedicare, inovație și excelență medicală. De peste 20 de ani, MARKO
            MED este partenerul de încredere al medicilor din România, conectând
            tehnologia de mâine cu nevoile de astăzi.
          </p>
        </div>
      </section>

      {/* Main Content - History & Context */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Istoric
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
                De la Viziune la{" "}
                <span className="text-primary">Lider de Piață</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Înființată în anul 2003, compania MARKO MED a pornit la drum cu
                un scop clar: să reducă decalajul tehnologic dintre clinicile
                din Occident și cele din România. Într-o perioadă în care
                tehnologia laser era o raritate, noi am ales să fim pionieri și
                să educăm piața.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Astăzi, suntem mândri să reprezentăm exclusiv producători de top
                la nivel global, precum Biolitec (Germania), și să oferim
                soluții complete care variază de la lasere chirurgicale de
                ultimă generație pentru flebologie și proctologie, până la
                echipamente de recuperare și protecție.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      20+ Ani
                    </h4>
                    <p className="text-sm text-slate-500">
                      Experiență continuă
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      500+
                    </h4>
                    <p className="text-sm text-slate-500">Clinici Partenere</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary rounded-lg transform rotate-3 transition-transform group-hover:rotate-6 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Medical Team Meeting"
                className="relative rounded-lg shadow-xl w-full h-auto object-cover z-10"
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block">
                <p className="text-xl font-serif font-bold mb-1 text-slate-900 dark:text-white">
                  "Calitatea"
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  este semnătura noastră.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-slate-50 dark:bg-black/20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              Leadership
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mt-2">
              Cuvântul Fondatorului
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-[#252525] p-8 md:p-16 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <div className="relative w-72 h-72 md:w-full md:h-auto md:aspect-square max-w-sm rounded-full md:rounded-2xl overflow-hidden border-4 border-slate-50 dark:border-slate-700 shadow-inner group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARN9Zno3xkJYJ2uewtnx0aYVFCLu23n5r8KWGD7-69UZZKEI-oTk4uIHP82qAdKZF9y6O6lb4eKUvb8ODyfNEf75oH_glBizWG6glURkye1GdVJjTbRvEU9I6EJQgPe3xSVx1yzV187G4vSMm9Ori8aGQ77vMmb6ANJib3NTzopXXi8tSsSLHFQza-tTsDeAyo5Xfy_piAGnIOn9MSoqCa9hNV7LQUNTdDjID_y3dPeUMm8TTsTs90-_aEVI_ikjkNrccjKURDhUs"
                  alt="Dr. Milorad Avramovic"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-8 text-center md:text-left">
              <div>
                <h2 className="text-4xl font-serif text-slate-800 dark:text-white mb-2">
                  Dr. Milorad Avramovic
                </h2>
                <p className="text-primary font-bold uppercase tracking-wide text-sm bg-primary/10 inline-block px-3 py-1 rounded">
                  Fondator & Director General
                </p>
              </div>
              <blockquote className="text-2xl italic text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                <span className="text-6xl text-primary/20 font-sans absolute -mt-4 -ml-4">
                  "
                </span>
                Credem că tehnologia trebuie să servească umanității. La MARKO
                MED, nu vindem doar lasere, ci construim punți către un viitor
                mai sănătos.
              </blockquote>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Cu o experiență vastă în domeniul medical și o pasiune pentru
                  tehnologia de ultimă oră, Dr. Avramovic a fondat MARKO MED
                  pentru a umple golul dintre inovațiile internaționale și piața
                  medicală din România.
                </p>
                <p>
                  Viziunea sa a fost întotdeauna centrată pe pacient:
                  echipamentele performante înseamnă recuperare mai rapidă,
                  durere redusă și rezultate estetice superioare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
              Valorile Noastre
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">
              Standarde ridicate pentru parteneri exigenți. Construim relații
              bazate pe încredere și profesionalism.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expertiză Certificată",
                desc: "Echipa noastră participă constant la training-uri internaționale pentru a stăpâni ultimele inovații.",
              },
              {
                icon: Target,
                title: "Soluții Personalizate",
                desc: "Nu oferim 'one-size-fits-all'. Analizăm nevoile specifice ale clinicii tale pentru ROI maxim.",
              },
              {
                icon: CheckCircle,
                title: "Suport Tehnic",
                desc: "Asigurăm service rapid, piese de schimb și mentenanță preventivă pentru continuitate.",
              },
              {
                icon: Lightbulb,
                title: "Educație Continuă",
                desc: "Organizăm workshop-uri și demonstrații live pentru a asigura utilizarea corectă a tehnologiei.",
              },
              {
                icon: Users,
                title: "Parteneriat",
                desc: "Rămânem alături de clienții noștri mult după finalizarea vânzării.",
              },
              {
                icon: CheckCircle,
                title: "Integritate",
                desc: "Recomandăm doar ceea ce este necesar și benefic pentru practica medicală a clientului.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white font-serif">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
