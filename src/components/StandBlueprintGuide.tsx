import React, { useState } from 'react';
import {
  LayoutGrid,
  CheckCircle2,
  DollarSign,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Layers,
  Hand,
  Cpu,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const StandBlueprintGuide: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<'hologram' | 'poster' | 'gesture'>('gesture');

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-purple-950/80 text-purple-400 border border-purple-800/60">
            Arquitectura de Stand Completo
          </span>
          <span className="text-xs text-neutral-400 font-mono">Distribución Espacial 3x3m y 4x3m</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
          Guía de Integración y Presupuesto Comparativo
        </h2>
        <p className="text-sm text-neutral-300 mt-1 max-w-3xl">
          Cómo combinar la Malla Holográfica, el Póster WebAR y el Control Gestual Neón en un único stand
          sin interferencias lumínicas ni cuellos de botella de público.
        </p>
      </div>

      {/* Interactive Architectural Floorplan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="font-bold text-white text-sm flex items-center space-x-2">
              <LayoutGrid className="w-4 h-4 text-cyan-400" />
              <span>Plano de Distribución Óptimo (Stand 4x3 Metros)</span>
            </h3>
            <span className="text-xs text-neutral-400 font-mono">Escala 1:50</span>
          </div>

          {/* SVG Floorplan Graphic */}
          <div className="relative w-full aspect-[4/3] bg-neutral-950 rounded-xl border border-neutral-800 p-4 flex flex-col justify-between overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Back Wall: Holographic Mesh Zone (Dark area) */}
            <div
              onClick={() => setSelectedZone('hologram')}
              className={`relative z-10 w-full p-3 rounded-lg border transition cursor-pointer ${
                selectedZone === 'hologram'
                  ? 'bg-indigo-950/70 border-indigo-500 shadow-lg shadow-indigo-950'
                  : 'bg-neutral-900/60 border-neutral-800 hover:border-indigo-500/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>ZONA 1: FONDO OSCURO — Malla Holo-Gauze (Avatar 2.5m)</span>
                </span>
                <span className="text-[10px] font-mono text-indigo-300">0 lux luz directa</span>
              </div>
              <p className="text-[10px] text-neutral-400 mt-1">
                Colocada al fondo para proteger el tul de los focos del pasillo ferial. Proyector en el suelo apuntando en diagonal ascendente.
              </p>
            </div>

            {/* Middle Space & Side Wall: WebAR Poster */}
            <div className="relative z-10 grid grid-cols-12 gap-3 my-2">
              {/* Left Wall: Poster WebAR */}
              <div
                onClick={() => setSelectedZone('poster')}
                className={`col-span-5 p-3 rounded-lg border transition cursor-pointer ${
                  selectedZone === 'poster'
                    ? 'bg-cyan-950/70 border-cyan-500 shadow-lg shadow-cyan-950'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-cyan-500/50'
                }`}
              >
                <span className="font-bold text-xs text-white flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ZONA 2: PÓSTER WebAR</span>
                </span>
                <p className="text-[10px] text-neutral-400 mt-1">
                  Pared lateral iluminada con luz difusa. Espacio de 1.5m para que los visitantes apunten con su móvil.
                </p>
              </div>

              {/* Center aisle circulation */}
              <div className="col-span-7 flex items-center justify-center border border-dashed border-neutral-800 rounded-lg text-center p-2">
                <span className="text-[10px] font-mono text-neutral-500">
                  PASILLO INTERNO DE CIRCULACIÓN (1.8m libre)
                </span>
              </div>
            </div>

            {/* Front Counter: Minority Report Gesture Station */}
            <div
              onClick={() => setSelectedZone('gesture')}
              className={`relative z-10 w-full p-3 rounded-lg border transition cursor-pointer ${
                selectedZone === 'gesture'
                  ? 'bg-emerald-950/70 border-emerald-500 shadow-lg shadow-emerald-950'
                  : 'bg-neutral-900/60 border-neutral-800 hover:border-emerald-500/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white flex items-center space-x-1.5">
                  <Hand className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ZONA 3: MOSTRADOR FRONTAL — Control Gestual Neón (Pantalla 55&quot;)</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-300">Frente al Pasillo Principal</span>
              </div>
              <p className="text-[10px] text-neutral-400 mt-1">
                La atracción visual que detiene a la gente que camina por el pasillo. Expositor con pulsera neón y foco UV de 15W.
              </p>
            </div>
          </div>
        </div>

        {/* Selected Zone Details and Recommendations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-4">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
              DETALLES DE INSTALACIÓN FÍSICA
            </span>

            {selectedZone === 'hologram' && (
              <div className="space-y-2.5 text-xs text-neutral-300">
                <h4 className="font-bold text-white text-sm flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Malla Holográfica: Precauciones Críticas</span>
                </h4>
                <p className="text-neutral-400 text-[11px]">
                  <strong>1. Trampa de Luz Negra:</strong> Detrás del tul de poliéster coloca una tela de algodón negra mate (molleton o terciopelo) a 50cm de distancia.
                </p>
                <p className="text-neutral-400 text-[11px]">
                  <strong>2. Proyector Diagonal:</strong> Si colocas el proyector en el suelo, camúflalo dentro de un podio o caja negra mate con ventilación para que el público no vea la lente.
                </p>
              </div>
            )}

            {selectedZone === 'poster' && (
              <div className="space-y-2.5 text-xs text-neutral-300">
                <h4 className="font-bold text-white text-sm flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Póster WebAR: Experiencia de Usuario</span>
                </h4>
                <p className="text-neutral-400 text-[11px]">
                  <strong>1. Altura de Montaje:</strong> El centro del póster debe estar a 1.50 metros del suelo para que cualquier visitante apunte con el brazo en ángulo natural de 90°.
                </p>
                <p className="text-neutral-400 text-[11px]">
                  <strong>2. Red Wi-Fi / Cobertura:</strong> Aunque el WebAR pesa menos de 2MB, coloca el QR con enlace corto (bit.ly o dominio propio) para escaneo instantáneo.
                </p>
              </div>
            )}

            {selectedZone === 'gesture' && (
              <div className="space-y-2.5 text-xs text-neutral-300">
                <h4 className="font-bold text-white text-sm flex items-center space-x-2">
                  <Hand className="w-4 h-4 text-emerald-400" />
                  <span>Control Gestual Neón: Efecto Wow Inmediato</span>
                </h4>
                <p className="text-neutral-400 text-[11px]">
                  <strong>1. Ubicación de la Cámara:</strong> Monta la webcam USB justo encima del monitor de 55&quot;, apuntando ligeramente hacia abajo para encuadrar las manos en el aire.
                </p>
                <p className="text-neutral-400 text-[11px]">
                  <strong>2. Foco UV Suplementario:</strong> Un reflector LED de luz negra de 20W apuntando al expositor hace que la pulsera verde lima brille como una espada láser sin iluminar el stand.
                </p>
              </div>
            )}
          </div>

          {/* Checklist for Opening Day */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-4 text-xs">
            <h4 className="font-bold text-white text-sm flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Checklist Previo a la Apertura</span>
            </h4>
            <div className="space-y-1.5 text-[11px] text-neutral-400">
              <div className="flex items-center space-x-2 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Laptop con salida HDMI dual configurada en modo extendido.</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Tul tensado con abrazaderas plásticas (sin arrugas diagonales).</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Webcam calibrada con el color exacto de la pulsera en 1 clic.</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>QR del póster probado en Safari (iOS) y Chrome (Android).</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bill of Materials (BOM) & Cost Comparison Table */}
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 lg:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <h3 className="font-bold text-white text-base flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Presupuesto y Comparativa: DIY vs Solución Comercial Tradicional</span>
          </h3>
          <span className="px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold">
            Ahorro Estimado: &gt; 94%
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 font-mono">
                <th className="py-2.5 px-3">Tecnología</th>
                <th className="py-2.5 px-3">Materiales DIY Recomendados</th>
                <th className="py-2.5 px-3 text-emerald-400">Costo DIY</th>
                <th className="py-2.5 px-3 text-neutral-500">Costo Comercial / Agencia</th>
                <th className="py-2.5 px-3">Impacto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
              <tr>
                <td className="py-3 px-3 font-semibold text-white">1. Malla Holo-Gauze (Avatar 2.5m)</td>
                <td className="py-3 px-3 text-neutral-400">Tul poliéster gris humo + tubos PVC 1&quot; + DaVinci/OBS</td>
                <td className="py-3 px-3 font-bold text-emerald-400 font-mono">$35 – $60 USD</td>
                <td className="py-3 px-3 text-neutral-500 line-through font-mono">$3,500 – $7,000 USD</td>
                <td className="py-3 px-3">
                  <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] font-bold">
                    Máximo Wow
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">2. Póster Interactivo WebAR</td>
                <td className="py-3 px-3 text-neutral-400">Papel bond mate 250g + MindAR.js + GitHub Pages (Gratis)</td>
                <td className="py-3 px-3 font-bold text-emerald-400 font-mono">$12 – $25 USD</td>
                <td className="py-3 px-3 text-neutral-500 line-through font-mono">$1,500 – $3,000 USD</td>
                <td className="py-3 px-3">
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] font-bold">
                    Viral / Móvil
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">3. Control Gestual Neón</td>
                <td className="py-3 px-3 text-neutral-400">Pulsera silicona deportiva + webcam USB 1080p + Canvas/JS</td>
                <td className="py-3 px-3 font-bold text-emerald-400 font-mono">$15 – $35 USD</td>
                <td className="py-3 px-3 text-neutral-500 line-through font-mono">$2,200 – $4,500 USD</td>
                <td className="py-3 px-3">
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold">
                    Interactividad
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
