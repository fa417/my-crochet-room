window.addEventListener('DOMContentLoaded', () => {
    const cartItem = document.getElementById('cart-items');
    const cartDate = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartDate.length === 0) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error');
        errorMessage.textContent = 'カートには何も追加されていません。';
        cartItem.appendChild(errorMessage);
        return;
    }

    cartDate.forEach((itemDate, index) => {
        const item = document.createElement('div');
        item.classList.add('addition-item');

        const image = document.createElement('img');
        image.classList.add('front-image');
        image.src = itemDate.image;
        image.alt = itemDate.name;
        item.appendChild(image);

        const infoWrapper = document.createElement('div');
        infoWrapper.classList.add('info-wrapper');
        item.appendChild(infoWrapper);

        const name = document.createElement('p');
        name.classList.add('merchandise-name');
        name.textContent = `${itemDate.name}`;
        infoWrapper.appendChild(name);

        const color = document.createElement('p');
        color.classList.add('merchandise-color');
        color.textContent = `color：${itemDate.color}`;
        infoWrapper.appendChild(color);

        const price = document.createElement('p');
        price.classList.add('merchandise-price');
        price.textContent = `price：${itemDate.price}`;
        infoWrapper.appendChild(price);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-button');
        deleteBtn.textContent = '削除';
        infoWrapper.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            cartDate.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartDate));
            location.reload();
        });


        cartItem.appendChild(item);
    });

});
