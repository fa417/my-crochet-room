import { mainImage } from "./menu.js";

const purchaseBtn = document.getElementById('purchase-btn');
const productName = document.getElementById('product-name');
const productColor = document.getElementById('product-color');
const colorSelect = document.getElementById('color-select');
const productPrice = document.getElementById('product-price');

purchaseBtn.addEventListener('click', () => {

    let color;

    if (colorSelect) {
        color = colorSelect.value;
    } else if (productColor) {
        color = productColor.textContent;
    }

    const item = {
        image: mainImage.src,
        name: productName.textContent,
        color: color,
        price: productPrice.textContent,
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push(item);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    function showMessage() {
        const topMessage = document.createElement('p');
        topMessage.textContent = `商品が追加されました。`;
        topMessage.classList.add('top-message');
        document.body.appendChild(topMessage);

        // setTimeout(() => {
        //     topMessage.remove();
        // }, 3000);
    }

    showMessage();
});