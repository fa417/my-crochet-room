import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadNeedle(scene) {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      '../../models/props/needle.glb',
      (gltf) => {
        const needle = gltf.scene;

        if (window.innerWidth <= 378) {
          needle.position.set(-4.2, 2.1, -3.7);
          needle.rotation.y = -1;
          needle.scale.set(1.4, 1.4, 1.4);
        } else if (window.innerWidth <= 768) {
          needle.position.set(-4.3, 2.1, -3.8);
          needle.rotation.y = -1;
          needle.scale.set(1.4, 1.4, 1.4);
        } else {
          needle.position.set(-4.4, 2.1, -3.9);
          needle.rotation.y = -1;
          needle.scale.set(1.6, 1.6, 1.6);
        }

        scene.add(needle);
        resolve(needle);
      },
      undefined,
      (error) => {
        console.error('針山の読み込みエラー:', error);
        reject(error);
      }
    );
  });
}
