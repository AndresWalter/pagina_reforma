import React, { useEffect, useRef } from 'react';
import { infographics, summaryInfographics } from '../data';
import { Info } from 'lucide-react';
import Carousel from './Carousel';

const InfographicsView: React.FC = () => {
  const firstCarouselRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to the first carousel after a brief delay to ensure rendering
    const timer = setTimeout(() => {
      firstCarouselRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-16 animate-fadeIn pb-12">
      {/* Introduction */}
      <div className="flex items-start gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30">
        <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
        <div>
          <h2 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-1">Galería Visual</h2>
          <p className="text-blue-800 dark:text-blue-300/80">
            Explora de manera gráfica los principales cambios y contrastes de la reforma laboral.
          </p>
        </div>
      </div>

      {/* Detailed Carousel (Now First) */}
      <section ref={firstCarouselRef}>
        <div className="flex items-center gap-3 mb-6 px-4 md:px-0">
          <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Análisis Detallado</h2>
        </div>
        <Carousel items={infographics} id="detail-carousel" />
      </section>

      {/* Summary Carousel (Now Second) */}
      <section>
        <div className="flex items-center gap-3 mb-6 px-4 md:px-0">
          <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Resumen General</h2>
        </div>
        <Carousel items={summaryInfographics} id="summary-carousel" />
      </section>

      <div className="text-center p-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-900/30 text-amber-800 dark:text-amber-400 text-sm mt-8">
        <p><strong>Nota:</strong> Las infografías son representaciones esquemáticas basadas en la interpretación del proyecto de ley.</p>
      </div>
    </div>
  );
};

export default InfographicsView;