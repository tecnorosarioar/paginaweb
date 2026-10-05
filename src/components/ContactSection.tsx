import React from 'react';
import { Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-[#070A12] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>Sección 08</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Contacto
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Espacio preparado para el formulario de contacto y canales directos.
          </p>
        </div>

        <div className="mt-8 p-10 rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 text-center text-xs font-mono text-slate-500">
          [ Sección Contacto lista para diseñar juntos ]
        </div>
      </div>
    </section>
  );
};
