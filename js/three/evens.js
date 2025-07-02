import {
  setCameraToDoor,
  setCameraToRoom,
  setCameraToChair,
  setCameraToBook,
  setCameraToDeskMobile,
  setCameraToDeskSmall
} from './cameraControls.js';

function handleInitialHashCameraMove() {
  const hash = window.location.hash;
  const width = window.innerWidth;

  if (hash === '#link-desk') {
    setCameraToChair();
  } else if (hash === '#sp-link-desk') {
    if (width <= 378) {
      setCameraToDeskSmall();
    } else {
      setCameraToDeskMobile();
    }
  } else if (hash === '#link-door') {
    setCameraToDoor();
  } else if (hash === '#link-room') {
    setCameraToRoom();
  } else if (hash === '#link-bookshelf') {
    setCameraToBook();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  handleInitialHashCameraMove(); // ✅ これ大事！

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
        e.preventDefault();
        action();
      });
    }
  });

  const spDeskBtn = document.getElementById('sp-link-desk');
  if (spDeskBtn) {
    spDeskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const width = window.innerWidth;

      if (width <= 378) {
        setCameraToDeskSmall();
      } else {
        setCameraToDeskMobile();
      }
    });
  }
});

