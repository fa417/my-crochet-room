// import { setCameraToDeskMobile, setCameraToDeskSmall } from './cameraControls.js';

// export function setupResponsiveBehavior() {
//   function updateUI() {
//     const width = window.innerWidth;


//     if (width <= 768) {

//       if (width <= 378) {
//         setCameraToDeskSmall();
//       } else {
//         setCameraToDeskMobile();
//       }

//       document.querySelectorAll('.menu-door, .menu-room, .menu-bookshelf').forEach(el => {
//         el.style.display = 'none';
//       });

//     } else {

//       document.querySelectorAll('.menu-door, .menu-room, .menu-bookshelf').forEach(el => {
//         el.style.display = '';
//       });
//     }
//   }

//   window.addEventListener('resize', () => {
//     updateUI();
//   });
//   window.addEventListener('load', () => {
//     updateUI();
//   });
// }

import {
  setCameraToChair,
  setCameraToDeskMobile,
  setCameraToDeskSmall
} from './cameraControls.js';

document.addEventListener('DOMContentLoaded', () => {
  // link-desk だけ幅によってカメラ視点を切り替える
  const deskBtn = document.getElementById('link-desk');
  if (deskBtn) {
    deskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const width = window.innerWidth;

      if (width <= 378) {
        setCameraToDeskSmall();
      } else if (width <= 768) {
        setCameraToDeskMobile();
      } else {
        setCameraToChair(); // PC視点
      }
    });
  }

  // 他のボタン処理（ドア・部屋・本棚）
  const buttonActions = [
    { id: 'link-door', action: setCameraToDoor },
    { id: 'link-room', action: setCameraToRoom },
    { id: 'link-bookshelf', action: setCameraToBook }
  ];

  buttonActions.forEach(({ id, action }) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        action();
      });
    }
  });
});

