import React from 'react';
import { TabType } from '../types';
import { Hand, Sparkles, Box, LayoutGrid, Maximize2, Camera } from 'lucide-react';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  hasCameraSupport: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  isFullScreen,
  toggleFullScreen,
  hasCameraSupport,
}) => {
  const tabs: { id: TabType; label: string; number: string; icon: React.ComponentType<{ className?: string }> }[] = [
    {
      id: 'gesture',
      number: '03',
      label: 'Control Gestual Neón',
      icon: Hand,
    },
    {
      id: 'webar',
      number: '02',
      label: 'Póster WebAR',
      icon: Box,
    },
    {
      id: 'hologram',
      number: '01',
      label: 'Malla Holo-Gauze',
      icon: Sparkles,
    },
    {
      id: 'blueprint',
      number: 'Plan',
      label: 'Arquitectura del Stand',
      icon: LayoutGrid,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 min-h-[5rem] gap-4">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white text-base tracking-tight">STAND INTERACTIVO</span>
                <span className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-cyan-950 border border-cyan-800 text-cyan-300 rounded">
                  SUITE DIY
                </span>
              </div>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="flex items-center space-x-2 sm:space-x-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center space-x-2 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-neutral-900 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50 border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.number}</span>
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center space-x-2">
            {hasCameraSupport && (
              <div
                title="Soporte de cámara web disponible para seguimiento y AR"
                className="hidden lg:flex items-center space-x-1 px-2.5 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-emerald-400"
              >
                <Camera className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono">Webcam OK</span>
              </div>
            )}
            <button
              id="fullscreen-toggle-btn"
              onClick={toggleFullScreen}
              title={isFullScreen ? 'Salir de pantalla completa' : 'Pantalla completa (Ideal para exposiciones)'}
              className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
