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
  setCameraToDeskSmall,
} from './cameraControls.js';

document.addEventListener('DOMContentLoaded', () => {
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
        setCameraToChair(); // PC用視点
      }
    });
  }
});


