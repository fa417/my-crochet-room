import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadBooks(scene, allBookGroup) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      '../../models/props/books.glb',
      (gltf) => {
        const books = gltf.scene;

        books.traverse((child) => {
          if (child.isGroup && ['t-book', 's-book', 'n-book', 'k-book'].includes(child.name)) {
            allBookGroup.push(child);
          }
          if (window.innerWidth <= 378) {
            child.scale.set(0.8, 0.8,0.8);
          } else if (window.innerWidth <= 768) {
            child.scale.set(0.8, 0.8, 0.8);
          } else {
           child.scale.set(1, 1, 1);
          }
        });

        if (window.innerWidth <= 378) {
          books.position.set(-4.8, 2.3, -3.2);
          books.scale.set(2.8, 2.8, 2.8);
          books.rotation.y = Math.PI / 2;
        } else if (window.innerWidth <= 768) {
          books.position.set(-4.8, 2.3, -3.2);
          books.scale.set(3, 3, 3);
          books.rotation.y = Math.PI / 2;
        } else {
          books.position.set(4, 3.5, -2.7);
          books.scale.set(3, 3, 3);
          books.rotation.y = Math.PI / -2;
        }



        scene.add(books);
        resolve(books);
      },
      undefined,
      (error) => {
        console.error('本の読み込みエラー:', error);
        reject(error);
      }
    );
  });
}

