import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 2. Add Scattered Starfield
    const starsCount = 400;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    const starOpacities = new Float32Array(starsCount);

    for (let i = 0; i < starsCount * 3; i += 3) {
      // Scatter in a box around the camera
      starPositions[i] = (Math.random() - 0.5) * 30; // x
      starPositions[i + 1] = (Math.random() - 0.5) * 30; // y
      starPositions[i + 2] = (Math.random() - 0.5) * 20 - 5; // z
      starOpacities[i / 3] = Math.random();
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    // Custom star particle shader or points material
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 3. Create Floating 3D Wireframe Shapes
    // Shape 1: TorusKnot (Top Left, complex)
    const shape1Geo = new THREE.TorusKnotGeometry(1.2, 0.4, 64, 8);
    const shape1Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const shape1 = new THREE.Mesh(shape1Geo, shape1Mat);
    shape1.position.set(-4.5, 2.5, -2);
    scene.add(shape1);

    // Shape 2: Torus (Bottom Right)
    const shape2Geo = new THREE.TorusGeometry(1.5, 0.5, 16, 32);
    const shape2Mat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const shape2 = new THREE.Mesh(shape2Geo, shape2Mat);
    shape2.position.set(4, -3, -3);
    scene.add(shape2);

    // Shape 3: Icosahedron (Middle Right)
    const shape3Geo = new THREE.IcosahedronGeometry(1.4, 0);
    const shape3Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const shape3 = new THREE.Mesh(shape3Geo, shape3Mat);
    shape3.position.set(3.5, 2.5, -4);
    scene.add(shape3);

    // Shape 4: Tetrahedron (Bottom Left)
    const shape4Geo = new THREE.TetrahedronGeometry(1.2, 0);
    const shape4Mat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const shape4 = new THREE.Mesh(shape4Geo, shape4Mat);
    shape4.position.set(-4, -2.5, -4);
    scene.add(shape4);

    // 4. Track mouse and scroll state for parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e) => {
      // Normalize mouse to -1 to 1
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 5. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Rotate shapes slowly, with scroll position influencing rotation
      shape1.rotation.x = elapsedTime * 0.06 + scrollY * 0.0005;
      shape1.rotation.y = elapsedTime * 0.09 + scrollY * 0.0003;

      shape2.rotation.x = elapsedTime * 0.04 - scrollY * 0.0004;
      shape2.rotation.y = elapsedTime * 0.05 + scrollY * 0.0002;

      shape3.rotation.x = elapsedTime * 0.08 + scrollY * 0.0003;
      shape3.rotation.y = elapsedTime * 0.04 - scrollY * 0.0005;
      shape3.rotation.z = elapsedTime * 0.03 + scrollY * 0.0002;

      shape4.rotation.x = elapsedTime * 0.05 - scrollY * 0.0006;
      shape4.rotation.y = elapsedTime * 0.07 + scrollY * 0.0004;


      // Drift positions slightly
      shape1.position.y = 2.5 + Math.sin(elapsedTime * 0.5) * 0.2;
      shape2.position.y = -3 + Math.cos(elapsedTime * 0.4) * 0.15;
      shape3.position.y = 2.5 + Math.sin(elapsedTime * 0.3) * 0.25;
      shape4.position.y = -2.5 + Math.cos(elapsedTime * 0.6) * 0.15;

      // Parallax interpolation (Lerp)
      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.4 - targetY) * 0.05;
      // Reduce the scroll translation effect so shapes stay in viewport
      targetScrollY += (scrollY * 0.0005 - targetScrollY) * 0.08;

      // Apply parallax coordinates to camera position
      camera.position.x = targetX;
      camera.position.y = -targetY - targetScrollY;
      camera.lookAt(0, 0, 0);


      // Rotate starfield points slightly
      starField.rotation.y = elapsedTime * 0.01;
      starField.rotation.x = elapsedTime * 0.005;

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
      // Dispose resources
      starGeometry.dispose();
      starMaterial.dispose();
      shape1Geo.dispose();
      shape1Mat.dispose();
      shape2Geo.dispose();
      shape2Mat.dispose();
      shape3Geo.dispose();
      shape3Mat.dispose();
      shape4Geo.dispose();
      shape4Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
