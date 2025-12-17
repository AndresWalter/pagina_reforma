import React, { useEffect, useRef } from 'react';
import Carousel from './Carousel';
import { glaciaresInfographics, glaciaresSummary } from '../data';
import { Mountain, Info, BarChart3 } from 'lucide-react';

const GlaciaresView: React.FC = () => {
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
            <div className="flex items-start gap-4 p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl border border-cyan-100 dark:border-cyan-800/30">
                <Mountain className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                    <h2 className="text-lg font-bold text-cyan-900 dark:text-cyan-100 mb-1">Ley de Glaciares</h2>
                    <p className="text-cyan-800 dark:text-cyan-300/80">
                        Un recurso estratégico. Análisis de las reservas de agua dulce de Argentina.
                    </p>
                </div>
            </div>

            <section ref={firstCarouselRef}>
                <div className="flex items-center gap-3 mb-6 px-4 md:px-0">
                    <span className="w-1.5 h-8 bg-cyan-600 rounded-full"></span>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Glaciares Argentinos</h2>
                </div>
                <Carousel items={glaciaresInfographics} id="glaciares-carousel" />
            </section>

            {/* Summary Carousel */}
            <section className="mt-12">
                <div className="flex items-center gap-3 mb-6 px-4 md:px-0">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Resumen Visual y Comparativas</h2>
                </div>
                <Carousel items={glaciaresSummary} id="glaciares-summary-carousel" />
            </section>

            <div className="text-center p-8 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm mt-8">
                <p><strong>Nota:</strong> Estas imágenes ilustran la importancia de los glaciares como reserva de agua.</p>
            </div>
        </div>
    );
};

export default GlaciaresView;
