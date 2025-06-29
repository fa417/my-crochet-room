import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadMajor(scene) {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      '../../models/props/major.glb',
      (gltf) => {
        const major = gltf.scene;

        if (window.innerWidth <= 378) {
          major.position.set(-4.3, 2.1, -3.3);
          major.rotation.y = 3;
          major.scale.set(0.9, 0.9, 0.9);
        } else if (window.innerWidth <= 768) {
          major.position.set(-4.3, 2.1, -3.3);
          major.rotation.y = 3;
          major.scale.set(0.9, 0.9, 0.9);
        } else {
          major.position.set(-4.5, 2.1, -3.4);
          major.rotation.y = 3;
          major.scale.set(1, 1, 1);
        }

        scene.add(major);
        resolve(major); // Promise成功時にmajorオブジェクトを返す
      },
      undefined,
      (error) => {
        console.error('メジャーの読み込みエラー:', error);
        reject(error); // Promise失敗時にエラーを返す
      }
    );
  });
}
