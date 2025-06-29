import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadChair(scene) {
  const loader = new GLTFLoader();
  loader.load(
    '../../models/furniture/chair.glb',
    (gltf) => {
      const chair = gltf.scene;

      chair.position.set(-3, 0, -3);
      chair.rotation.y = Math.PI / 2;
      chair.scale.set(1.5, 1.5, 1.5);

      scene.add(chair);
    },
    undefined,
    (error) => console.error('椅子の読み込みエラー:', error)
  );
}
