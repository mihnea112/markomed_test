import React from 'react';
import { ChevronRight, Filter, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalog: React.FC = () => {
  const products = [
    {
      id: 1,
      brand: "Ribcap",
      name: "Lenny Grey - Căciulă Protecție",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB_ylpfdz6WugAwmwDpnl0NjBN6yg-k3-hhS9LXYSLMZjBIug53ZkPzroMpH8zFlwlHAzZ6FNr_ZCRMEWCFnimaStxPeZFnfFuSH52e-G2gy4rsU8ECwcxsrnTRCZSfobDqFPl42bJnTPoLyvzCoRsBjIxwMlT5dhZ4HCrcbZ75sEi-AHyXRYJBLINqDKRfsJ-IA31LtYig04Cv-hfjsbI5KuH-4WSOVFIDFf35cBQkpF0nkb5VZku0yn1vHkOVdP9NGHlUfFdNbs",
      price: "650 Lei",
      tag: "Nou",
      tagColor: "bg-red-500",
      sizes: ["S", "M", "L"],
      colors: ["bg-gray-400", "bg-slate-800", "bg-red-700"]
    },
    {
      id: 2,
      brand: "Asclepion",
      name: "MeDioStar Monolith - Laser Diodă",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB8myxBZpPkAft8Hw7ni_ilc3wH8LbPKT_TJT_PFm2vJyudFWRAZrkvom8l0ofj_t-Iu5574xB3SKU0c511NpCrsDI3XBDL7Ay1BOeX6L_DnU00Ngkuo5KGKTit9UbS_dd7p6OVGRmiDHpmjJVN625xj-3-DDJnZwvUIppqUNkliiCw0QYddxnxW38DHVBHn4NR93G2TeXBAI5tTpSszm6ZbR238E8tDo4Hw8osGHQV0Wyssp4K3QqyjN2vUZLGgxZkeXA9kAwiw8",
      desc: "Cel mai rapid și puternic laser diodă pentru epilare definitivă și tratamente vasculare.",
      action: "Cere Ofertă"
    },
    {
      id: 3,
      brand: "Elicina",
      name: "Elicina Eco - Cremă cu Extract Melc",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyf-zN3EicQb6mNssYrvzEeFDucR63YPuXFhyEN6LQCgJD1W7EoVdcvY0ShgB9I765HJBCxSlfRPzYCcPrjv2uaKoiMafOQBxNI9Vtgow0dTvTvaDWr_sa0phOXqjWbH4VaromL1ZI-mq4mXq8Jse5X9xJV__eHFJZyybKVlK_lLHyGQC7oBSilfvKo4SnaAKMcA_LjdXmigwT0Giz0h5ePYBb05Yz9UP9wZUBVr2fVIVgxlWAC8mnOn9oQTgt_oqavNW2zszL42Q",
      price: "178 Lei",
      oldPrice: "210 Lei",
      tag: "-15%",
      tagColor: "bg-green-500"
    },
    {
      id: 4,
      brand: "Ribcap",
      name: "Hardy - Șapcă Protecție",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5C_kpVUTNhBxiEP8nYUXkZzjI3dbdePgLSYIvS_QVTyQVoll3cc57yw8e0W_-_y2m0pfDkLGF0EcGmRyyqpTKChVzmFNEscTfbfYyEWd4gdJOlyTCYdq38oVd_6IcbkjlUkcWS3PQwfqCUAyeNVouJtRbjXyXnqttLVaIfkufAn2mBovnTUgidcdlSKvemNjyXRLeJhBDcyTzsi0Vo8Iul395a_P7ejv-5VD3-A37reRuUAXGkUUOHyhxmCNY-thKbB_p0OQbYNk",
      price: "580 Lei",
      sizes: ["S", "M", "L"],
      colors: ["bg-blue-900", "bg-neutral-400"]
    },
    {
      id: 5,
      brand: "Accesorii",
      name: "Manipul Laser 360°",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmwdihjzSP16fRF4FrFVk3S1233-jcJj7a4OMOSmsMh4xeqVKEgLHPkoaobz62wzVU93WqYCcfSA1ycyx8XQKo1S5geb3bYvC4Y5eHx_wmddHKWs4isXqkoMoW5FpkbStTGRSOpsiQGlqwG3zf-BzQuzsaoSHpms6Wa-LNDhpxnHjt_Mf2Aktt0mLcLJuVylXMjfLlj076DLKujiJSvACnFlRsAq524ArHOwA2ednGFfxiinwblsc5uZCM7ooZMettaj_K9hoER4o",
      price: "3.200 Lei",
      desc: "Accesoriu premium compatibil cu seria MeDioStar."
    },
    {
      id: 6,
      brand: "Invitalis",
      name: "Pernă Ortopedică Vital",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZlO7-YyzvlwC9pV6GybwWhmAbYoWRcMAMvfVciWITpyF_olbfmL2vsE5deSS69C9mrvkYWUB1UM93Gbkzt9QvWs4Tn2pWyZVcVnA9udheRPRqiewMMqyTARRgUIwBp8GxaRG_69m9arCLtMu3UH51vyipufjycm-1XPsR8ae-g8TQ931nmFgyefkNK45XNeBD1eR5zIEQdOFFrNOyjo2I6Si-f2unT42ZVMJfLJGV5uiHGbW25TwA3MaaRqEUYfm9qnuq12hHQCI",
      price: "420 Lei",
      desc: "Suport cervical optim pentru un somn odihnitor."
    }
  ];

  return (
    <div className="animate-fade-in min-h-screen bg-slate-50 dark:bg-background-dark pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 mb-8">
        <div className="max-w-7xl mx-auto px-6 py-3">
           <nav className="flex text-sm text-slate-500 dark:text-slate-400">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><span className="hover:text-primary cursor-pointer">Catalog</span></li>
              <li><ChevronRight size={14} /></li>
              <li><span className="text-slate-900 dark:text-white font-medium">Toate Produsele</span></li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Catalog de Produse</h1>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2 rounded-full bg-primary text-white font-medium shadow-sm hover:bg-teal-700 transition">Toate</button>
            {['Lasere Medicale', 'Ribcap', 'Elicina', 'Invitalis'].map(cat => (
              <button key={cat} className="px-5 py-2 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium shadow-sm hover:border-primary hover:text-primary transition">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg text-slate-900 dark:text-white">Filtre</h2>
                <button className="text-xs text-primary hover:underline">Reset</button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Furnizor</h3>
                  <div className="space-y-2">
                    {['Asclepion', 'Ribcap', 'Elicina', 'Invitalis'].map((brand, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked={brand === 'Ribcap'} className="rounded text-primary border-slate-300 focus:ring-primary h-4 w-4" />
                        <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-primary transition">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Categorie</h3>
                  <div className="space-y-2">
                    {['Dermatologie', 'Chirurgie', 'Protecție Craniană', 'Cosmetică'].map((cat, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked={cat === 'Protecție Craniană'} className="rounded text-primary border-slate-300 focus:ring-primary h-4 w-4" />
                        <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-primary transition">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Preț (RON)</h3>
                  <div className="flex items-center gap-2">
                    <input type="number" placeholder="Min" className="w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm py-2 px-3 focus:ring-primary focus:border-primary" />
                    <span className="text-slate-400">-</span>
                    <input type="number" placeholder="Max" className="w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm py-2 px-3 focus:ring-primary focus:border-primary" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-slate-500 dark:text-slate-400">Arată <strong>6</strong> din <strong>42</strong> produse</span>
              <select className="rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 text-sm focus:ring-primary focus:border-primary py-2 pl-3 pr-10 shadow-sm cursor-pointer">
                <option>Relevanță</option>
                <option>Preț: Mic la Mare</option>
                <option>Preț: Mare la Mic</option>
                <option>Noutăți</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col overflow-hidden">
                  
                  {/* Product Image */}
                  <div className="relative h-64 bg-slate-100 dark:bg-slate-800 overflow-hidden p-4 flex items-center justify-center">
                    {product.tag && (
                      <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider`}>
                        {product.tag}
                      </span>
                    )}
                    <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal" 
                      />
                    </Link>
                  </div>

                  {/* Product Details */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wide">{product.brand}</div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight hover:text-primary transition-colors">{product.name}</h3>
                    </Link>

                    {product.sizes && (
                      <div className="mt-2 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400">Mărime:</span>
                          <div className="flex gap-1">
                            {product.sizes.map(size => (
                              <span key={size} className={`w-6 h-6 rounded border ${size === 'M' ? 'border-primary bg-primary text-white' : 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300'} text-[10px] flex items-center justify-center cursor-pointer`}>{size}</span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400">Culoare:</span>
                          <div className="flex gap-1">
                            {product.colors?.map(color => (
                              <span key={color} className={`w-5 h-5 rounded-full ${color} border-2 border-white dark:border-slate-700 shadow-sm cursor-pointer hover:ring-1 hover:ring-primary`}></span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {product.desc && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{product.desc}</p>
                    )}

                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-700">
                      {product.action ? (
                        <>
                          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{product.action}</span>
                          <button className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition">Detalii</button>
                        </>
                      ) : (
                        <>
                          <div>
                            {product.oldPrice && <span className="text-xs text-slate-400 line-through block">{product.oldPrice}</span>}
                            <span className="text-xl font-bold text-slate-900 dark:text-white">{product.price}</span>
                          </div>
                          <button className="bg-primary hover:bg-teal-700 text-white p-2 rounded-lg transition shadow-md shadow-primary/20">
                            <ShoppingCart size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary hover:border-primary transition disabled:opacity-50">
                  <ChevronRight size={16} className="rotate-180" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary text-white font-medium shadow-md shadow-primary/30">1</button>
                <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary hover:text-primary transition">2</button>
                <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary hover:text-primary transition">3</button>
                <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary hover:border-primary transition">
                  <ChevronRight size={16} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;