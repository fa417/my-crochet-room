import {
  scene,
  raycaster,
  camera,
  mouse,
  toolObjects,
  loadMajor,
  loadScissors,
  loadNeedle,
  loadAfghan,
  loadYarnStand,
  loadRowCounter
} from './cameraControls.js'

// hover
loadMajor(scene).then((obj) => {
  obj.name = "How to Use";
  toolObjects.push(obj);

  obj.traverse(child => {
    if (child.isMesh) {
      child.name = obj.name;
      toolObjects.push(child);
    }
  });
});

loadScissors(scene).then((obj) => {
  obj.name = "Contact";
  toolObjects.push(obj);

  obj.traverse(child => {
    if (child.isMesh) {
      child.name = obj.name;
      toolObjects.push(child);
    }
  });
});

loadNeedle(scene).then((obj) => {
  obj.name = "FAQ";
  toolObjects.push(obj);

  obj.traverse(child => {
    if (child.isMesh) {
      child.name = obj.name;
      toolObjects.push(child);
    }
  });
});

loadAfghan(scene).then((obj) => {
  obj.name = "Glossary";
  toolObjects.push(obj);

  obj.traverse(child => {
    if (child.isMesh) {
      child.name = obj.name;
      toolObjects.push(child);
    }
  });
});

loadYarnStand(scene).then((obj) => {
  obj.name = "About";
  toolObjects.push(obj);

  obj.traverse(child => {
    if (child.isMesh) {
      child.name = obj.name;
      toolObjects.push(child);
    }
  });
});

loadRowCounter(scene).then((obj) => {
  obj.name = "Diary";
  toolObjects.push(obj);

  obj.traverse(child => {
    if (child.isMesh) {
      child.name = obj.name;
      toolObjects.push(child);
    }
  });
});

function findNamedParent(object) {
  let obj = object;
  while (obj) {
    if (obj.name && obj.name !== '') {
      return obj;
    }
    obj = obj.parent;
  }
  return null;
}

// ページリンク
const toolLinks = {
  "How to Use": "../../html/use.html",
  "Contact": "../../html/contact.html",
  "FAQ": "../../html/faq.html",
  "Glossary": "../../html/glossary.html",
  "About": "../../html/about.html",
  "Diary": "../../html/diary.html"
};

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(toolObjects, true);

  if (intersects.length > 0) {
    const namedObj = findNamedParent(intersects[0].object);
    if (namedObj && toolLinks[namedObj.name]) {
      document.body.style.cursor = 'pointer';
      return;
    }
  }
  document.body.style.cursor = 'default';
});

// PC用
const menu = document.querySelector('.room-menu-area');

window.addEventListener('click', (event) => {
  if (menu && menu.contains(event.target)) {
    return; // メニューがクリックされたら 3D 処理を無視
  }

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(toolObjects, true);

  if (intersects.length > 0) {
    const namedObj = findNamedParent(intersects[0].object);
    if (namedObj && toolLinks[namedObj.name]) {
      window.location.href = toolLinks[namedObj.name];
    }
  }
});
// 

// SP用
window.addEventListener('touchend', (event) => {
  if (menu && event.target && menu.contains(event.target)) {
    return;
  }

  if (event.changedTouches.length > 0) {
    const touch = event.changedTouches[0];
    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(toolObjects, true);

    if (intersects.length > 0) {
      const namedObj = findNamedParent(intersects[0].object);
      if (namedObj && toolLinks[namedObj.name]) {
        window.location.href = toolLinks[namedObj.name];
      }
    }
  }
});
// 


