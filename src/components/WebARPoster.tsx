import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { playSciFiSound } from '../utils/audio';
import {
  Box,
  QrCode,
  Camera,
  Code2,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Layers,
  FileText,
  Info,
  Smartphone,
  Eye,
  RotateCw,
} from 'lucide-react';

export const WebARPoster: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'simulator' | 'poster' | 'code'>('simulator');
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [selectedARCard, setSelectedARCard] = useState<string>('specs');
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const threeContainerRef = useRef<HTMLDivElement | null>(null);
  const videoStreamRef = useRef<HTMLVideoElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const coreGroupRef = useRef<THREE.Group | null>(null);
  const partsRef = useRef<THREE.Mesh[]>([]);

  // Start AR camera for background
  const toggleArCamera = async () => {
    if (isCameraActive) {
      if (videoStreamRef.current && videoStreamRef.current.srcObject) {
        const stream = videoStreamRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoStreamRef.current.srcObject = null;
      }
      setIsCameraActive(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        });
        if (videoStreamRef.current) {
          videoStreamRef.current.srcObject = stream;
          await videoStreamRef.current.play();
          setIsCameraActive(true);
          playSciFiSound('holo_power');
        }
      } catch (err) {
        console.warn('Could not access rear/environment camera:', err);
        // Fallback to user facing
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          if (videoStreamRef.current) {
            videoStreamRef.current.srcObject = stream;
            await videoStreamRef.current.play();
            setIsCameraActive(true);
          }
        } catch {
          alert('Cámara no disponible. Se utilizará el entorno visual simulado de alta fidelidad.');
        }
      }
    }
  };

  // Setup Three.js Floating 3D Hologram
  useEffect(() => {
    if (activeSubTab !== 'simulator' || !threeContainerRef.current) return;

    const container = threeContainerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 3.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x22d3ee, 2.5);
    dirLight.position.set(2, 4, 3);
    scene.add(dirLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3, 10);
    purpleLight.position.set(-2, -1, 2);
    scene.add(purpleLight);

    // Core 3D Group
    const group = new THREE.Group();
    coreGroupRef.current = group;
    scene.add(group);

    // Central Sphere (Energy Core)
    const sphereGeo = new THREE.IcosahedronGeometry(0.55, 2);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: isWireframe,
      emissive: 0x083344,
      emissiveIntensity: 0.4,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);
    partsRef.current.push(sphere);

    // Orbiting Ring 1
    const ring1Geo = new THREE.TorusGeometry(0.9, 0.03, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: isWireframe,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);
    partsRef.current.push(ring1);

    // Orbiting Ring 2
    const ring2Geo = new THREE.TorusGeometry(1.15, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: isWireframe,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);
    partsRef.current.push(ring2);

    // Surrounding Floating Node Satellite Cubes (Explodable)
    const satellites: THREE.Mesh[] = [];
    const satelliteGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const colors = [0x22d3ee, 0x34d399, 0xf43f5e, 0xfbbf24];

    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        metalness: 0.8,
        roughness: 0.2,
      });
      const mesh = new THREE.Mesh(satelliteGeo, mat);
      mesh.position.set(Math.cos(angle) * 1.25, 0, Math.sin(angle) * 1.25);
      group.add(mesh);
      satellites.push(mesh);
      partsRef.current.push(mesh);
    }

    // Floating Ground Target Plane (representing poster anchor in 3D)
    const gridHelper = new THREE.GridHelper(2.5, 10, 0x22d3ee, 0x1e293b);
    gridHelper.position.y = -0.9;
    scene.add(gridHelper);

    // Particle Swarm
    const particleCount = 80;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pPositions[i] = (Math.random() - 0.5) * 3;
      pPositions[i + 1] = (Math.random() - 0.5) * 2;
      pPositions[i + 2] = (Math.random() - 0.5) * 3;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Rotation
      group.rotation.y += delta * 0.45;
      ring1.rotation.z += delta * 0.6;
      ring2.rotation.x += delta * 0.5;

      // Floating gentle bobbing
      group.position.y = Math.sin(elapsed * 1.5) * 0.08;

      // Rotate satellites
      satellites.forEach((sat, idx) => {
        const baseAngle = (idx * Math.PI) / 2 + elapsed * 0.6;
        const dist = isExploded ? 1.9 : 1.3;
        sat.position.x = Math.cos(baseAngle) * dist;
        sat.position.z = Math.sin(baseAngle) * dist;
        sat.position.y = Math.sin(elapsed * 2 + idx) * 0.2;
        sat.rotation.x += delta * 1.2;
        sat.rotation.y += delta * 1.5;
      });

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
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, [activeSubTab, isExploded, isWireframe]);

  // Clean camera on unmount
  useEffect(() => {
    return () => {
      if (videoStreamRef.current && videoStreamRef.current.srcObject) {
        const stream = videoStreamRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const handleTriggerInteraction = (cardKey: string) => {
    playSciFiSound('select');
    setSelectedARCard(cardKey);
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.65 },
      colors: ['#22d3ee', '#a855f7', '#34d399'],
    });
  };

  const copyMindARCode = () => {
    const code = `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stand WebAR - Experiencia Aumentada</title>
    <!-- MindAR Image Tracking + A-Frame -->
    <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js"></script>
    <style>
      body { margin: 0; overflow: hidden; font-family: sans-serif; }
      .floating-ui {
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: rgba(15, 23, 42, 0.9); border: 1px solid #38bdf8;
        color: white; padding: 12px 24px; border-radius: 30px; font-size: 14px;
        backdrop-filter: blur(8px); z-index: 999; display: flex; gap: 10px;
      }
      .ar-btn { background: #0284c7; border: none; color: white; padding: 8px 16px; border-radius: 20px; cursor: pointer; }
    </style>
  </head>
  <body>
    <div class="floating-ui">
      <span>✨ Apunta al póster del stand</span>
      <button class="ar-btn" onclick="alert('¡Información guardada en tu móvil!')">Guardar Catálogo</button>
    </div>

    <!-- MindAR Scene: Vincula el póster target compilado (.mind) -->
    <a-scene 
      mindar-image="imageTargetSrc: ./targets.mind; filterMinCF:0.0001; filterBeta: 0.001;" 
      color-space="sRGB" 
      renderer="colorManagement: true, physicallyCorrectLights" 
      vr-mode-ui="enabled: false" 
      device-orientation-permission-ui="enabled: false">
      
      <a-assets>
        <!-- Modelo 3D exportado desde Blender (.gltf/.glb) -->
        <a-asset-item id="avatarModel" src="./producto_stand.glb"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <!-- Target 0: Cuando la cámara reconoce el póster impreso -->
      <a-entity mindar-image-target="targetIndex: 0">
        <!-- Objeto 3D que flota saliendo del papel -->
        <a-gltf-model rotation="0 0 0" position="0 0 0.1" scale="0.5 0.5 0.5" src="#avatarModel"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear">
        </a-gltf-model>
        
        <!-- Pestaña flotante 3D informativa -->
        <a-plane position="0 0.6 0.2" width="0.8" height="0.35" color="#0f172a" material="opacity: 0.9">
          <a-text value="ESPECIFICACIONES 2026\\nAutonomia: 48h | Peso: 1.2kg" align="center" width="1.6" color="#38bdf8"></a-text>
        </a-plane>
      </a-entity>
    </a-scene>
  </body>
</html>`;

    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Mode Switches */}
      <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                Módulo 2: Realidad Aumentada sin Aplicaciones (WebAR)
              </span>
              <span className="text-xs text-neutral-400 font-mono">MindAR.js + Three.js / WebGL</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Póster Interactivo con Elementos Flotantes 3D
            </h2>
            <p className="text-sm text-neutral-300 mt-1 max-w-3xl">
              Los visitantes no tienen que descargar ninguna app de la App Store ni Play Store.
              Escanean el código QR impreso en el póster, abren la URL con HTTPS y la cámara proyecta
              gráficos 3D desprendidos del papel con menús táctiles y datos flotantes.
            </p>
          </div>

          {/* Sub-tab pills */}
          <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800">
            <button
              id="subtab-ar-sim"
              onClick={() => setActiveSubTab('simulator')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${
                activeSubTab === 'simulator'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/80 shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Simulador WebAR</span>
            </button>
            <button
              id="subtab-poster"
              onClick={() => setActiveSubTab('poster')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${
                activeSubTab === 'poster'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/80 shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Póster Imprimible</span>
            </button>
            <button
              id="subtab-code"
              onClick={() => setActiveSubTab('code')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${
                activeSubTab === 'code'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/80 shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código MindAR.js</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: Interactive AR Simulator */}
      {activeSubTab === 'simulator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main 3D Viewport with Camera Overlay (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl">
              {/* Background Video Stream (When User Camera is Active) */}
              <video
                ref={videoStreamRef}
                playsInline
                muted
                autoPlay
                className={`absolute inset-0 w-full h-full object-cover z-0 ${
                  isCameraActive ? 'opacity-90' : 'hidden'
                }`}
              />

              {/* Synthetic Environment when Camera is off */}
              {!isCameraActive && (
                <div
                  className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black"
                >
                  {/* Subtle expo stand wall rendering in background */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                </div>
              )}

              {/* Three.js 3D Canvas Mount */}
              <div ref={threeContainerRef} className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing" />

              {/* Floating Augmented Reality UI Overlays (The AR Elements popping out of the poster) */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                <div className="px-2.5 py-1 rounded-full bg-neutral-900/90 border border-cyan-500/60 backdrop-blur-md flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px] font-mono text-cyan-300 font-semibold tracking-wide uppercase">
                    OBJETO ANCLADO AL PÓSTER // FLOTACIÓN 3D
                  </span>
                </div>
              </div>

              {/* Camera Toggle Button in Top Right */}
              <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
                <button
                  id="btn-toggle-ar-camera"
                  onClick={toggleArCamera}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border backdrop-blur-md transition cursor-pointer ${
                    isCameraActive
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                      : 'bg-neutral-900/90 border-neutral-700 text-neutral-300 hover:text-white'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{isCameraActive ? 'Cámara de Stand ACTIVA' : 'Ver con Mi Cámara'}</span>
                </button>
              </div>

              {/* Floating AR Interactive Tabs (User clicks them in augmented reality) */}
              <div className="absolute bottom-6 inset-x-4 z-20 flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-neutral-950/85 border border-neutral-700/80 backdrop-blur-md shadow-2xl">
                  {[
                    { id: 'specs', label: 'Ficha Técnica', icon: FileText },
                    { id: 'explode', label: isExploded ? 'Ensamblar 3D' : 'Despiece 3D', icon: Layers },
                    { id: 'wireframe', label: isWireframe ? 'Sólido' : 'Wireframe', icon: Box },
                    { id: 'contact', label: 'Pedir Cotización', icon: Sparkles },
                  ].map((btn) => {
                    const Icon = btn.icon;
                    const isActive =
                      btn.id === 'explode'
                        ? isExploded
                        : btn.id === 'wireframe'
                        ? isWireframe
                        : selectedARCard === btn.id;

                    return (
                      <button
                        key={btn.id}
                        id={`btn-ar-tab-${btn.id}`}
                        onClick={() => {
                          if (btn.id === 'explode') {
                            setIsExploded(!isExploded);
                            playSciFiSound('swipe');
                          } else if (btn.id === 'wireframe') {
                            setIsWireframe(!isWireframe);
                            playSciFiSound('hover');
                          } else {
                            handleTriggerInteraction(btn.id);
                          }
                        }}
                        className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-900/40'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{btn.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Hint below AR simulator */}
            <div className="flex items-center justify-between text-xs text-neutral-400 px-2">
              <span className="flex items-center space-x-1.5">
                <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                <span>El modelo 3D rota continuamente simulando el renderizado de Three.js sobre el póster.</span>
              </span>
              <span className="font-mono text-[11px] text-cyan-400">Latencia WebGL: &lt;16ms</span>
            </div>
          </div>

          {/* Right Area: Interactive AR Floating Data Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  PANEL DESPLEGADO EN EL MÓVIL
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedARCard === 'specs' && 'Especificaciones del Producto 3D'}
                  {selectedARCard === 'contact' && 'Captura de Leads / Contacto Express'}
                  {selectedARCard !== 'specs' && selectedARCard !== 'contact' && 'Inspección del Modelo'}
                </h3>
              </div>

              {selectedARCard === 'specs' && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 space-y-1">
                    <span className="text-neutral-400 block font-mono text-[10px]">RECURSO 3D CARGADO</span>
                    <span className="font-semibold text-white">Núcleo Cuántico Modular (GLB)</span>
                    <p className="text-neutral-400 text-[11px]">
                      Geometría optimizada en Blender: 4,820 polígonos con texturas comprimidas KTX2/Draco (1.2 MB).
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between py-1.5 border-b border-neutral-800 text-neutral-300">
                      <span>Rastreo Óptico:</span>
                      <span className="font-mono text-cyan-400">MindAR Image 2D (A-Frame)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-neutral-800 text-neutral-300">
                      <span>Velocidad de Carga:</span>
                      <span className="font-mono text-emerald-400">1.8 segundos en 4G/5G</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-neutral-800 text-neutral-300">
                      <span>Requisitos de App:</span>
                      <span className="font-mono text-white font-bold">NINGUNA (Browser nativo)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleTriggerInteraction('contact')}
                    className="w-full py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition cursor-pointer"
                  >
                    Simular Captura de Lead del Visitante
                  </button>
                </div>
              )}

              {selectedARCard === 'contact' && (
                <div className="space-y-3 text-xs">
                  <p className="text-neutral-300 text-[11px]">
                    Al apuntar el móvil, el visitante puede enviar sus datos con un toque para recibir el catálogo PDF por WhatsApp o correo:
                  </p>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Nombre del visitante"
                      defaultValue="Carlos Mendoza"
                      className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                    />
                    <input
                      type="email"
                      placeholder="Correo corporativo"
                      defaultValue="carlos@empresa.com"
                      className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <button
                    onClick={() => {
                      confetti({ particleCount: 30 });
                      alert('¡Lead capturado exitosamente en el stand!');
                      setSelectedARCard('specs');
                    }}
                    className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition cursor-pointer"
                  >
                    Enviar Catálogo al Visitante
                  </button>
                </div>
              )}

              {/* WebAR Best Practices Box */}
              <div className="p-3.5 bg-neutral-950/70 border border-neutral-800 rounded-xl space-y-2">
                <span className="text-xs font-semibold text-neutral-200 flex items-center space-x-1.5">
                  <Info className="w-4 h-4 text-cyan-400" />
                  <span>Claves de Éxito en Stand Físico</span>
                </span>
                <ul className="text-[11px] text-neutral-400 space-y-1 list-disc list-inside">
                  <li>
                    <strong>Papel Mate:</strong> Nunca uses laminado brillante porque los reflejos de las luces del recinto confunden los puntos de anclaje ópticos.
                  </li>
                  <li>
                    <strong>HTTPS Obligatorio:</strong> Los navegadores móviles (Safari iOS y Chrome Android) solo permiten el acceso a la cámara en dominios seguros con SSL (GitHub Pages, Vercel, Netlify).
                  </li>
                  <li>
                    <strong>Alto Contraste:</strong> El diseño del póster debe tener esquinas nítidas y patrones asimétricos para que MindAR lo reconozca en &lt;200ms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Printable Physical Poster Design with QR */}
      {activeSubTab === 'poster' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* The High-Contrast Printable Target Poster */}
            <div
              id="printable-poster"
              className="w-full max-w-md bg-neutral-950 border-4 border-cyan-500/80 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden space-y-6"
            >
              {/* Optical Corner Targets (Standard AR Fiducial Markers) */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-4 border-l-4 border-cyan-400" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-4 border-r-4 border-cyan-400" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-4 border-l-4 border-cyan-400" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-4 border-r-4 border-cyan-400" />

              {/* Header */}
              <div className="text-center pt-2">
                <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-[10px] font-mono tracking-widest text-cyan-300 uppercase">
                  EXPERIENCIA INTERACTIVA // WEBAR
                </span>
                <h2 className="text-2xl font-black mt-2 tracking-tight text-white">
                  DESCUBRE EL FUTURO EN 3D
                </h2>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Apunta con la cámara de tu teléfono móvil • Cero descargas
                </p>
              </div>

              {/* High Contrast Visual Anchor (for MindAR image matching) */}
              <div className="relative aspect-square w-full rounded-xl bg-neutral-900 border-2 border-dashed border-cyan-500/40 flex flex-col items-center justify-center p-6 text-center">
                {/* Simulated QR Code with high density */}
                <div className="p-3 bg-white rounded-xl shadow-lg">
                  <div className="w-36 h-36 bg-black relative flex items-center justify-center p-2">
                    {/* Stylized QR grid */}
                    <div className="w-full h-full bg-white flex flex-col justify-between p-1">
                      <div className="flex justify-between">
                        <div className="w-8 h-8 bg-black border-2 border-white p-1">
                          <div className="w-full h-full bg-black" />
                        </div>
                        <div className="w-8 h-8 bg-black border-2 border-white p-1">
                          <div className="w-full h-full bg-black" />
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <Box className="w-8 h-8 text-black animate-pulse" />
                      </div>
                      <div className="flex justify-between">
                        <div className="w-8 h-8 bg-black border-2 border-white p-1">
                          <div className="w-full h-full bg-black" />
                        </div>
                        <div className="w-8 h-8 border border-neutral-300 p-0.5 flex flex-wrap gap-0.5">
                          <div className="w-2 h-2 bg-black" />
                          <div className="w-2 h-2 bg-black" />
                          <div className="w-2 h-2 bg-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                    SCAN TO LAUNCH WebAR
                  </span>
                  <p className="text-[10px] text-neutral-400 mt-0.5">
                    URL: https://tustand.com/ar
                  </p>
                </div>
              </div>

              {/* Instructions on poster */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1 border-t border-neutral-800">
                <div className="p-2 rounded bg-neutral-900/60">
                  <span className="font-bold text-cyan-400 block text-xs">1</span>
                  <span>Escanea QR</span>
                </div>
                <div className="p-2 rounded bg-neutral-900/60">
                  <span className="font-bold text-cyan-400 block text-xs">2</span>
                  <span>Apunta al póster</span>
                </div>
                <div className="p-2 rounded bg-neutral-900/60">
                  <span className="font-bold text-cyan-400 block text-xs">3</span>
                  <span>Toca los menús 3D</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-3">
              <button
                onClick={() => window.print()}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium border border-neutral-700 transition cursor-pointer"
              >
                <Printer className="w-4 h-4 text-cyan-400" />
                <span>Imprimir Póster para Stand</span>
              </button>
            </div>
          </div>

          {/* Specifications for Printing and Physical Material */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6">
              <h3 className="font-bold text-white text-sm flex items-center space-x-2">
                <Printer className="w-4 h-4 text-cyan-400" />
                <span>Especificaciones de Impresión Física</span>
              </h3>

              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="font-semibold text-cyan-400 block">Tipo de Papel Recomendado</span>
                  <p className="text-neutral-400 text-[11px] mt-0.5">
                    <strong>Papel Bond Mate de 250g o Couche Mate sin laminar</strong>.
                    El laminado brillante crea reflejos de las lámparas halógenas del recinto ferial que ciegan la cámara del smartphone.
                  </p>
                </div>

                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="font-semibold text-emerald-400 block">Dimensiones Óptimas</span>
                  <p className="text-neutral-400 text-[11px] mt-0.5">
                    <strong>Tamaño A1 (59.4 x 84.1 cm) o A2 (42 x 59.4 cm)</strong>.
                    Permite a los visitantes interactuar cómodamente a 1 o 1.5 metros de distancia sin bloquear el paso del pasillo.
                  </p>
                </div>

                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="font-semibold text-purple-400 block">Ángulo de Luz del Stand</span>
                  <p className="text-neutral-400 text-[11px] mt-0.5">
                    Iluminación suave cenital o difusa a 45 grados. Evita colocar un foco dicroico directamente perpendicular que queme el centro del código QR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: MindAR.js Ready-to-Deploy Code Boilerplate */}
      {activeSubTab === 'code' && (
        <div className="space-y-4">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-neutral-800 pb-4 mb-5 gap-4">
              <div>
                <h3 className="font-bold text-white text-sm">
                  Plantilla de Producción MindAR.js + A-Frame
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Guarda este archivo como <code className="text-cyan-300">index.html</code> y súbelo a GitHub Pages o Vercel.
                </p>
              </div>

              <button
                onClick={copyMindARCode}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition cursor-pointer"
              >
                {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? '¡Copiado!' : 'Copiar Código'}</span>
              </button>
            </div>

            <div className="relative rounded-lg bg-neutral-950 border border-neutral-800 p-4 font-mono text-xs text-neutral-300 overflow-x-auto max-h-[420px]">
              <pre>
{`<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stand WebAR - Experiencia Aumentada</title>
    <!-- MindAR Image Tracking + A-Frame -->
    <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js"></script>
    <style>
      body { margin: 0; overflow: hidden; font-family: sans-serif; }
      .floating-ui {
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: rgba(15, 23, 42, 0.9); border: 1px solid #38bdf8;
        color: white; padding: 12px 24px; border-radius: 30px; font-size: 14px;
        backdrop-filter: blur(8px); z-index: 999; display: flex; gap: 10px;
      }
      .ar-btn { background: #0284c7; border: none; color: white; padding: 8px 16px; border-radius: 20px; cursor: pointer; }
    </style>
  </head>
  <body>
    <div class="floating-ui">
      <span>✨ Apunta al póster del stand</span>
      <button class="ar-btn" onclick="alert('¡Información guardada en tu móvil!')">Guardar Catálogo</button>
    </div>

    <!-- MindAR Scene: Vincula el póster target compilado (.mind) -->
    <a-scene 
      mindar-image="imageTargetSrc: ./targets.mind; filterMinCF:0.0001; filterBeta: 0.001;" 
      color-space="sRGB" 
      renderer="colorManagement: true, physicallyCorrectLights" 
      vr-mode-ui="enabled: false" 
      device-orientation-permission-ui="enabled: false">
      
      <a-assets>
        <!-- Modelo 3D exportado desde Blender (.gltf/.glb) -->
        <a-asset-item id="avatarModel" src="./producto_stand.glb"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <!-- Target 0: Cuando la cámara reconoce el póster impreso -->
      <a-entity mindar-image-target="targetIndex: 0">
        <!-- Objeto 3D que flota saliendo del papel -->
        <a-gltf-model rotation="0 0 0" position="0 0 0.1" scale="0.5 0.5 0.5" src="#avatarModel"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear">
        </a-gltf-model>
        
        <!-- Pestaña flotante 3D informativa -->
        <a-plane position="0 0.6 0.2" width="0.8" height="0.35" color="#0f172a" material="opacity: 0.9">
          <a-text value="ESPECIFICACIONES 2026\\nAutonomia: 48h | Peso: 1.2kg" align="center" width="1.6" color="#38bdf8"></a-text>
        </a-plane>
      </a-entity>
    </a-scene>
  </body>
</html>`}
              </pre>
            </div>

            {/* Workflow steps */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                <span className="font-semibold text-cyan-400 block">Paso 1: Compilar el Póster</span>
                <p className="text-neutral-400 mt-1">
                  Arrastra tu imagen JPG/PNG del póster a la herramienta oficial online de MindAR (compiler) para descargar el archivo <code className="text-white">targets.mind</code>.
                </p>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                <span className="font-semibold text-emerald-400 block">Paso 2: Exportar 3D (.glb)</span>
                <p className="text-neutral-400 mt-1">
                  En Blender, exporta tu producto o avatar como glTF Binary (.glb) con &quot;Apply Modifiers&quot; y materiales PBR embebidos.
                </p>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                <span className="font-semibold text-purple-400 block">Paso 3: Subir a Vercel / GitHub</span>
                <p className="text-neutral-400 mt-1">
                  Arrastra la carpeta a GitHub Pages o Vercel. Automáticamente obtendrás un enlace con HTTPS gratuito, indispensable para la cámara web móvil.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
