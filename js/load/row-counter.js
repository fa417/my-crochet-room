import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadRowCounter(scene) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      '../../models/props/row-counter.glb',
      (gltf) => {
        const counter = gltf.scene;

        if (window.innerWidth <= 378) {
          counter.position.set(-3.5, 2.2, -3);
          counter.scale.set(0.8, 0.8, 0.8);
        } else if (window.innerWidth <= 768) {
          counter.position.set(-3.4, 2.2, -3);
          counter.scale.set(1, 1, 1);
        } else {
          counter.position.set(-3.5, 2.2, -3);
          counter.rotation.y = 1;
          counter.scale.set(1.2, 1.2, 1.2);
        }

        scene.add(counter);
        resolve(counter);
      },
      undefined,
      (error) => {
        console.error('段数マーカーの読み込みエラー:', error);
        reject(error);
      }
    );
  });
}
