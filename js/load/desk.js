import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadDesk(scene) {
  const loader = new GLTFLoader();
  loader.load(
    '../../models/furniture/desk.glb',
    (gltf) => {
      const desk = gltf.scene;

      desk.position.set(-4.1, 0, -3);
      desk.rotation.y = Math.PI / 2;
      desk.scale.set(0.9, 1.5, 1.5);

      scene.add(desk);
    },
    undefined,
    (error) => console.error('机の読み込みエラー:', error)
  );
}
