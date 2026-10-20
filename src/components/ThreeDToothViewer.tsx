import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, RotateCw, ZoomIn, Info } from 'lucide-react';

interface ThreeDToothViewerProps {
  activeLayer?: 'enamel' | 'dentin' | 'pulp' | 'root' | 'all';
  onLayerChange?: (layer: 'enamel' | 'dentin' | 'pulp' | 'root' | 'all') => void;
}

export const ThreeDToothViewer: React.FC<ThreeDToothViewerProps> = ({
  activeLayer = 'all',
  onLayerChange,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedLayer, setSelectedLayer] = useState<'enamel' | 'dentin' | 'pulp' | 'root' | 'all'>(activeLayer);
  const [isRotating, setIsRotating] = useState(true);
  const [hasWebGL, setHasWebGL] = useState(true);

  // Sync internal state when external prop changes
  useEffect(() => {
    setSelectedLayer(activeLayer);
  }, [activeLayer]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 420;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.6);
    dirLight2.position.set(-6, -2, -4);
    scene.add(dirLight2);

    const warmLight = new THREE.DirectionalLight(0xf59e0b, 0.4);
    warmLight.position.set(0, -6, 4);
    scene.add(warmLight);

    // Create 3D Tooth Group
    const toothGroup = new THREE.Group();
    scene.add(toothGroup);

    // Materials
    const enamelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfbfcfe,
      metalness: 0.05,
      roughness: 0.15,
      transmission: 0.35,
      thickness: 0.8,
      transparent: true,
      opacity: selectedLayer === 'all' || selectedLayer === 'enamel' ? 0.92 : 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });

    const dentinMaterial = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      roughness: 0.4,
      metalness: 0.05,
      transparent: true,
      opacity: selectedLayer === 'all' ? 0.75 : selectedLayer === 'dentin' ? 1.0 : 0.15,
    });

    const pulpMaterial = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0x881337,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      transparent: true,
      opacity: selectedLayer === 'all' ? 0.9 : selectedLayer === 'pulp' ? 1.0 : 0.2,
    });

    const rootMaterial = new THREE.MeshStandardMaterial({
      color: 0xfef3c7,
      roughness: 0.45,
      transparent: true,
      opacity: selectedLayer === 'all' || selectedLayer === 'root' ? 0.95 : 0.2,
    });

    // 1. Crown Geometry (Molar with cusps)
    const crownGroup = new THREE.Group();
    
    // Main crown body
    const crownGeo = new THREE.CylinderGeometry(1.4, 1.15, 1.6, 32, 16);
    // Sculpt crown by modulating vertices slightly
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      const z = pos.getZ(i);
      if (y > 0.5) {
        // Cusp lobes
        const angle = Math.atan2(z, x);
        const bump = Math.sin(angle * 4) * 0.18;
        const dip = Math.exp(-(x * x + z * z) * 1.5) * -0.25;
        pos.setY(i, y + bump + dip);
      }
    }
    crownGeo.computeVertexNormals();
    const crownMesh = new THREE.Mesh(crownGeo, enamelMaterial);
    crownMesh.position.y = 0.8;
    crownGroup.add(crownMesh);

    // 2. Dentin core inside crown
    const dentinGeo = new THREE.CylinderGeometry(1.05, 0.85, 1.3, 24, 12);
    const dentinMesh = new THREE.Mesh(dentinGeo, dentinMaterial);
    dentinMesh.position.y = 0.65;
    crownGroup.add(dentinMesh);

    // 3. Pulp chamber inside dentin
    const pulpGeo = new THREE.CylinderGeometry(0.5, 0.35, 1.0, 16, 8);
    const pulpMesh = new THREE.Mesh(pulpGeo, pulpMaterial);
    pulpMesh.position.y = 0.55;
    crownGroup.add(pulpMesh);

    toothGroup.add(crownGroup);

    // 4. Roots (Dual anatomical roots for molar)
    const root1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.45, 0.1, 0),
      new THREE.Vector3(-0.65, -0.9, 0.05),
      new THREE.Vector3(-0.55, -2.0, -0.05),
      new THREE.Vector3(-0.35, -2.5, 0),
    ]);
    const root1Geo = new THREE.TubeGeometry(root1Curve, 24, 0.38, 16, false);
    const root1Mesh = new THREE.Mesh(root1Geo, rootMaterial);
    toothGroup.add(root1Mesh);

    const root2Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.45, 0.1, 0),
      new THREE.Vector3(0.65, -0.9, -0.05),
      new THREE.Vector3(0.55, -2.0, 0.05),
      new THREE.Vector3(0.35, -2.5, 0),
    ]);
    const root2Geo = new THREE.TubeGeometry(root2Curve, 24, 0.38, 16, false);
    const root2Mesh = new THREE.Mesh(root2Geo, rootMaterial);
    toothGroup.add(root2Mesh);

    // Pulp canal canals inside roots
    const nerve1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.25, 0.1, 0),
      new THREE.Vector3(-0.55, -0.9, 0.04),
      new THREE.Vector3(-0.48, -1.9, -0.03),
      new THREE.Vector3(-0.35, -2.4, 0),
    ]);
    const nerve1Geo = new THREE.TubeGeometry(nerve1Curve, 20, 0.12, 10, false);
    const nerve1Mesh = new THREE.Mesh(nerve1Geo, pulpMaterial);
    toothGroup.add(nerve1Mesh);

    const nerve2Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.25, 0.1, 0),
      new THREE.Vector3(0.55, -0.9, -0.04),
      new THREE.Vector3(0.48, -1.9, 0.03),
      new THREE.Vector3(0.35, -2.4, 0),
    ]);
    const nerve2Geo = new THREE.TubeGeometry(nerve2Curve, 20, 0.12, 10, false);
    const nerve2Mesh = new THREE.Mesh(nerve2Geo, pulpMaterial);
    toothGroup.add(nerve2Mesh);

    // Center tooth
    toothGroup.position.y = 0.5;

    // Interaction drag & orbit
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      toothGroup.rotation.y += deltaX * 0.008;
      toothGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handlePointerDown);
    domElement.addEventListener('touchstart', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    // Render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isDragging) {
        toothGroup.rotation.y += delta * 0.6;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      domElement.removeEventListener('mousedown', handlePointerDown);
      domElement.removeEventListener('touchstart', handlePointerDown);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      crownGeo.dispose();
      dentinGeo.dispose();
      pulpGeo.dispose();
      root1Geo.dispose();
      root2Geo.dispose();
      nerve1Geo.dispose();
      nerve2Geo.dispose();
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [selectedLayer, isRotating]);

  const handleSelectLayer = (layer: 'enamel' | 'dentin' | 'pulp' | 'root' | 'all') => {
    setSelectedLayer(layer);
    if (onLayerChange) {
      onLayerChange(layer);
    }
  };

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white overflow-hidden shadow-2xl">
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
        <div>
          <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold">Interactive 3D Anatomy</span>
          <h3 className="text-base font-semibold text-white tracking-tight">Tooth Structure & Pain Origin</h3>
        </div>
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            isRotating ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'bg-slate-800 text-slate-400 hover:text-white'
          }`}
          title="Toggle Auto-Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>{isRotating ? 'Rotating' : 'Paused'}</span>
        </button>
      </div>

      {/* 3D Canvas Area */}
      <div className="relative w-full h-[360px] md:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing">
        {hasWebGL ? (
          <div ref={mountRef} className="w-full h-full" />
        ) : (
          <div className="text-center p-6 text-slate-400">
            <p className="text-sm">3D graphics require WebGL support.</p>
          </div>
        )}

        {/* Floating guidance overlay */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-400 pointer-events-none flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>Drag to rotate · Scroll to zoom</span>
        </div>
      </div>

      {/* Layer selector tabs */}
      <div className="px-5 py-3.5 border-t border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1">
          <Layers className="w-3.5 h-3.5 text-teal-400" />
          <span>Select Layer To Inspect Anatomy:</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
          {[
            { id: 'all', label: 'Complete Tooth', desc: 'Natural structure' },
            { id: 'enamel', label: 'Enamel', desc: 'Chipped/fractures' },
            { id: 'dentin', label: 'Dentin', desc: 'Thermal pain' },
            { id: 'pulp', label: 'Pulp & Nerve', desc: 'Throbbing ache' },
            { id: 'root', label: 'Root & Bone', desc: 'Abscess / trauma' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectLayer(item.id as any)}
              className={`text-left px-2.5 py-1.5 rounded-lg transition-all text-xs ${
                selectedLayer === item.id
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-md'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="font-medium truncate">{item.label}</div>
              <div className="text-[10px] opacity-75 truncate">{item.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
