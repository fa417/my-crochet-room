// load
window.addEventListener('load', () => {
  setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'none';
  }, 1000);
});
// 

/* room page - メニューボタン - */
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('menuItems').classList.toggle('active');
});

document.querySelectorAll('.room-menu-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const subMenu = this.nextElementSibling;
    if (subMenu) {
      if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
      } else {
        subMenu.style.display = 'block';
      }
    }
  });
});
// 

// diary page - アコーディオン -
function toggleDiary(el) {
  const content = el.nextElementSibling;
  content.classList.toggle("open");
}
// 

// item page - 商品写真切り替え -
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const newSrc = thumb.getAttribute('data-large');
    mainImage.setAttribute('src', newSrc);
  });
});

export { mainImage }
// 