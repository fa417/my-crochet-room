import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { loadBookshelf } from '../load/bookshelf.js';
import { loadDesk } from '../load/desk.js';
import { loadChair } from '../load/chair.js';
import { loadBooks } from '../load/books.js';
import { loadIllumination } from '../load/illumination.js';
import { loadMajor } from '../load/major.js';
import { loadScissors } from '../load/scissors.js';
import { loadNeedle } from '../load/needle.js';
import { loadAfghan } from '../load/afghan.js';
import { loadRowCounter } from '../load/row-counter.js';
import { loadYarnStand } from '../load/yarn-stand.js';
import { setupResponsiveBehavior } from './responsive.js';


const scene = new THREE.Scene();

// 初期カメラ
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 3, 9);
camera.lookAt(0, 3, 0);
camera.updateProjectionMatrix();

let currentStage = 'door';

window.addEventListener('DOMContentLoaded', () => {
  setCameraToDoor();
  showOnlyControls('controls-door');
  setupResponsiveBehavior();
});
//

function showOnlyControls(idToShow) {
  const controlsIds = ['controls-door', 'controls-room', 'controls-bookshelf', 'controls-chair'];
  controlsIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = (id === idToShow) ? 'block' : 'none';
    }
  });

  const backBtn = document.getElementById('controls-back');
  if (backBtn) {
    backBtn.style.display = (currentStage === 'door') ? 'none' : 'block';
  }
}


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1; // 明るさ
document.body.appendChild(renderer.domElement);


scene.add(new THREE.AmbientLight(0xffffff, 0.5));

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

const loader = new GLTFLoader();
loader.load(
  '../../models/furniture/room.glb',
  (gltf) => {
    scene.add(gltf.scene);
    handleInitialHashCameraMove();
  },
  undefined,
  (error) => {
    console.error('GLTF読み込みエラー:', error);
  }
);

function handleInitialHashCameraMove() {
  const hash = window.location.hash;
  if (hash === '#link-room') {
    setCameraToRoom();
  } else if (hash === '#link-door') {
    setCameraToDoor();
  } else if (hash === '#link-desk') {
    setCameraToChair();
  } else if (hash === '#link-bookshelf') {
    setCameraToBook();
  }
}


const tooltip = document.getElementById('tooltip');
export const toolObjects = [];

const allBookGroup = [];
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

loadBookshelf(scene);
loadDesk(scene);
loadChair(scene);
loadBooks(scene, allBookGroup);
loadIllumination(scene);
loadMajor(scene);
loadScissors(scene);
loadNeedle(scene);
loadAfghan(scene);
loadYarnStand(scene);
loadRowCounter(scene);
// loadBooksStand(scene);

import { handleBookHover } from './hoverBooks.js';

function animate() {
  requestAnimationFrame(animate);

  handleBookHover();

  renderer.render(scene, camera);
}

animate();

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});


// ボタンイベント
// ドアの前
function setCameraToDoor() {
  camera.fov = 70;
  camera.updateProjectionMatrix();
  camera.position.set(0, 3, 12);
  camera.lookAt(0, 3, 0);
  currentStage = 'door';
  showOnlyControls('controls-door');
}
//

// 部屋
function setCameraToRoom() {
  camera.fov = 70;
  camera.updateProjectionMatrix();
  camera.position.set(0, 3, 2);
  camera.lookAt(0, 3, 0);
  currentStage = 'room';
  showOnlyControls('controls-room');
}
//

// 机
function setCameraToDesk() {
  camera.fov = 80;
  camera.updateProjectionMatrix();
  camera.position.set(2, 3, -3);
  camera.lookAt(-5, 3, -3);
  currentStage = 'desk';
  showOnlyControls('controls-chair');
}
//

// 椅子
function setCameraToChair() {
  camera.fov = 20;
  camera.updateProjectionMatrix();
  camera.position.set(0, 4, -3);
  camera.lookAt(-6, 1.2, -3);
  currentStage = 'chair';
  showOnlyControls(null);
}
// 

// 本棚
function setCameraToBookshelf() {
  camera.fov = 100;
  camera.updateProjectionMatrix();
  camera.position.set(0, 3.5, -1);
  camera.lookAt(4000, 3.5, -70);
  currentStage = 'bookshelf';
  showOnlyControls('controls-bookshelf');
}
// 

// 本ズーム
function setCameraToBook() {
  camera.fov = 50;
  camera.updateProjectionMatrix();
  camera.position.set(2, 4, -3);
  camera.lookAt(6, 3.3, -3);
  currentStage = 'book';
  showOnlyControls(null);
}
//

// 768px以下
function setCameraToDeskMobile() {
  camera.fov = 20;
  camera.updateProjectionMatrix();
  camera.position.set(0, 4.2, -3);
  camera.lookAt(-6, 1.3, -3);
}
//

// 378px以下机
function setCameraToDeskSmall() {
  camera.fov = 28;
  camera.updateProjectionMatrix();
  camera.position.set(0, 3.5, -3);
  camera.lookAt(-6, 1.85, -3);
}
//

export {
  mouse,
  currentStage,
  scene,
  camera,
  allBookGroup,
  raycaster,
  renderer,
  setCameraToDoor,
  setCameraToRoom,
  setCameraToDesk,
  setCameraToChair,
  setCameraToBook,
  setCameraToBookshelf,
  setCameraToDeskMobile,
  setCameraToDeskSmall,
  loadMajor,
  loadScissors,
  loadNeedle,
  loadAfghan,
  loadYarnStand,
  loadRowCounter,
  tooltip
};