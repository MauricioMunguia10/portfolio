import * as THREE from "three";

export default function initAnimation(container) {
  let scene, camera, renderer;

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer
  if (typeof document !== "undefined") {
    // Verificar si estamos en un entorno con DOM
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
  }

  // Example: Adding a cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    if (renderer) {
      // Verificar si el renderer está definido
      renderer.render(scene, camera);
    }
  };

  animate();

  // Clean up
  return () => {
    if (renderer) {
      renderer.dispose();
    }
    scene = null;
    camera = null;
  };
}
