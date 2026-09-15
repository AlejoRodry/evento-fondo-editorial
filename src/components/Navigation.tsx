import React, { useState } from 'react';
import { TabType } from '../types';
import { Hand, Sparkles, Box, LayoutGrid, Maximize2, Camera, Menu, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-between py-4 min-h-[5rem]">
          
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

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-neutral-900 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50 border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools & Mobile Hamburger */}
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
            
            {/* Desktop Fullscreen */}
            <button
              id="fullscreen-toggle-btn"
              onClick={toggleFullScreen}
              title={isFullScreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
              className="hidden md:flex p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleFullScreen}
                title="Pantalla completa"
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-neutral-900 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50 border border-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-950/50' : 'bg-neutral-900'}`}>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className={`text-[10px] font-mono ${isActive ? 'text-cyan-500' : 'text-neutral-500'}`}>
                      {tab.number}
                    </span>
                    <span>{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
