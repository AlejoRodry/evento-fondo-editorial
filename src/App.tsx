import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Navigation } from './components/Navigation';
import { NeonGestureTracker } from './components/NeonGestureTracker';
import { WebARPoster } from './components/WebARPoster';
import { HoloGauzeViewer } from './components/HoloGauzeViewer';
import { StandBlueprintGuide } from './components/StandBlueprintGuide';
import { Sparkles, Box, Hand, LayoutGrid, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('gesture');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [hasCameraSupport, setHasCameraSupport] = useState<boolean>(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setHasCameraSupport(true);
    }

    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('Could not activate fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Top Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isFullScreen={isFullScreen}
        toggleFullScreen={toggleFullScreen}
        hasCameraSupport={hasCameraSupport}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 space-y-6 md:space-y-10 overflow-hidden">
        {/* Quick Section Cards Banner */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0">
          <button
            id="quick-nav-gesture"
            onClick={() => setActiveTab('gesture')}
            className={`flex-none w-[280px] md:w-auto snap-center p-4 md:p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
              activeTab === 'gesture'
                ? 'bg-gradient-to-br from-emerald-950/70 to-neutral-900 border-emerald-500/80 shadow-lg shadow-emerald-950/40'
                : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-700/60 text-emerald-400 flex items-center justify-center">
                <Hand className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 font-semibold">
                EN VIVO
              </span>
            </div>
            <div className="mt-2.5">
              <div className="text-xs font-mono text-emerald-400 font-semibold">IDEA 03</div>
              <h3 className="font-bold text-white text-sm">Control Gestual Neón</h3>
              <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                Minority Report con webcam a 60 FPS
              </p>
            </div>
          </button>

          <button
            id="quick-nav-webar"
            onClick={() => setActiveTab('webar')}
            className={`flex-none w-[280px] md:w-auto snap-center p-4 md:p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
              activeTab === 'webar'
                ? 'bg-gradient-to-br from-cyan-950/70 to-neutral-900 border-cyan-500/80 shadow-lg shadow-cyan-950/40'
                : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-700/60 text-cyan-400 flex items-center justify-center">
                <Box className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 font-semibold">
                INTERACTIVO
              </span>
            </div>
            <div className="mt-2.5">
              <div className="text-xs font-mono text-cyan-400 font-semibold">IDEA 02</div>
              <h3 className="font-bold text-white text-sm">Póster WebAR (Sin Apps)</h3>
              <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                Objetos 3D desprendidos del papel
              </p>
            </div>
          </button>

          <button
            id="quick-nav-hologram"
            onClick={() => setActiveTab('hologram')}
            className={`flex-none w-[280px] md:w-auto snap-center p-4 md:p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
              activeTab === 'hologram'
                ? 'bg-gradient-to-br from-indigo-950/70 to-neutral-900 border-indigo-500/80 shadow-lg shadow-indigo-950/40'
                : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-indigo-950 border border-indigo-700/60 text-indigo-400 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 font-semibold">
                PROYECTOR
              </span>
            </div>
            <div className="mt-2.5">
              <div className="text-xs font-mono text-indigo-400 font-semibold">IDEA 01</div>
              <h3 className="font-bold text-white text-sm">Malla Holo-Gauze DIY</h3>
              <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                Avatar flotante a escala real 2-3m
              </p>
            </div>
          </button>

          <button
            id="quick-nav-blueprint"
            onClick={() => setActiveTab('blueprint')}
            className={`flex-none w-[280px] md:w-auto snap-center p-4 md:p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
              activeTab === 'blueprint'
                ? 'bg-gradient-to-br from-purple-950/70 to-neutral-900 border-purple-500/80 shadow-lg shadow-purple-950/40'
                : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-purple-950 border border-purple-700/60 text-purple-400 flex items-center justify-center">
                <LayoutGrid className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 font-semibold">
                PLAN & BOM
              </span>
            </div>
            <div className="mt-2.5">
              <div className="text-xs font-mono text-purple-400 font-semibold">INTEGRACIÓN</div>
              <h3 className="font-bold text-white text-sm">Arquitectura & Costos</h3>
              <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                Distribución espacial y comparativa
              </p>
            </div>
          </button>
        </div>

        {/* Tab View Renderer */}
        {activeTab === 'gesture' && <NeonGestureTracker />}
        {activeTab === 'webar' && <WebARPoster />}
        {activeTab === 'hologram' && <HoloGauzeViewer />}
        {activeTab === 'blueprint' && <StandBlueprintGuide />}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950/80 mt-auto py-5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-neutral-400 gap-3">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-cyan-400 hidden sm:inline-block" />
            <span className="font-mono text-neutral-300">
              Suite Tecnológica para Stands Feriales
            </span>
          </div>
          <div className="flex items-center space-x-4 text-neutral-400 text-center sm:text-right">
            <span>Holo-Gauze • WebAR • Visión Neón</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
