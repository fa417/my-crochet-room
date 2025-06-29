import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadBookshelf(scene) {
  const loader = new GLTFLoader();
  loader.load(
    '../../models/furniture/bookshelf.glb',
    (gltf) => {
      const bookshelf = gltf.scene;

      bookshelf.position.set(4.2, 0, -3);
      bookshelf.rotation.y = Math.PI / -2;
      bookshelf.scale.set(2, 2, 2);

      scene.add(bookshelf);
    },
    undefined,
    (error) => console.error('本棚の読み込みエラー:', error)
  );
}
