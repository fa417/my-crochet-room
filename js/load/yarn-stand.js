import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadYarnStand(scene) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      '../../models/props/yarn-stand.glb',
      (gltf) => {
        const yarn = gltf.scene;

        if (window.innerWidth <= 378) {
          yarn.position.set(-3.7, 2.2, -2.4);
          yarn.rotation.y = 0;
          yarn.scale.set(1.3, 1.3, 1.3);
        } else if (window.innerWidth <= 768) {
          yarn.position.set(-3.9, 2.2, -2.3);
          yarn.rotation.y = 0;
          yarn.scale.set(1.4, 1.4, 1.4);
        } else {
          yarn.position.set(-4.5, 2.2, -2.2);
          yarn.rotation.y = 0;
          yarn.scale.set(2, 2, 2);
        }

        scene.add(yarn);
        resolve(yarn);
      },
      undefined,
      (error) => {
        console.error('毛糸スタンドの読み込みエラー:', error);
        reject(error);
      }
    );
  });
}
