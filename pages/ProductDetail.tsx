
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <Navigate to="/catalog" />;

  return (
    <div className="animate-in fade-in duration-500">
      {/* Breadcrumb */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-slate-400 hover:text-primary"><span className="material-icons-outlined text-sm">home</span></Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li><Link to="/catalog" className="text-slate-500 dark:text-slate-400 hover:text-primary">Catalog</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li className="text-primary font-bold">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20">
          {/* Images */}
          <div className="flex flex-col gap-6">
            <div className="aspect-w-4 aspect-h-3 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-12 shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square bg-white dark:bg-surface-dark rounded-lg border-2 border-primary p-2">
                <img src={product.image} alt="Thumb" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg p-2 flex items-center justify-center opacity-40">
                <span className="material-icons-outlined text-3xl">play_circle</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-10 lg:mt-0 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white font-serif">{product.name}</h1>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 rounded border border-slate-200 dark:border-slate-700 tracking-widest">
                  {product.brand}
                </span>
              </div>
              <p className="text-xl text-primary font-medium mb-6">Distribuitor Exclusiv în România</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {product.specs && (
              <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">Specificații Tehnice</h3>
                <dl className="grid grid-cols-1 gap-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-slate-50 dark:border-slate-800/50">
                      <dt className="text-sm text-slate-500 dark:text-slate-400">{key}</dt>
                      <dd className="text-sm font-bold text-slate-800 dark:text-white text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all">
                <span className="material-icons-outlined">request_quote</span>
                Solicită Ofertă Personalizată
              </button>
              <button className="flex-1 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <span className="material-icons-outlined">picture_as_pdf</span>
                Broșură Tehnică
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
