import React, { useState } from 'react';
import { infographics } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InfographicsView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === infographics.length - 1 ? prev : prev + 1));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Resúmenes Visuales</h2>
        <p className="text-blue-100 dark:text-blue-200 max-w-2xl">
          Gráficos y esquemas para entender rápidamente el impacto de la reforma en tu vida laboral.
        </p>
      </div>

      <div className="relative group max-w-4xl mx-auto">
        <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative">
          {/* Main Image */}
          <div
            className="w-full h-full flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {infographics.map((info) => (
              <div key={info.id} className="min-w-full h-full relative flex items-center justify-center bg-black">
                <img
                  src={info.src}
                  alt={info.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            disabled={currentIndex === infographics.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {infographics.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-all">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {infographics[currentIndex].title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            {infographics[currentIndex].description}
          </p>
          <div className="mt-4 flex justify-between text-sm text-slate-500 dark:text-slate-500">
            <span>{currentIndex + 1} / {infographics.length}</span>
          </div>
        </div>
      </div>
      <div className="text-center p-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-900/30 text-amber-800 dark:text-amber-400 text-sm mt-8">
        <p><strong>Nota:</strong> Las infografías son representaciones esquemáticas basadas en la interpretación del proyecto de ley.</p>
      </div>
    </div>
  );
};

export default InfographicsView;