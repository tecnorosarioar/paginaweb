import React from 'react';
import { ArrowRight, Play, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[75vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-violet-600/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Exact Trust Kicker requested by user (Polo Tecnológico removed) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-cyan-400 mb-6">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Facturación AFIP Homologada (Facturas A y B)
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300">React 19 + TypeScript + Cloud SLA 99.9%</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
            Soluciones digitales y software a medida para <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">empresas que no se detienen</span>.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            En <strong>TecnoRosario.AR</strong> no prometemos maquetas estáticas: desarrollamos sistemas web robustos, control de stock con facturación electrónica y automatizaciones con IA que podés <strong>probar en vivo</strong> ahora mismo.
          </p>

          {/* Action CTAs only */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => scrollTo('proyectos')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Probar Sistemas en Vivo</span>
            </button>

            <button
              onClick={() => scrollTo('facturacion')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 rounded-xl transition-all duration-200"
            >
              <span>Cotizador & Panel de Facturación</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
