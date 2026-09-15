import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ColorRange, TrackingPoint } from '../types';
import { playSciFiSound } from '../utils/audio';
import {
  Camera,
  CameraOff,
  Crosshair,
  Sliders,
  Sparkles,
  Info,
  ChevronLeft,
  ChevronRight,
  Hand,
  Lightbulb,
  Layers,
  Cpu,
  RefreshCw,
  RotateCcw,
  Zap,
} from 'lucide-react';

const COLOR_PRESETS: ColorRange[] = [
  {
    name: 'Verde Lima Neón',
    colorHex: '#39FF14',
    hMin: 70,
    hMax: 155,
    sMin: 0.35,
    sMax: 1.0,
    vMin: 0.35,
    vMax: 1.0,
  },
  {
    name: 'Fucsia / Rosa Neón',
    colorHex: '#FF007F',
    hMin: 295,
    hMax: 345,
    sMin: 0.35,
    sMax: 1.0,
    vMin: 0.35,
    vMax: 1.0,
  },
  {
    name: 'Naranja Chillón',
    colorHex: '#FF5F00',
    hMin: 10,
    hMax: 38,
    sMin: 0.5,
    sMax: 1.0,
    vMin: 0.45,
    vMax: 1.0,
  },
  {
    name: 'Azul Neón / Cian',
    colorHex: '#00F0FF',
    hMin: 175,
    hMax: 215,
    sMin: 0.4,
    sMax: 1.0,
    vMin: 0.4,
    vMax: 1.0,
  },
];

// Helper: RGB to HSV
function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s, v];
}

export const NeonGestureTracker: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const hudContainerRef = useRef<HTMLDivElement | null>(null);

  // States
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [simulationMode, setSimulationMode] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<ColorRange>(COLOR_PRESETS[0]);
  const [minPixelsThreshold, setMinPixelsThreshold] = useState<number>(35);
  const [fps, setFps] = useState<number>(0);
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [showHardwareGuide, setShowHardwareGuide] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isEyedropperActive, setIsEyedropperActive] = useState<boolean>(false);

  // Interactive slide states
  const [standLights, setStandLights] = useState({ uvLight: true, ambientAudio: true, spotLight: false });
  const [holoRotation, setHoloRotation] = useState<{ x: number; y: number }>({ x: 15, y: 30 });

  // Tracking references (kept in refs for 60fps animation loop)
  const trackingPointRef = useRef<TrackingPoint>({ x: 0.5, y: 0.5, radius: 20, detected: false, rawCount: 0 });
  const trailRef = useRef<{ x: number; y: number; time: number }[]>([]);
  const lastGestureCheckTime = useRef<number>(Date.now());
  const lastXRef = useRef<number>(0.5);
  const dwellStartTime = useRef<number | null>(null);
  const dwellTargetId = useRef<string | null>(null);
  const [dwellProgress, setDwellProgress] = useState<number>(0);

  // Stop camera stream
  const stopCamera = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  }, []);

  // Start webcam
  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user',
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCameraActive(true);
        setSimulationMode(false);
        playSciFiSound('holo_power');
      }
    } catch (err: unknown) {
      console.warn('Camera access denied or unavailable:', err);
      setCameraError('No se pudo acceder a la webcam. Puedes usar el "Modo Simulación" con mouse o pantalla táctil.');
      setSimulationMode(true);
    }
  };

  // Switch slides
  const nextSlide = useCallback(() => {
    playSciFiSound('swipe');
    setActiveSlide((prev) => (prev + 1) % 4);
  }, []);

  const prevSlide = useCallback(() => {
    playSciFiSound('swipe');
    setActiveSlide((prev) => (prev - 1 + 4) % 4);
  }, []);

  // Eyedropper click on video to sample custom wristband color
  const handleSampleColor = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isEyedropperActive) return;
    const canvas = overlayCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const clickY = ((event.clientY - rect.top) / rect.height) * canvas.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const pixel = ctx.getImageData(Math.floor(clickX), Math.floor(clickY), 1, 1).data;
      const [h, s, v] = rgbToHsv(pixel[0], pixel[1], pixel[2]);

      const customRange: ColorRange = {
        name: `Muestra (${Math.round(h)}° HSV)`,
        colorHex: `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`,
        hMin: Math.max(0, Math.round(h - 25)),
        hMax: Math.min(360, Math.round(h + 25)),
        sMin: Math.max(0.2, s - 0.25),
        sMax: 1.0,
        vMin: Math.max(0.2, v - 0.25),
        vMax: 1.0,
      };

      setActivePreset(customRange);
      setIsEyedropperActive(false);
      playSciFiSound('calibrate');
    } catch (e) {
      console.error('Error sampling color:', e);
    }
  };

  // Main Tracking Loop
  useEffect(() => {
    let animationFrameId: number;
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const processFrame = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastFpsUpdate >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = now;
      }

      if (cameraActive && videoRef.current && canvasRef.current && overlayCanvasRef.current) {
        const video = videoRef.current;
        const procCanvas = canvasRef.current;
        const overlayCanvas = overlayCanvasRef.current;

        if (video.readyState >= 2) {
          const width = 240; // Downsample for 60fps ultralight vision
          const height = 180;
          procCanvas.width = width;
          procCanvas.height = height;
          overlayCanvas.width = width;
          overlayCanvas.height = height;

          const pCtx = procCanvas.getContext('2d', { willReadFrequently: true });
          const oCtx = overlayCanvas.getContext('2d');

          if (pCtx && oCtx) {
            // Draw video to processing canvas (mirrored horizontally for natural hand interaction)
            pCtx.save();
            pCtx.scale(-1, 1);
            pCtx.drawImage(video, -width, 0, width, height);
            pCtx.restore();

            const imgData = pCtx.getImageData(0, 0, width, height);
            const data = imgData.data;

            let sumX = 0;
            let sumY = 0;
            let matchCount = 0;
            let minX = width;
            let maxX = 0;
            let minY = height;
            let maxY = 0;

            const { hMin, hMax, sMin, sMax, vMin, vMax } = activePreset;

            // Step by 2 pixels for performance (120x90 checks = 10,800 operations, instant on CPU!)
            for (let y = 0; y < height; y += 2) {
              for (let x = 0; x < width; x += 2) {
                const idx = (y * width + x) * 4;
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];

                // Fast pre-filter: neon colors have distinctive channels
                const [h, s, v] = rgbToHsv(r, g, b);

                const hMatch =
                  hMin <= hMax ? h >= hMin && h <= hMax : h >= hMin || h <= hMax; // Handles wraparound for reds/magentas

                if (hMatch && s >= sMin && s <= sMax && v >= vMin && v <= vMax) {
                  sumX += x;
                  sumY += y;
                  matchCount++;
                  if (x < minX) minX = x;
                  if (x > maxX) maxX = x;
                  if (y < minY) minY = y;
                  if (y > maxY) maxY = y;
                }
              }
            }

            // Draw clean camera preview to overlay canvas
            oCtx.drawImage(procCanvas, 0, 0, width, height);

            if (matchCount >= minPixelsThreshold) {
              const rawCenterX = sumX / matchCount;
              const rawCenterY = sumY / matchCount;

              // Normalized coordinates (0 to 1)
              const normX = rawCenterX / width;
              const normY = rawCenterY / height;

              // Lerp smoothing (70% current, 30% previous)
              const prev = trackingPointRef.current;
              const smoothX = prev.detected ? prev.x * 0.35 + normX * 0.65 : normX;
              const smoothY = prev.detected ? prev.y * 0.35 + normY * 0.65 : normY;

              const boxWidth = maxX - minX;
              const boxHeight = maxY - minY;
              const radius = Math.max(12, Math.min(45, (boxWidth + boxHeight) / 4));

              trackingPointRef.current = {
                x: smoothX,
                y: smoothY,
                radius,
                detected: true,
                rawCount: matchCount,
              };

              // Record motion trail
              trailRef.current.push({ x: smoothX, y: smoothY, time: Date.now() });
              if (trailRef.current.length > 20) {
                trailRef.current.shift();
              }

              // Render detection box & centroid on camera monitor
              oCtx.strokeStyle = activePreset.colorHex;
              oCtx.lineWidth = 2;
              oCtx.strokeRect(minX, minY, boxWidth, boxHeight);

              oCtx.beginPath();
              oCtx.arc(smoothX * width, smoothY * height, 8, 0, Math.PI * 2);
              oCtx.fillStyle = activePreset.colorHex;
              oCtx.shadowColor = activePreset.colorHex;
              oCtx.shadowBlur = 10;
              oCtx.fill();

              // Swipe Detection Algorithm
              const currentTime = Date.now();
              const timeDiff = currentTime - lastGestureCheckTime.current;
              if (timeDiff > 120) {
                const deltaX = smoothX - lastXRef.current;
                // Velocity threshold: fast hand swing
                if (Math.abs(deltaX) > 0.28) {
                  if (deltaX > 0) {
                    nextSlide();
                  } else {
                    prevSlide();
                  }
                  lastGestureCheckTime.current = currentTime + 400; // Cooldown
                }
                lastXRef.current = smoothX;
              }

              // 3D Object Rotation by Hand
              if (activeSlide === 1) {
                setHoloRotation((rot) => ({
                  x: (smoothY - 0.5) * 80,
                  y: rot.y + (smoothX - 0.5) * 6,
                }));
              }
            } else {
              trackingPointRef.current.detected = false;
              if (trailRef.current.length > 0) {
                trailRef.current.shift();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(processFrame);
    };

    animationFrameId = requestAnimationFrame(processFrame);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cameraActive, activePreset, minPixelsThreshold, activeSlide, nextSlide, prevSlide]);

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  // Mouse / Touch Simulation when camera is off or requested
  const handleHudMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!simulationMode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    trackingPointRef.current = {
      x,
      y,
      radius: 20,
      detected: true,
      rawCount: 150,
    };

    trailRef.current.push({ x, y, time: Date.now() });
    if (trailRef.current.length > 15) {
      trailRef.current.shift();
    }

    if (activeSlide === 1) {
      setHoloRotation((rot) => ({
        x: (y - 0.5) * 60,
        y: rot.y + (x - 0.5) * 4,
      }));
    }
  };

  // Dwell Click Engine: check if hand hover is over an interactive button
  useEffect(() => {
    const interval = setInterval(() => {
      const pt = trackingPointRef.current;
      if (!pt.detected || !hudContainerRef.current) {
        setDwellProgress(0);
        dwellStartTime.current = null;
        dwellTargetId.current = null;
        return;
      }

      const hudRect = hudContainerRef.current.getBoundingClientRect();
      const screenX = hudRect.left + pt.x * hudRect.width;
      const screenY = hudRect.top + pt.y * hudRect.height;

      const elementUnder = document.elementFromPoint(screenX, screenY);
      const interactiveTarget = elementUnder?.closest('[data-gesture-target="true"]') as HTMLElement | null;

      if (interactiveTarget) {
        const targetId = interactiveTarget.id || 'unnamed-target';
        if (dwellTargetId.current !== targetId) {
          dwellTargetId.current = targetId;
          dwellStartTime.current = Date.now();
          playSciFiSound('hover');
        } else if (dwellStartTime.current) {
          const elapsed = Date.now() - dwellStartTime.current;
          const progress = Math.min(100, (elapsed / 900) * 100);
          setDwellProgress(progress);

          if (progress >= 100) {
            // Trigger click!
            playSciFiSound('select');
            interactiveTarget.click();
            dwellStartTime.current = Date.now() + 600; // brief cooldown
            setDwellProgress(0);
          }
        }
      } else {
        dwellTargetId.current = null;
        dwellStartTime.current = null;
        setDwellProgress(0);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const currentPt = trackingPointRef.current;

  return (
    <div className="space-y-6">
      {/* Top Banner / Concept Description */}
      <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                Módulo 3: Visión por Computador a 60 FPS
              </span>
              <span className="text-xs text-neutral-400 font-mono">HTML5 Canvas + tracking.js / HSV</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Control Gestual en el Aire con Pulsera Neón
            </h2>
            <p className="text-sm text-neutral-300 mt-1 max-w-3xl">
              Sistema tipo <strong className="text-cyan-400">Minority Report</strong> para presentaciones en vivo.
              Detecta el color fluorescente de una pulsera de silicona deportiva frente a una webcam estándar,
              permitiendo pasar diapositivas, manipular hologramas 3D y activar botones sin tocar la pantalla y sin GPU costosa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {!cameraActive ? (
              <button
                id="btn-start-camera"
                onClick={startCamera}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-sm shadow-lg shadow-emerald-900/30 transition active:scale-95 cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                <span>Encender Webcam y Rastrear</span>
              </button>
            ) : (
              <button
                id="btn-stop-camera"
                onClick={stopCamera}
                className="flex items-center space-x-2 px-3.5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium border border-neutral-700 transition cursor-pointer"
              >
                <CameraOff className="w-4 h-4 text-red-400" />
                <span>Apagar Cámara</span>
              </button>
            )}

            <button
              id="btn-toggle-simulation"
              onClick={() => {
                setSimulationMode(!simulationMode);
                if (cameraActive) stopCamera();
              }}
              className={`flex items-center space-x-1.5 px-3 py-2.5 rounded-lg text-sm font-medium border transition cursor-pointer ${
                simulationMode
                  ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              <Hand className="w-4 h-4" />
              <span>{simulationMode ? 'Simulador Mouse ACTIVO' : 'Simular con Mouse'}</span>
            </button>

            <button
              id="btn-toggle-guide"
              onClick={() => setShowHardwareGuide(!showHardwareGuide)}
              className="flex items-center space-x-1.5 px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-sm transition cursor-pointer"
            >
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Ferretería & Utilería DIY</span>
            </button>
          </div>
        </div>

        {cameraError && (
          <div className="mt-3 p-3 bg-amber-950/40 border border-amber-800/60 rounded-lg text-xs text-amber-300 flex items-center justify-between">
            <span>{cameraError}</span>
            <button
              onClick={() => setSimulationMode(true)}
              className="underline font-semibold ml-2 hover:text-white"
            >
              Activar simulación con mouse
            </button>
          </div>
        )}
      </div>

      {/* Hardware Guide Drawer / Accordion */}
      {showHardwareGuide && (
        <div className="bg-neutral-900/90 border border-amber-900/50 rounded-xl p-6 text-sm space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="font-semibold text-amber-300 flex items-center space-x-2">
              <Lightbulb className="w-4 h-4" />
              <span>Lista de Materiales y Ajustes para el Stand</span>
            </h3>
            <span className="text-xs text-neutral-400">Costo aproximado total: $15 - $35 USD</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neutral-950/70 p-3.5 rounded-lg border border-neutral-800 space-y-1.5">
              <span className="font-semibold text-white text-xs uppercase tracking-wider text-emerald-400">
                1. Pulsera de Silicona Neón
              </span>
              <p className="text-xs text-neutral-300">
                Usa pulseras de goma para eventos o corredores en verde lima (#39FF14) o fucsia. El material de silicona mate no genera reflejos especulares de focos de feria.
              </p>
            </div>
            <div className="bg-neutral-950/70 p-3.5 rounded-lg border border-neutral-800 space-y-1.5">
              <span className="font-semibold text-white text-xs uppercase tracking-wider text-cyan-400">
                2. Webcam USB 1080p
              </span>
              <p className="text-xs text-neutral-300">
                Colocada en trípode a la altura del pecho o montada en la parte superior del monitor de 55&quot;. Conéctala al puerto USB directo de la laptop.
              </p>
            </div>
            <div className="bg-neutral-950/70 p-3.5 rounded-lg border border-neutral-800 space-y-1.5">
              <span className="font-semibold text-white text-xs uppercase tracking-wider text-purple-400">
                3. Secreto Pro: Foco Luz Negra (UV)
              </span>
              <p className="text-xs text-neutral-300">
                Un pequeño proyector LED de luz UV (395nm, 10W-20W) apuntando a la zona del expositor hace que la pulsera emita fluorescencia pura, eliminando el 100% del ruido de fondo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Workspace: Minority Report HUD and Camera Monitor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left / Center Area: The Holographic Presentation Stage (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <div
            ref={hudContainerRef}
            id="minority-report-stage"
            onMouseMove={handleHudMouseMove}
            className="relative h-[480px] sm:h-[520px] w-full rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl select-none"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.08) 0%, rgba(10, 10, 10, 0.95) 75%)',
            }}
          >
            {/* Sci-Fi Ambient Grid & Markers */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293718_1px,transparent_1px),linear-gradient(to_bottom,#1f293718_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="absolute top-4 left-4 flex items-center space-x-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                MINORITY REPORT HUD // GESTURE INTERFACE v3.2
              </span>
            </div>

            {/* Slide indicators and Next/Prev gesture targets */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 z-20">
              <button
                id="btn-gesture-prev"
                data-gesture-target="true"
                onClick={prevSlide}
                className="px-2.5 py-1 rounded bg-neutral-900/80 border border-neutral-700 text-xs text-neutral-300 hover:text-cyan-400 hover:border-cyan-500 transition flex items-center space-x-1 cursor-pointer"
                title="Gesto: Mueve la mano rápidamente hacia la izquierda"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Swipe Izq</span>
              </button>
              <span className="text-xs font-mono text-neutral-400 px-1">
                {activeSlide + 1} / 4
              </span>
              <button
                id="btn-gesture-next"
                data-gesture-target="true"
                onClick={nextSlide}
                className="px-2.5 py-1 rounded bg-neutral-900/80 border border-neutral-700 text-xs text-neutral-300 hover:text-cyan-400 hover:border-cyan-500 transition flex items-center space-x-1 cursor-pointer"
                title="Gesto: Mueve la mano rápidamente hacia la derecha"
              >
                <span>Swipe Der</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* SLIDE 0: Stand Technology Overview Cards */}
            {activeSlide === 0 && (
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Diapositiva 1 • Catálogo Holográfico</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Soluciones Interactivas de Próxima Generación
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Mantén la pulsera o el cursor sobre cualquier tarjeta por 0.8s para seleccionar con <strong className="text-cyan-300">Dwell-Click</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div
                    id="card-hologauge"
                    data-gesture-target="true"
                    onClick={() => playSciFiSound('select')}
                    className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-cyan-500/80 hover:bg-cyan-950/30 transition-all cursor-pointer group relative overflow-hidden"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-900/40 text-cyan-400 flex items-center justify-center mb-2">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-white text-sm group-hover:text-cyan-300">
                      Holo-Gauze DIY
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Proyección de avatar 2.5m sobre tul oscuro con fondo #000000 puro.
                    </p>
                    <div className="mt-3 text-[10px] font-mono text-cyan-400 flex items-center space-x-1">
                      <span>VER DETALLES</span>
                      <span>→</span>
                    </div>
                  </div>

                  <div
                    id="card-webar"
                    data-gesture-target="true"
                    onClick={() => playSciFiSound('select')}
                    className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/80 hover:bg-emerald-950/30 transition-all cursor-pointer group relative overflow-hidden"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/40 text-emerald-400 flex items-center justify-center mb-2">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-white text-sm group-hover:text-emerald-300">
                      Póster WebAR
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Cero apps que instalar. Modelos 3D flotantes con MindAR & Three.js.
                    </p>
                    <div className="mt-3 text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                      <span>VER DETALLES</span>
                      <span>→</span>
                    </div>
                  </div>

                  <div
                    id="card-vision"
                    data-gesture-target="true"
                    onClick={() => playSciFiSound('select')}
                    className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-purple-500/80 hover:bg-purple-950/30 transition-all cursor-pointer group relative overflow-hidden"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-900/40 text-purple-400 flex items-center justify-center mb-2">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-white text-sm group-hover:text-purple-300">
                      Visión Neón 60 FPS
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Control por color HSV ultraligero sin sobrecargar la CPU del stand.
                    </p>
                    <div className="mt-3 text-[10px] font-mono text-purple-400 flex items-center space-x-1">
                      <span>VER DETALLES</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 1: 3D Hologram Rotation Controlled by Hand */}
            {activeSlide === 1 && (
              <div className="absolute inset-0 p-8 flex flex-col justify-between items-center text-center">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Diapositiva 2 • Manipulación Espacial</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Manipulación 3D en Tiempo Real
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Mueve la mano en el aire para rotar el hipercubo holográfico en los ejes X e Y.
                  </p>
                </div>

                {/* 3D Wireframe Box Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center [perspective:800px]">
                  <div
                    className="relative w-32 h-32 [transform-style:preserve-3d] transition-transform duration-75"
                    style={{
                      transform: `rotateX(${holoRotation.x}deg) rotateY(${holoRotation.y}deg)`,
                    }}
                  >
                    {/* 6 faces of the holographic cube */}
                    {[
                      { transform: 'translateZ(64px)', border: 'border-cyan-400', label: 'STAND' },
                      { transform: 'rotateY(180deg) translateZ(64px)', border: 'border-emerald-400', label: '60 FPS' },
                      { transform: 'rotateY(-90deg) translateZ(64px)', border: 'border-purple-400', label: 'NEÓN' },
                      { transform: 'rotateY(90deg) translateZ(64px)', border: 'border-amber-400', label: 'AR' },
                      { transform: 'rotateX(90deg) translateZ(64px)', border: 'border-cyan-300', label: 'HOLO' },
                      { transform: 'rotateX(-90deg) translateZ(64px)', border: 'border-blue-400', label: 'WEBAR' },
                    ].map((face, i) => (
                      <div
                        key={i}
                        className={`absolute inset-0 border-2 ${face.border} bg-cyan-950/20 backdrop-blur-xs flex items-center justify-center text-xs font-mono font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]`}
                        style={{ transform: face.transform }}
                      >
                        {face.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    id="btn-reset-rotation"
                    data-gesture-target="true"
                    onClick={() => setHoloRotation({ x: 15, y: 30 })}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 hover:text-white flex items-center space-x-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Ángulo</span>
                  </button>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Rotación X: {Math.round(holoRotation.x)}° | Y: {Math.round(holoRotation.y)}°
                  </span>
                </div>
              </div>
            )}

            {/* SLIDE 2: Stand Automation Switches */}
            {activeSlide === 2 && (
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-center">
                <div className="mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Diapositiva 3 • Consola de Operaciones</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Control de Iluminación y Efectos del Stand
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Pasa la pulsera sobre los interruptores para encender o apagar componentes en vivo.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    id="toggle-uv-light"
                    data-gesture-target="true"
                    onClick={() => {
                      setStandLights((s) => ({ ...s, uvLight: !s.uvLight }));
                      playSciFiSound('select');
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      standLights.uvLight
                        ? 'bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-900/30'
                        : 'bg-neutral-900/70 border-neutral-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Zap className={`w-5 h-5 ${standLights.uvLight ? 'text-purple-400' : 'text-neutral-500'}`} />
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          standLights.uvLight ? 'bg-purple-900 text-purple-200' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {standLights.uvLight ? 'ACTIVO' : 'APAGADO'}
                      </span>
                    </div>
                    <div className="font-semibold text-white text-sm mt-3">Luz Negra UV (395nm)</div>
                    <p className="text-xs text-neutral-400 mt-1">Excitación de pigmento fluorescente</p>
                  </button>

                  <button
                    id="toggle-ambient-audio"
                    data-gesture-target="true"
                    onClick={() => {
                      setStandLights((s) => ({ ...s, ambientAudio: !s.ambientAudio }));
                      playSciFiSound('select');
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      standLights.ambientAudio
                        ? 'bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-900/30'
                        : 'bg-neutral-900/70 border-neutral-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Sparkles className={`w-5 h-5 ${standLights.ambientAudio ? 'text-cyan-400' : 'text-neutral-500'}`} />
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          standLights.ambientAudio ? 'bg-cyan-900 text-cyan-200' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {standLights.ambientAudio ? 'ACTIVO' : 'MUTED'}
                      </span>
                    </div>
                    <div className="font-semibold text-white text-sm mt-3">Feedback Auditivo Sci-Fi</div>
                    <p className="text-xs text-neutral-400 mt-1">Sonidos sintetizados Web Audio API</p>
                  </button>

                  <button
                    id="toggle-spot-light"
                    data-gesture-target="true"
                    onClick={() => {
                      setStandLights((s) => ({ ...s, spotLight: !s.spotLight }));
                      playSciFiSound('select');
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      standLights.spotLight
                        ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-900/30'
                        : 'bg-neutral-900/70 border-neutral-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Lightbulb className={`w-5 h-5 ${standLights.spotLight ? 'text-amber-400' : 'text-neutral-500'}`} />
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          standLights.spotLight ? 'bg-amber-900 text-amber-200' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {standLights.spotLight ? 'ACTIVO' : 'APAGADO'}
                      </span>
                    </div>
                    <div className="font-semibold text-white text-sm mt-3">Foco Recorte Holo</div>
                    <p className="text-xs text-neutral-400 mt-1">Luz lateral para contorno de avatar</p>
                  </button>
                </div>
              </div>
            )}

            {/* SLIDE 3: Live Expo Analytics Gauge */}
            {activeSlide === 3 && (
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Diapositiva 4 • Métricas de Audiencia</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Telemetría del Stand en Vivo
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Estadísticas generadas por las interacciones gestuales de los visitantes.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl">
                    <span className="text-[11px] text-neutral-400 uppercase font-mono">Personas Atraídas</span>
                    <div className="text-2xl font-bold text-white mt-1">1,482</div>
                    <span className="text-[10px] text-emerald-400">+34% vs stand tradicional</span>
                  </div>

                  <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl">
                    <span className="text-[11px] text-neutral-400 uppercase font-mono">Tiempo en Stand</span>
                    <div className="text-2xl font-bold text-cyan-400 mt-1">4m 12s</div>
                    <span className="text-[10px] text-cyan-400">Alto engagement</span>
                  </div>

                  <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl">
                    <span className="text-[11px] text-neutral-400 uppercase font-mono">Tasa de Escaneo AR</span>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">68.4%</div>
                    <span className="text-[10px] text-emerald-400">Póster interactivo</span>
                  </div>

                  <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl">
                    <span className="text-[11px] text-neutral-400 uppercase font-mono">Rendimiento CPU</span>
                    <div className="text-2xl font-bold text-purple-400 mt-1">{fps} FPS</div>
                    <span className="text-[10px] text-purple-400">Visión ultraligera</span>
                  </div>
                </div>
              </div>
            )}

            {/* Glowing Holographic Cursor & Motion Trail */}
            {currentPt.detected && (
              <div
                className="absolute pointer-events-none transition-transform duration-75 ease-out z-30"
                style={{
                  left: `${currentPt.x * 100}%`,
                  top: `${currentPt.y * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Laser Reticle */}
                <div className="relative flex items-center justify-center">
                  {/* Dwell Progress Circle */}
                  {dwellProgress > 0 && (
                    <svg className="w-16 h-16 absolute -inset-2 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="26"
                        stroke="#22d3ee"
                        strokeWidth="3"
                        fill="transparent"
                        strokeDasharray="163.36"
                        strokeDashoffset={`${163.36 - (163.36 * dwellProgress) / 100}`}
                        className="transition-all duration-75"
                      />
                    </svg>
                  )}

                  <div className="w-10 h-10 rounded-full border-2 border-cyan-400/90 shadow-[0_0_15px_#22d3ee] flex items-center justify-center bg-cyan-500/15 backdrop-blur-xs">
                    <Crosshair className="w-4 h-4 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
                  </div>

                  {/* Directional ticks */}
                  <div className="absolute -top-3 w-0.5 h-2 bg-cyan-400" />
                  <div className="absolute -bottom-3 w-0.5 h-2 bg-cyan-400" />
                  <div className="absolute -left-3 h-0.5 w-2 bg-cyan-400" />
                  <div className="absolute -right-3 h-0.5 w-2 bg-cyan-400" />
                </div>
              </div>
            )}

            {/* Simulation hint */}
            {simulationMode && (
              <div className="absolute bottom-4 left-4 pointer-events-none px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-700 text-xs text-cyan-300 font-mono flex items-center space-x-2">
                <Hand className="w-3.5 h-3.5" />
                <span>Simulador Activo: Mueve el mouse sobre este escenario para controlar el HUD</span>
              </div>
            )}
          </div>

          {/* Slide Navigation Dots */}
          <div className="flex items-center justify-center space-x-2">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  playSciFiSound('hover');
                  setActiveSlide(idx);
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx ? 'w-8 bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Area: Real-Time Computer Vision Monitor & Calibration (4 cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center space-x-2">
                <Crosshair className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-white text-sm">Monitor de Visión</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                    currentPt.detected
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {currentPt.detected ? 'OBJETO RASTREADO' : 'BUSCANDO NEÓN'}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-1.5 py-0.5 rounded">
                  {fps} FPS
                </span>
              </div>
            </div>

            {/* Video Preview & Canvas Overlay */}
            <div className="relative aspect-[4/3] bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 flex items-center justify-center">
              {/* Offscreen video & hidden processing canvas */}
              <video ref={videoRef} className="hidden" playsInline muted autoPlay />
              <canvas ref={canvasRef} className="hidden" />

              {/* Real-time overlay canvas */}
              {cameraActive ? (
                <canvas
                  ref={overlayCanvasRef}
                  onClick={handleSampleColor}
                  className={`w-full h-full object-cover ${isEyedropperActive ? 'cursor-crosshair' : ''}`}
                />
              ) : (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-300 font-medium">Cámara web inactiva</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Enciende la cámara o usa el modo de simulación táctil.
                    </p>
                  </div>
                  <button
                    onClick={startCamera}
                    className="px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition cursor-pointer"
                  >
                    Activar Cámara
                  </button>
                </div>
              )}

              {/* Eyedropper status indicator */}
              {isEyedropperActive && (
                <div className="absolute top-2 left-2 right-2 p-1.5 bg-cyan-950/90 border border-cyan-500 text-cyan-200 text-[10px] font-medium text-center rounded backdrop-blur-xs">
                  Haz clic sobre la pulsera u objeto en el video para capturar su color exacto
                </div>
              )}
            </div>

            {/* Color Presets Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-300">
                <span className="font-medium">Color de la Pulsera:</span>
                {cameraActive && (
                  <button
                    onClick={() => setIsEyedropperActive(!isEyedropperActive)}
                    className={`text-[11px] px-2 py-0.5 rounded border transition cursor-pointer ${
                      isEyedropperActive
                        ? 'bg-cyan-500 text-black font-bold border-cyan-400'
                        : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:text-white'
                    }`}
                  >
                    Pipeta (Muestrear)
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {COLOR_PRESETS.map((preset) => {
                  const isSelected = activePreset.name === preset.name;
                  return (
                    <button
                      key={preset.name}
                      onClick={() => {
                        setActivePreset(preset);
                        playSciFiSound('calibrate');
                      }}
                      className={`flex items-center space-x-2 px-2.5 py-2 rounded-lg border text-left text-xs transition cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-800 border-cyan-500 text-white shadow-xs'
                          : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: preset.colorHex }}
                      />
                      <span className="truncate">{preset.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Threshold & Fine Tuning Toggle */}
            <div className="pt-2 border-t border-neutral-800">
              <button
                onClick={() => setShowConfig(!showConfig)}
                className="w-full flex items-center justify-between text-xs text-neutral-400 hover:text-neutral-200 transition cursor-pointer"
              >
                <span className="flex items-center space-x-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Ajuste Fino de Rango HSV</span>
                </span>
                <span>{showConfig ? 'Ocultar' : 'Ajustar'}</span>
              </button>

              {showConfig && (
                <div className="mt-3 space-y-3 bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-xs">
                  <div>
                    <div className="flex justify-between text-neutral-400 mb-1">
                      <span>Sensibilidad / Píxeles Mínimos</span>
                      <span className="font-mono text-cyan-400">{minPixelsThreshold} px</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="120"
                      value={minPixelsThreshold}
                      onChange={(e) => setMinPixelsThreshold(Number(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-neutral-400 mb-1">
                      <span>Tolerancia de Matiz (Hue Range)</span>
                      <span className="font-mono text-cyan-400">
                        {activePreset.hMin}° - {activePreset.hMax}°
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={activePreset.hMin}
                        onChange={(e) =>
                          setActivePreset((p) => ({ ...p, hMin: Number(e.target.value) }))
                        }
                        className="w-full accent-cyan-400"
                      />
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={activePreset.hMax}
                        onChange={(e) =>
                          setActivePreset((p) => ({ ...p, hMax: Number(e.target.value) }))
                        }
                        className="w-full accent-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Gesture Quick Cheatsheet */}
            <div className="p-3 bg-neutral-950/60 rounded-lg border border-neutral-800/80 space-y-2 text-[11px]">
              <span className="font-semibold text-neutral-300 block">Gestos Reconocidos:</span>
              <div className="flex items-center space-x-2 text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span><strong>Mover Mano:</strong> Controla el retículo en pantalla.</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span><strong>Dwell (0.8s):</strong> Deja la mano fija para activar botones.</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span><strong>Swipe Rápido:</strong> Pasa a la siguiente diapositiva.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
