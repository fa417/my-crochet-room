import * as THREE from 'three';
import {
  currentStage,
  scene,
  // camera,
  // allBookGroup,
  // raycaster,
  setCameraToDoor,
  setCameraToRoom,
  setCameraToDesk,
  setCameraToChair,
  setCameraToBook,
  setCameraToBookshelf
} from './cameraControls.js';


document.getElementById('btnRoom').addEventListener('click', setCameraToRoom);
document.getElementById('btnDesk').addEventListener('click', setCameraToDesk);
document.getElementById('btnBookshelf').addEventListener('click', setCameraToBookshelf);
document.getElementById('btnChoose').addEventListener('click', setCameraToBook);
document.getElementById('btnChair').addEventListener('click', setCameraToChair);

// 戻るボタン
document.getElementById('btnBack').addEventListener('click', () => {
  if (currentStage === 'room') {
    setCameraToDoor();
  } else if (currentStage === 'bookshelf' || currentStage === 'desk') {
    setCameraToRoom();
  } else if (currentStage === 'book') {
    setCameraToBookshelf();
  } else if (currentStage === 'chair') {
    setCameraToDesk();
  }
});
// 

// 照明 ON/OFF
const light = new THREE.PointLight(0xffeecc, 0);
light.position.set(-4.1, 4.5, 2);
scene.add(light);
let lightOn = false;
const lightButton = document.getElementById('toggleLight');

lightButton.addEventListener('click', () => {

  lightOn = !lightOn;

  if (lightOn) {
    light.intensity = 1.2;
    lightButton.textContent = 'ライトを消す';
  } else {
    light.intensity = 0;
    lightButton.textContent = 'ライトをつける';
  }
});
// 

// 768px以下、非表示
if (window.innerWidth <= 768) {
  document.querySelectorAll('.menu-door, .menu-room, .menu-bookshelf').forEach(el => {
    el.style.display = 'none';
  });
}

