import React from 'react';
import { Layers } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-[#090D18] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Sección 01</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Servicios
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Espacio preparado para detallar los servicios y soluciones digitales.
          </p>
        </div>

        <div className="mt-8 p-10 rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 text-center text-xs font-mono text-slate-500">
          [ Sección Servicios lista para diseñar juntos ]
        </div>
      </div>
    </section>
  );
};
