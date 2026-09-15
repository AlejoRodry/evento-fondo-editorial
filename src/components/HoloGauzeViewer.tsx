import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { playSciFiSound } from '../utils/audio';
import {
  Sparkles,
  Maximize,
  Sliders,
  Ruler,
  Info,
  Tv,
  Layers,
  Zap,
  RotateCw,
  Sun,
  Eye,
  Settings2,
  CheckCircle2,
  Calculator,
} from 'lucide-react';

interface AvatarPreset {
  id: string;
  name: string;
  category: string;
  description: string;
  heightMetres: number;
  rimColor: string;
}

const AVATAR_PRESETS: AvatarPreset[] = [
  {
    id: 'cyber_humanoid',
    name: 'Asistente Digital a Escala Real',
    category: 'Avatar Humanoide',
    description: 'Figura antropomórfica de 2.2m con articulaciones de luz y contorno de recorte.',
    heightMetres: 2.2,
    rimColor: '#22d3ee',
  },
  {
    id: 'dna_helix',
    name: 'Doble Hélice Genómica 3D',
    category: 'Biotecnología / Ciencia',
    description: 'Estructura molecular con nodos cuánticos y datos flotantes de 2.5m.',
    heightMetres: 2.5,
    rimColor: '#34d399',
  },
  {
    id: 'tech_core',
    name: 'Núcleo Holográfico de Datos',
    category: 'Ingeniería / Tecnología',
    description: 'Prisma hipergeométrico con anillos concéntricos y pulso de energía.',
    heightMetres: 2.0,
    rimColor: '#a855f7',
  },
  {
    id: 'vehicle_chassis',
    name: 'Chasis Automotriz Wireframe',
    category: 'Diseño Industrial',
    description: 'Proyección técnica de líneas aerodinámicas suspendidas en el aire.',
    heightMetres: 1.8,
    rimColor: '#f59e0b',
  },
];

export const HoloGauzeViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projector' | 'calculator' | 'obs_guide'>('projector');
  const [selectedPreset, setSelectedPreset] = useState<AvatarPreset>(AVATAR_PRESETS[0]);
  const [rimIntensity, setRimIntensity] = useState<number>(2.4);
  const [rimColor, setRimColor] = useState<string>('#22d3ee');
  const [showScaleGrid, setShowScaleGrid] = useState<boolean>(true);
  const [keystoneTop, setKeystoneTop] = useState<number>(0); // -20 to 20 px warp
  const [keystoneBottom, setKeystoneBottom] = useState<number>(0);
  const [isProjectionFullscreen, setIsProjectionFullscreen] = useState<boolean>(false);

  // DIY Calculator State
  const [desiredHeight, setDesiredHeight] = useState<number>(2.5); // metres
  const [desiredWidth, setDesiredWidth] = useState<number>(2.0); // metres
  const [projectorThrowRatio, setProjectorThrowRatio] = useState<number>(1.2); // standard throw ratio
  const [ambientLightLevel, setAmbientLightLevel] = useState<'dim' | 'medium' | 'bright'>('medium');
  const [fabricChoice, setFabricChoice] = useState<'tulle' | 'fiberglass'>('tulle');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);

  // Setup Three.js Holographic Projection Canvas
  useEffect(() => {
    if (activeTab !== 'projector' || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // PURE BLACK #000000 for Holo-Gauze transparency!
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group for active avatar
    const group = new THREE.Group();
    modelGroupRef.current = group;
    scene.add(group);

    // Dynamic color parsing
    const hexColor = parseInt(rimColor.replace('#', '0x'), 16);

    // Build the selected avatar geometry
    if (selectedPreset.id === 'cyber_humanoid') {
      // Full Body Stylized Wireframe Humanoid
      // Head
      const headGeo = new THREE.IcosahedronGeometry(0.24, 2);
      const headMat = new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true });
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 1.35;
      group.add(head);

      // Torso
      const torsoGeo = new THREE.CylinderGeometry(0.28, 0.18, 0.85, 8, 4, true);
      const torsoMat = new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true });
      const torso = new THREE.Mesh(torsoGeo, torsoMat);
      torso.position.y = 0.7;
      group.add(torso);

      // Spine / Energy Core
      const coreGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.75, 8);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.y = 0.7;
      group.add(core);

      // Arms
      const armMat = new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true });
      const leftArmGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.7, 6);
      const leftArm = new THREE.Mesh(leftArmGeo, armMat);
      leftArm.position.set(-0.42, 0.65, 0);
      leftArm.rotation.z = Math.PI / 10;
      group.add(leftArm);

      const rightArm = new THREE.Mesh(leftArmGeo, armMat);
      rightArm.position.set(0.42, 0.65, 0);
      rightArm.rotation.z = -Math.PI / 10;
      group.add(rightArm);

      // Legs
      const legMat = new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true });
      const legGeo = new THREE.CylinderGeometry(0.08, 0.05, 1.1, 6, 4, true);
      const leftLeg = new THREE.Mesh(legGeo, legMat);
      leftLeg.position.set(-0.2, -0.4, 0);
      group.add(leftLeg);

      const rightLeg = new THREE.Mesh(legGeo, legMat);
      rightLeg.position.set(0.2, -0.4, 0);
      group.add(rightLeg);

      // Floating holographic aura rings around body
      const ringGeo = new THREE.TorusGeometry(0.55, 0.015, 8, 48);
      const ringMat = new THREE.MeshBasicMaterial({ color: hexColor, transparent: true, opacity: 0.6 });
      const ring1 = new THREE.Mesh(ringGeo, ringMat);
      ring1.rotation.x = Math.PI / 2;
      ring1.position.y = 0.4;
      group.add(ring1);
    } else if (selectedPreset.id === 'dna_helix') {
      // 3D DNA Double Helix
      const numNodes = 36;
      const strandMat = new THREE.MeshBasicMaterial({ color: hexColor });
      const rungMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });

      for (let i = 0; i < numNodes; i++) {
        const t = (i / numNodes) * Math.PI * 4;
        const y = (i / numNodes) * 2.8 - 1.4;
        const radius = 0.55;

        const x1 = Math.cos(t) * radius;
        const z1 = Math.sin(t) * radius;
        const x2 = Math.cos(t + Math.PI) * radius;
        const z2 = Math.sin(t + Math.PI) * radius;

        // Node 1
        const node1Geo = new THREE.SphereGeometry(0.05, 8, 8);
        const node1 = new THREE.Mesh(node1Geo, strandMat);
        node1.position.set(x1, y, z1);
        group.add(node1);

        // Node 2
        const node2 = new THREE.Mesh(node1Geo, strandMat);
        node2.position.set(x2, y, z2);
        group.add(node2);

        // Rung connecting them
        if (i % 2 === 0) {
          const rungGeo = new THREE.CylinderGeometry(0.015, 0.015, radius * 2, 6);
          const rung = new THREE.Mesh(rungGeo, rungMat);
          rung.position.set(0, y, 0);
          rung.rotation.z = Math.PI / 2;
          rung.rotation.y = -t;
          group.add(rung);
        }
      }
    } else if (selectedPreset.id === 'tech_core') {
      // Futuristic Tech Core
      const coreGeo = new THREE.OctahedronGeometry(0.8, 1);
      const coreMat = new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true });
      const core = new THREE.Mesh(coreGeo, coreMat);
      group.add(core);

      const innerCore = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.4, 0),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      group.add(innerCore);

      const outerRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.02, 16, 64),
        new THREE.MeshBasicMaterial({ color: hexColor })
      );
      outerRing.rotation.x = Math.PI / 3;
      group.add(outerRing);
    } else {
      // Wireframe Automobile Chassis
      const bodyGeo = new THREE.BoxGeometry(1.6, 0.55, 0.9, 8, 4, 6);
      const bodyMat = new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      group.add(body);

      const roofGeo = new THREE.BoxGeometry(0.9, 0.45, 0.75, 6, 2, 4);
      const roof = new THREE.Mesh(roofGeo, bodyMat);
      roof.position.set(-0.1, 0.45, 0);
      group.add(roof);

      // Wheels
      const wheelGeo = new THREE.TorusGeometry(0.22, 0.06, 8, 24);
      const wheelMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      [
        [-0.55, -0.3, 0.45],
        [0.55, -0.3, 0.45],
        [-0.55, -0.3, -0.45],
        [0.55, -0.3, -0.45],
      ].forEach(([x, y, z]) => {
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.position.set(x, y, z);
        group.add(wheel);
      });
    }

    // Sparkle / Floating dust particles
    const pCount = 100;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 2.8;
      pPos[i + 1] = (Math.random() - 0.5) * 3.2;
      pPos[i + 2] = (Math.random() - 0.5) * 2;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.03,
      color: hexColor,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Animation Loop
    let animId: number;
    const timer = new THREE.Timer();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      timer.update();
      const delta = timer.getDelta();
      const elapsed = timer.getElapsed();

      // Smooth idle rotation
      group.rotation.y += delta * 0.4;
      // Gentle breathing scale
      const breath = 1 + Math.sin(elapsed * 2) * 0.015;
      group.scale.set(breath, breath, breath);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, [activeTab, selectedPreset, rimColor]);

  // Launch Fullscreen Clean Projector Window
  const handleLaunchProjector = () => {
    playSciFiSound('holo_power');
    const container = containerRef.current;
    if (container) {
      if (!document.fullscreenElement) {
        container.requestFullscreen().catch((err) => {
          console.warn('Fullscreen request failed:', err);
        });
        setIsProjectionFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsProjectionFullscreen(false);
      }
    }
  };

  // Hardware calculations
  const calculateDistance = (desiredWidth * projectorThrowRatio).toFixed(1);
  const requiredLumens =
    ambientLightLevel === 'dim' ? '2,500 ANSI Lúmenes' : ambientLightLevel === 'medium' ? '3,200 ANSI Lúmenes' : '4,000+ ANSI Lúmenes';
  const pvcTotalLength = (desiredHeight * 2 + desiredWidth * 2 + 1.2).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-indigo-950/80 text-indigo-400 border border-indigo-800/60">
                Módulo 1: Proyección en Malla Holo-Gauze DIY
              </span>
              <span className="text-xs text-neutral-400 font-mono">Fondo #000000 Puro + Luz de Recorte</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Avatar Holográfico a Escala Real (2 a 3 Metros)
            </h2>
            <p className="text-sm text-neutral-300 mt-1 max-w-3xl">
              Proyecta figuras humanas o productos sobre tul de poliéster oscuro tensado. En condiciones de baja luz,
              el tul se vuelve invisible al ojo humano y la figura parece flotar físicamente en el aire
              sin necesidad de vidrios pesados ni acrílicos costosos.
            </p>
          </div>

          <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800">
            <button
              id="tab-holo-projector"
              onClick={() => setActiveTab('projector')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${
                activeTab === 'projector'
                  ? 'bg-indigo-950 text-indigo-300 border border-indigo-800/80 shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Señal de Proyección</span>
            </button>
            <button
              id="tab-holo-calc"
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${
                activeTab === 'calculator'
                  ? 'bg-indigo-950 text-indigo-300 border border-indigo-800/80 shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculadora PVC & Óptica</span>
            </button>
            <button
              id="tab-holo-obs"
              onClick={() => setActiveTab('obs_guide')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${
                activeTab === 'obs_guide'
                  ? 'bg-indigo-950 text-indigo-300 border border-indigo-800/80 shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Ajuste OBS & VLC</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: Live Hologram Generator & Projector Screen */}
      {activeTab === 'projector' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Holographic Canvas (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            <div
              id="hologram-projector-stage"
              className="relative h-[480px] sm:h-[560px] w-full rounded-2xl bg-black border border-neutral-800 overflow-hidden shadow-2xl flex items-center justify-center"
              style={{
                // Transform matrix for keystone simulation (trapezoidal correction)
                transform: `perspective(600px) rotateX(${keystoneTop - keystoneBottom}deg)`,
              }}
            >
              {/* Three.js Container with Pure #000000 background */}
              <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

              {/* Measurement Scale Grid Overlay (1m, 2m, 2.5m) */}
              {showScaleGrid && (
                <div className="absolute inset-y-6 left-6 pointer-events-none flex flex-col justify-between text-[11px] font-mono text-cyan-400/70 border-l border-dashed border-cyan-500/40 pl-2">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-0.5 bg-cyan-400" />
                    <span>3.0 METROS (Límite Techo Stand)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-0.5 bg-cyan-400" />
                    <span>2.5 METROS (Altura Avatar Proyectado)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-0.5 bg-cyan-400" />
                    <span>1.8 METROS (Estatura Ojos Visitante)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-0.5 bg-cyan-400" />
                    <span>1.0 METRO</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-0.5 bg-cyan-400" />
                    <span>0.0 METROS (Base del Suelo / Tarima)</span>
                  </div>
                </div>
              )}

              {/* Fullscreen Button overlay */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-2">
                <button
                  id="btn-launch-fullscreen-projector"
                  onClick={handleLaunchProjector}
                  className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white text-xs font-semibold border border-neutral-700 shadow-xl backdrop-blur-sm transition cursor-pointer"
                >
                  <Maximize className="w-4 h-4 text-cyan-400" />
                  <span>Modo Pantalla Completa (Proyector)</span>
                </button>
              </div>

              {/* Pure Black Verification Tag */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                  BLACK LEVEL: #000000 (0% LUZ RESIDUAL)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-400 px-1">
              <span>
                💡 <strong>Consejo de Montaje:</strong> Envía esta ventana al proyector mediante HDMI como segunda pantalla y presiona Pantalla Completa.
              </span>
              <button
                onClick={() => setShowScaleGrid(!showScaleGrid)}
                className="underline hover:text-white cursor-pointer"
              >
                {showScaleGrid ? 'Ocultar Escala Métrica' : 'Mostrar Escala Métrica'}
              </button>
            </div>
          </div>

          {/* Right Controls: Preset Selectors & Keystone Adjustments (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  CATÁLOGO DE AVATARES Y MODELOS
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">Seleccionar Figura a Proyectar</h3>
              </div>

              {/* Avatars List */}
              <div className="space-y-2">
                {AVATAR_PRESETS.map((preset) => {
                  const isSelected = selectedPreset.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedPreset(preset);
                        setRimColor(preset.rimColor);
                        playSciFiSound('hover');
                      }}
                      className={`w-full text-left p-3 rounded-lg border transition cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-800 border-cyan-500 text-white shadow-md'
                          : 'bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white">{preset.name}</span>
                        <span className="text-[10px] font-mono text-cyan-400">{preset.heightMetres}m</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-1">{preset.description}</p>
                    </button>
                  );
                })}
              </div>

              {/* Optical Adjustments: Rim Light & Keystoning */}
              <div className="pt-3 border-t border-neutral-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-200">
                  <span className="flex items-center space-x-1.5">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Luz de Recorte (Rim Light)</span>
                  </span>
                  <span className="font-mono text-cyan-400 text-[11px]">{rimColor}</span>
                </div>

                {/* Color swatches */}
                <div className="flex items-center space-x-2">
                  {['#22d3ee', '#ffffff', '#a855f7', '#34d399', '#f59e0b'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setRimColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition cursor-pointer ${
                        rimColor === c ? 'border-white scale-110 shadow-md' : 'border-transparent opacity-70'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                {/* Digital Keystone Correction (Trapezoidal) */}
                <div className="pt-3 border-t border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <span className="font-medium">Corrección Trapezoidal Digital</span>
                    <span className="text-[11px] font-mono text-cyan-400">{keystoneTop}° deg</span>
                  </div>
                  <p className="text-[10px] text-neutral-400">
                    Compensa la inclinación si el proyector está situado en el suelo o colgado del techo.
                  </p>
                  <input
                    type="range"
                    min="-15"
                    max="15"
                    value={keystoneTop}
                    onChange={(e) => setKeystoneTop(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>Tiro Suelo (+15°)</span>
                    <span>Plano (0°)</span>
                    <span>Tiro Techo (-15°)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: DIY Frame & Projector Calculator */}
      {activeTab === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="font-bold text-white text-base flex items-center space-x-2">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>Calculadora de Materiales y Óptica de Proyección</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Altura de la Malla Holográfica: <span className="text-cyan-400 font-mono">{desiredHeight} metros</span>
                </label>
                <input
                  type="range"
                  min="1.8"
                  max="3.5"
                  step="0.1"
                  value={desiredHeight}
                  onChange={(e) => setDesiredHeight(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Ancho de la Pantalla / Tul: <span className="text-cyan-400 font-mono">{desiredWidth} metros</span>
                </label>
                <input
                  type="range"
                  min="1.5"
                  max="4.0"
                  step="0.1"
                  value={desiredWidth}
                  onChange={(e) => setDesiredWidth(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Ratio de Tiro del Proyector (Throw Ratio): <span className="text-cyan-400 font-mono">{projectorThrowRatio}:1</span>
                </label>
                <select
                  value={projectorThrowRatio}
                  onChange={(e) => setProjectorThrowRatio(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value={0.5}>Tiro Ultracorto (Ultra Short Throw: 0.5:1)</option>
                  <option value={0.8}>Tiro Corto (Short Throw: 0.8:1)</option>
                  <option value={1.2}>Tiro Estándar / Oficina (1.2:1 a 1.4:1)</option>
                  <option value={1.8}>Tiro Largo (Long Throw: 1.8:1)</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Nivel de Iluminación Ambiental del Stand:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'dim', label: 'Baja (Íntima / Nocturna)' },
                    { id: 'medium', label: 'Media (Pabellón Ferial Estándar)' },
                    { id: 'bright', label: 'Alta (Cerca de Pasillo Exterior)' },
                  ].map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setAmbientLightLevel(level.id as 'dim' | 'medium' | 'bright')}
                      className={`p-2 rounded-lg border text-center transition cursor-pointer ${
                        ambientLightLevel === level.id
                          ? 'bg-neutral-800 border-cyan-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="font-bold text-white text-base">Especificaciones Calculadas para el Stand</h3>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-400 font-mono text-[10px] uppercase block">Distancia Proyector → Malla</span>
                <div className="text-xl font-bold text-cyan-400 mt-0.5">{calculateDistance} metros</div>
                <p className="text-[10px] text-neutral-400 mt-1">
                  Coloca el proyector en el suelo apuntando a 35° hacia arriba para no deslumbrar al público.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-400 font-mono text-[10px] uppercase block">Lúmenes Mínimos Sugeridos</span>
                <div className="text-xl font-bold text-emerald-400 mt-0.5">{requiredLumens}</div>
                <p className="text-[10px] text-neutral-400 mt-1">
                  Garantiza brillo suficiente para que la luz atraviese el 85% del tul sin perder contraste.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-400 font-mono text-[10px] uppercase block">Tubos PVC de 1 Pulgada</span>
                <div className="text-xl font-bold text-purple-400 mt-0.5">{pvcTotalLength} metros</div>
                <p className="text-[10px] text-neutral-400 mt-1">
                  2 postes verticales ({desiredHeight}m), 2 largueros ({desiredWidth}m), 4 codos y 2 patas T.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-400 font-mono text-[10px] uppercase block">Superficie de Tul Necesaria</span>
                <div className="text-xl font-bold text-amber-400 mt-0.5">{(desiredHeight * desiredWidth).toFixed(1)} m²</div>
                <p className="text-[10px] text-neutral-400 mt-1">
                  Tul poliéster gris humo de punto fino (costo estimado: $12 - $18 USD).
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-neutral-950 rounded-lg border border-neutral-800 text-xs space-y-1.5">
              <span className="font-semibold text-white block">Regla de Oro de Montaje Físico:</span>
              <p className="text-neutral-300 text-[11px]">
                <strong>FONDO OSCURO OBLIGATORIO:</strong> Detrás de la malla debe haber tela negra mate o pared oscura sin iluminación.
                Cualquier foco que ilumine detrás del tul romperá la ilusión de transparencia.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: OBS Studio & VLC Configuration Guide */}
      {activeTab === 'obs_guide' && (
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 lg:p-8 space-y-6 text-xs">
          <div className="border-b border-neutral-800 pb-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Configuración de OBS Studio y VLC para Fondos Negros Perfectos</span>
            </h3>
            <p className="text-neutral-400 text-xs mt-1">
              Pasos exactos para calibrar el video del avatar antes de enviarlo al proyector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2">
              <span className="font-semibold text-cyan-400 block text-sm">Paso 1: Fondo #000000 Puro</span>
              <p className="text-neutral-300 text-[11px]">
                En DaVinci Resolve, Premiere o CapCut, asegúrate de exportar sin canal alfa o con fondo negro 100% RGB (0, 0, 0).
                Aplica una curva de luminancia aplastando los negros (Black Level crush) para evitar grises residuales.
              </p>
            </div>

            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2">
              <span className="font-semibold text-emerald-400 block text-sm">Paso 2: Corrección en OBS Studio</span>
              <p className="text-neutral-300 text-[11px]">
                Añade la fuente de video en OBS. Haz clic derecho → <em>Filtros</em> → <em>Corrección de Color</em>.
                Aumenta el Contraste a +0.25 y reduce el Brillo a -0.08 para forzar que los bordes oscuros queden totalmente invisibles en el tul.
              </p>
            </div>

            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2">
              <span className="font-semibold text-purple-400 block text-sm">Paso 3: Salida a Proyector (Full Screen)</span>
              <p className="text-neutral-300 text-[11px]">
                En OBS Studio, haz clic derecho sobre la vista previa → <em>Proyector de ventana completa</em> → Selecciona el proyector HDMI.
                Si usas VLC, activa <em>Herramientas → Efectos y filtros → Geometría</em> para ajustar la distorsión trapezoidal si no tienes corrección óptica.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
