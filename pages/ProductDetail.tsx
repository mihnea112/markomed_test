import React, { useState } from 'react';
import { ChevronRight, Home, CheckCircle, FileText, Settings, Download, PlayCircle } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState('descriere');

  return (
    <div className="animate-fade-in bg-slate-50 dark:bg-background-dark min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="#" className="text-slate-400 hover:text-primary"><Home size={16} /></a></li>
              <li><span className="text-slate-300">/</span></li>
              <li><a href="#" className="text-slate-500 hover:text-primary">Produse</a></li>
              <li><span className="text-slate-300">/</span></li>
              <li><a href="#" className="text-slate-500 hover:text-primary">Lasere Chirurgicale</a></li>
              <li><span className="text-slate-300">/</span></li>
              <li><span className="text-primary font-medium">LEONARDO® Mini Dual</span></li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
          
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm flex items-center justify-center p-8 group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCav6UKEWPhY1q8XYHvcOwmn4bC-cRypv1cEBGHwp6qiS6yStDHO-t4U2btY8mn17OX6HoOZokUq13Q-eBexxOsR-EhWRZEmjK2wGPfUZfzpUIxhzPEtTZ7pwt9gOpiPmqWRZ1hcoovcS8GiNC36E6XEzQRz3iZSxZgz0NW0QLXJmOoE9FiddbLqdj1WLzcK4ow4-Xjz7hzYgmDpdVhLjDf52ycjcpEfIWOOOocpfwozE502hzJnS_FSRAWULZmUzpz4gn2GELlxLo" 
                alt="LEONARDO Mini Dual Laser Device" 
                className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <button className="aspect-square bg-white dark:bg-surface-dark rounded-lg border-2 border-primary overflow-hidden p-2">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFEYNZDgwWgUtzfXerxVPZg5dk1YXOx3Uvw-eHxWAeUG8c45q_IKobcmrAHwFX9DHuZXE7onyPtXIH7nwWuGtoY3lx-LixOe4r-wzPLFqFZqzju26gWVeOn_85w-ZAqxrq_eHGGQFnx6d4hkkHgLgR8QpyequcihQrVuXEeiZShFI_h-kBwrF85GIcHytmooHwdkn3XF_YOQpiuB9L-mVK8WGJhHSvmpYNcUqFg3W_2jtjN1TzPeHvi8Q6X92BOHTWI8r2i33xpvc" alt="Thumb 1" className="object-contain w-full h-full" />
              </button>
              <button className="aspect-square bg-white dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden p-2 hover:border-primary/50 transition-colors">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOSDhmLX3ecJFaEaCnfEEnDIRY5co132SCshc_yQGtafCJPZk8Gr8ocw2mFpyldl0s5kOdsdFFY7fy9pWLXQHuHWYWH4TBMN9VtZaaAWBGYknT0ztnhf3593OsRakAgStF1kqXA8AfCN6zv9W2t6HwIotEEUcFe23-of6d1QDxHyVhj510eTQDPunTBplyjYraVSeVQVmDJQY-LD0OQlcGUs5Ljk4TWPxAhnb5L2g6Y3JqGAWLgKEOWW1e0LATpSGKjbQBRPzFtX8" alt="Thumb 2" className="object-contain w-full h-full opacity-60 hover:opacity-100" />
              </button>
              <button className="aspect-square bg-white dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden p-2 hover:border-primary/50 transition-colors flex items-center justify-center text-slate-400 hover:text-primary">
                <PlayCircle size={32} />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">LEONARDO® Mini Dual</h1>
              <div className="hidden sm:block">
                <div className="h-8 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center tracking-wider border border-slate-200 dark:border-slate-700">
                  BIOLITEC
                </div>
              </div>
            </div>
            
            <p className="mt-3 text-lg text-primary font-medium">Sistem Laser Diodă Versatil</p>
            
            <div className="mt-6">
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                LEONARDO® Mini Dual este cel mai versatil sistem laser medical compact de pe piață. Conceput pentru o gamă largă de aplicații chirurgicale minim invazive, acesta combină două lungimi de undă (980nm și 1470nm) pentru o precizie chirurgicală de neegalat și coagulare eficientă.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-8">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Caracteristici Cheie</h3>
              <ul className="space-y-3">
                {[
                  "Lungimi de undă duale: 980 nm și 1470 nm",
                  "Greutate redusă: 900g – ultra portabil",
                  "Interfață intuitivă cu ecran tactil",
                  "Ideal pentru Flebologie, ORL, Proctologie, Ginecologie"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-primary flex-shrink-0 mr-3" size={20} />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary border border-transparent rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 shadow-lg shadow-teal-500/30 transition-all">
                <FileText className="mr-2" size={20} />
                Cere Ofertă Personalizată
              </button>
              <button className="flex-1 bg-white dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <Download className="mr-2" size={20} />
                Descarcă Broșura
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                În Stoc
              </span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>Livrare 2-3 zile lucrătoare</span>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 lg:mt-24">
          <div className="border-b border-slate-200 dark:border-slate-700">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {[
                { id: 'descriere', label: 'Descriere Detaliată', icon: FileText },
                { id: 'specificatii', label: 'Specificații Tehnice', icon: Settings },
                { id: 'resurse', label: 'Resurse & Downloads', icon: Download },
                { id: 'video', label: 'Video', icon: PlayCircle },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center transition-colors
                    ${activeTab === tab.id 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300'}
                  `}
                >
                  <tab.icon className="mr-2" size={18} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2 text-slate-600 dark:text-slate-300 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Inovație în Chirurgia Laser</h3>
              <p>
                LEONARDO® Mini Dual reprezintă vârful tehnologiei laser medicale de la Biolitec. Cu o greutate de doar 900 de grame, acest dispozitiv portabil oferă puterea unui sistem staționar într-un pachet compact.
              </p>
              <p>
                Combinația unică a celor două lungimi de undă permite chirurgului să selecteze efectul dorit asupra țesutului:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-slate-900 dark:text-white">980 nm:</strong> Absorbție ridicată în hemoglobină, ideală pentru coagulare rapidă și hemostază.</li>
                <li><strong className="text-slate-900 dark:text-white">1470 nm:</strong> Absorbție ridicată în apă, asigurând o vaporizare precisă a țesutului și o penetrare controlată.</li>
              </ul>
              
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">Aplicații Clinice Principale:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Flebologie", desc: "Tratamentul venelor varicoase (ELVeS Radial®)." },
                  { title: "Proctologie", desc: "Tratamentul hemoroizilor (LHP®) și fistulelor (FiLaC®)." },
                  { title: "ORL", desc: "Chirurgie intranazală, orofaringe, dacriocistorinostomie." },
                  { title: "Ginecologie", desc: "Histeroscopie, laparoscopie, chirurgie conică." }
                ].map((app, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white mb-1">{app.title}</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:col-span-1">
              <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Specificații Tehnice Sumare</h4>
                <dl className="space-y-4">
                  {[
                    { label: "Model", value: "LEONARDO® Mini Dual" },
                    { label: "Lungimi de undă", value: "980 nm / 1470 nm" },
                    { label: "Putere (Max)", value: "10 Watt (980nm)\n12 Watt (1470nm)" },
                    { label: "Dimensiuni", value: "6.0 cm x 22.0 cm x 17.0 cm" },
                    { label: "Greutate", value: "0.9 kg" },
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <dt className="text-sm text-slate-500 dark:text-slate-400">{spec.label}</dt>
                      <dd className="text-sm font-medium text-slate-900 dark:text-white text-right whitespace-pre-line">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-md text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700">
                    Vezi Fisa Tehnică Completă
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Produse Similare</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { name: "LEONARDO® Dual 45", cat: "Laser Chirurgical", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgvGPERWhPLEeGTFIZVJ6BB4va95gHv0ALwyLiLVeJww8zB87lmrcMxejF97cm2XXHFwZAwblRIV1o1ecJ6RAc5mznS10MUIfCq6hP4o6nraiZgU3Rqhi-wOKMKf9dB4uRGG1YPmtdsHxWE1X8nJqMsRYfy22UYVLOJwBbOhOy0fB-47mU1n2RJ5_Dneu2HbXZT72XYlmSt1x9ekRGZFmyhLoQOt7N8y7aKMNbfoPLrHxWft7V7cMMt5reesgduZRQmZC7dAlTukI" },
               { name: "Kit Fibre Optice ELVeS®", cat: "Accesorii", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtCFd3IMr1-WdSQgSg8IpRLfgC8ZRm3LykdV5D481vVuRpOHShr--btjmdIgseFOOKAXs8prgJOe2u5ruMDRhj7aNIFbhkoIpLmFrILV8aYVXCs65f5e2aG_n7QiI4dGR-6FHC_elGD7zPJfFBUdly2raXthrdTXjTsNj8ijBpjxzliwGMeeJn8XdxHG1ACklcnDs53sUGy-KCwOwWhWLZMgp0NfIIDRpwyQ__4qP1tvWUI1DnmPqmyi34XqGp9A05m2EkzgCm27c" },
               { name: "LEONARDO® Dual 100", cat: "Laser Chirurgical", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwH34RvE0V6G57jUTf_oCHxm6i3BCVK9dgqrGPbF3s5gx3aDAkykTkNaQsxPKcgvACd_lJUZm0-b-dwZGoKd0SLnQvTbAnOGaKbVSTY2u3yMVYOgYoEN70ZEqv2GOQOxxdNlLUml7d2b66685z2xIR0N4VVOCZMnNtejrSMNtphZeE2dibOlHto6DV6STiAPUrR-vhntcfrNoWaRU5uMcuwARLA4EERm-cg2sA6Hsg6TjGupXkrFxw9VSIUx5Sm07yNpCEjKBmclk" },
               { name: "Ceralas® E", cat: "Laser Chirurgical", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8oZzNHixrM5jbWdGdGlcFwMSQhWWoRNITX3ZQptQPvHfjZk6C-OwwOGGG7ePbpkIidWZwLfWqmBupt0Eu1EFspKD_F_0pLjVed8ZezbrMowOLf9oz519zZiby5LWQA04Fk2aiQPri0vlzV6cZIPljtPvwkqoAE0mPWuQkqyBT_1-vZybhybphw2FU8wwX74121MN55B4THjquW9-BltxRbwcj-x-wdkeZ6II9GLbQHebF4hpV8_rpiuXnHkGHuKjuNEy63fBLzek" },
             ].map((prod, idx) => (
                <div key={idx} className="group bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <div className="aspect-[1/1] p-4 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-t-xl group-hover:opacity-90">
                    <img src={prod.img} alt={prod.name} className="h-full object-contain" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary font-bold uppercase tracking-wide">{prod.cat}</p>
                    <h3 className="mt-1 text-sm font-bold text-slate-900 dark:text-white">{prod.name}</h3>
                  </div>
                </div>
             ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default ProductDetail;