import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadScissors(scene) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      '../../models/props/scissors.glb',
      (gltf) => {
        const scissors = gltf.scene;

        if (window.innerWidth <= 378) {
          scissors.position.set(-3.5, 2.1, -3.5);
          scissors.rotation.y = 4.4;
          scissors.scale.set(1.1, 1.1, 1.1);
        } else if (window.innerWidth <= 768) {
          scissors.position.set(-3.7, 2.1, -3.6);
          scissors.rotation.y = 4.4;
          scissors.scale.set(1.2, 1.2, 1.2);
        } else {
          scissors.position.set(-3.6, 2.1, -3.7);
          scissors.rotation.y = 4.4;
          scissors.scale.set(1.3, 1.3, 1.3);
        }

        scene.add(scissors);
        resolve(scissors);
      },
      undefined,
      (error) => {
        console.error('はさみの読み込みエラー:', error);
        reject(error);
      }
    );
  });
}
