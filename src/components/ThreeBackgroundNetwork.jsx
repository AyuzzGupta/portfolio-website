import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackgroundNetwork() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    // Add subtle fog to fade things out in the distance
    scene.fog = new THREE.FogExp2(0x020205, 0.02);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 2. Create Network Particles
    const particlesCount = window.innerWidth > 768 ? 200 : 100;
    const maxDistance = 11.0; // Reduced density of intersections by ~15-20%

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const velocities = [];

    // Initialize particles
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60; // x
      positions[i + 1] = (Math.random() - 0.5) * 60; // y
      positions[i + 2] = (Math.random() - 0.5) * 30; // z

      velocities.push({
        x: (Math.random() - 0.5) * 0.035, // Slowed animation by ~30%
        y: (Math.random() - 0.5) * 0.035,
        z: (Math.random() - 0.5) * 0.035,
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material
    const material = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.15,
      transparent: true,
      opacity: 0.75, // Kept nodes mostly unchanged
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. Create Network Lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.27, // Slightly increased line opacity to make them visible
      blending: THREE.AdditiveBlending,
    });

    let linesMesh = new THREE.LineSegments(new THREE.BufferGeometry(), linesMaterial);
    scene.add(linesMesh);

    // 4. Track mouse for interaction
    const mouse = new THREE.Vector2();
    const targetMouse = new THREE.Vector3(0, 0, 0);
    let scrollY = 0;

    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      targetMouse.x = mouse.x * 20;
      targetMouse.y = mouse.y * 20;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 5. Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array;
      const linePositions = [];

      // Update particle positions
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // Apply velocities
        positions[i3] += velocities[i].x;
        positions[i3 + 1] += velocities[i].y;
        positions[i3 + 2] += velocities[i].z;

        // Boundary checks (bounce back)
        if (positions[i3] > 35 || positions[i3] < -35) velocities[i].x *= -1;
        if (positions[i3 + 1] > 35 || positions[i3 + 1] < -35) velocities[i].y *= -1;
        if (positions[i3 + 2] > 15 || positions[i3 + 2] < -15) velocities[i].z *= -1;

        // Mouse repulsion effect
        const dx = targetMouse.x - positions[i3];
        const dy = targetMouse.y - positions[i3 + 1];
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 8) {
          const force = (8 - distToMouse) / 8;
          positions[i3] -= dx * force * 0.01;
          positions[i3 + 1] -= dy * force * 0.01;
        }

        // Check connections against all OTHER nodes
        for (let j = i + 1; j < particlesCount; j++) {
          const j3 = j * 3;
          const distSq =
            Math.pow(positions[i3] - positions[j3], 2) +
            Math.pow(positions[i3 + 1] - positions[j3 + 1], 2) +
            Math.pow(positions[i3 + 2] - positions[j3 + 2], 2);

          if (distSq < maxDistance * maxDistance) {
            linePositions.push(
              positions[i3], positions[i3 + 1], positions[i3 + 2],
              positions[j3], positions[j3 + 1], positions[j3 + 2]
            );
          }
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;

      // Update lines geometry dynamically
      if (linesMesh.geometry) linesMesh.geometry.dispose();
      const newLinesGeo = new THREE.BufferGeometry();
      newLinesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesMesh.geometry = newLinesGeo;

      // Add a slight parallax effect based on mouse and scroll
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 2 - (scrollY * 0.01) - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 6. Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      linesMaterial.dispose();
      if (linesMesh.geometry) linesMesh.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden"
      style={{ 
        mixBlendMode: 'screen', 
        backgroundColor: '#020205',
        maskImage: 'radial-gradient(circle at 45% 50%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 65%)',
        WebkitMaskImage: 'radial-gradient(circle at 45% 50%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 65%)'
      }}
    />
  );
}
