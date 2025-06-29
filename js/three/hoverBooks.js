import {
  camera,
  raycaster,
  mouse,
  allBookGroup
} from './cameraControls.js';

let hoveredObject = null;

const menu = document.querySelector('.room-menu-area');

function isOverMenu(target) {
  return menu && menu.contains(target);
}

function getParentGroup(mesh, groups) {
  let obj = mesh;
  while (obj) {
    if (groups.includes(obj)) return obj;
    obj = obj.parent;
  }
  return null;
}

// 本 hover
function handleBookHover() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(allBookGroup, true);

  if (intersects.length > 0) {
    const firstMesh = intersects[0].object;
    const parentGroup = getParentGroup(firstMesh, allBookGroup);

    if (hoveredObject !== parentGroup) {
      if (hoveredObject) hoveredObject.scale.set(1, 1, 1);
      hoveredObject = parentGroup;
      hoveredObject.scale.set(1.1, 1.1, 1.1);
    }

    document.body.style.cursor = 'pointer';
  } else {
    if (hoveredObject) {
      hoveredObject.scale.set(1, 1, 1);
      hoveredObject = null;
    }
    document.body.style.cursor = 'default';
  }
}

window.addEventListener('mousemove', (event) => {
  if (isOverMenu(event.target)) {
    if (hoveredObject) {
      hoveredObject.scale.set(1, 1, 1);
      hoveredObject = null;
    }
    document.body.style.cursor = 'default';
    return;
  }

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  handleBookHover();
});

let isClick = false;
let downPos = { x: 0, y: 0 };

window.addEventListener('mousedown', (event) => {
  if (isOverMenu(event.target)) {
    isClick = false;
    return;
  }
  isClick = true;
  downPos = { x: event.clientX, y: event.clientY };
});

window.addEventListener('mousemove', (event) => {
  if (isOverMenu(event.target)) {
    isClick = false;
    return;
  }

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  if (Math.abs(event.clientX - downPos.x) > 5 || Math.abs(event.clientY - downPos.y) > 5) {
    isClick = false;
  }

  handleBookHover();
});

window.addEventListener('click', (event) => {
  if (isOverMenu(event.target)) return;
  if (!isClick) return;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(allBookGroup, true);

  if (intersects.length > 0) {
    let selected = intersects[0].object;
    while (selected && !['t-book', 's-book', 'n-book', 'k-book'].includes(selected.name)) {
      selected = selected.parent;
    }
    if (selected) {
      handleBookClick(selected.name);
    }
  }
});

// ページリンク
function handleBookClick(name) {
  switch (name) {
    case 't-book':
      window.location.href = '../../html/products/amigurumi/amigurumi-forest.html';
      break;
    case 's-book':
      window.location.href = '../../html/products/life/little-forest-life.html';
      break;
    case 'n-book':
      window.location.href = '../../html/products/knit/knit-journal.html';
      break;
    case 'k-book':
      window.location.href = '../../html/products/daily/everyday-things.html';
      break;
    default:
      console.log('リンクなし');
  }
}

export { handleBookHover };
