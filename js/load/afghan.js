import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadAfghan(scene) {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      '../../models/props/afghan.glb',
      (gltf) => {
        const afghan = gltf.scene;

        if (window.innerWidth <= 378) {
          afghan.position.set(-3.9, 2.1, -2.7);
          afghan.rotation.y = 4.4;
          afghan.scale.set(1.5, 1.5, 1.5);
        } else if (window.innerWidth <= 768) {
          afghan.position.set(-3.9, 2.1, -2.6);
          afghan.rotation.y = 4.3;
          afghan.scale.set(1.5, 1.5, 1.5);
        } else {
          afghan.position.set(-4.1, 2.1, -2.5);
          afghan.rotation.y = 4;
          afghan.scale.set(1.7, 1.7, 1.7);
        }

        scene.add(afghan);
        resolve(afghan);
      },
      undefined,
      (error) => {
        console.error('アフガン編み棒の読み込みエラー:', error);
        reject(error);
      }
    );
  });
}
