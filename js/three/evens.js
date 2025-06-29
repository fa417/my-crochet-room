import {
  setCameraToDoor,
  setCameraToRoom,
  setCameraToChair,
  setCameraToBook,
} from './cameraControls.js';

document.addEventListener('DOMContentLoaded', () => {
  // クリックイベントでカメラ移動
  const buttonActions = [
    { id: 'link-door', action: setCameraToDoor },
    { id: 'link-room', action: setCameraToRoom },
    { id: 'link-desk', action: setCameraToChair },
    { id: 'link-bookshelf', action: setCameraToBook },
  ];

  buttonActions.forEach(({ id, action }) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); // aタグのデフォルト動作（ページジャンプ）を防ぐ
        action();
      });
    }
  });
});
