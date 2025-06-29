import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadIllumination(scene) {
  const loader = new GLTFLoader();
  loader.load(
    '../../models/furniture/illumination.glb',
    (gltf) => {
      const illumination = gltf.scene;

      illumination.position.set(-4.1, 0, 2);
      illumination.rotation.y = -1.4;
      illumination.scale.set(2.3,2.3,2.3);

      scene.add(illumination);
    },
    undefined,
    (error) => console.error('本の読み込みエラー:', error)
  );
}
