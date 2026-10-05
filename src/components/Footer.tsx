import React from 'react';
import { Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-slate-800 text-slate-400 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <span>TecnoRosario<span className="text-cyan-400">.AR</span></span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <button onClick={() => scrollTo('servicios')} className="hover:text-cyan-400 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollTo('sobre-nosotros')} className="hover:text-cyan-400 transition-colors">
              Sobre Nosotros
            </button>
            <button onClick={() => scrollTo('proyectos')} className="hover:text-cyan-400 transition-colors">
              Sistemas en Vivo
            </button>
            <button onClick={() => scrollTo('facturacion')} className="hover:text-cyan-400 transition-colors">
              Facturación
            </button>
            <button onClick={() => scrollTo('casos-exito')} className="hover:text-cyan-400 transition-colors">
              Casos de Éxito
            </button>
            <button onClick={() => scrollTo('como-trabajamos')} className="hover:text-cyan-400 transition-colors">
              Cómo Trabajamos
            </button>
            <button onClick={() => scrollTo('faq')} className="hover:text-cyan-400 transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollTo('contacto')} className="hover:text-cyan-400 transition-colors">
              Contacto
            </button>
          </nav>
        </div>

        <div className="pt-6 flex items-center justify-center text-slate-400 text-xs">
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Desarrollado con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>en Rosario, Santa Fe, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
