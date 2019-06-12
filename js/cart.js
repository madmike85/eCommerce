const items = [
    {
        id: 1,
        title: 'La Sportiva Futura',
        img: 'la_futura.jpg',
        price: 13000,
        count: 1,
        totalCost: 13000
    },
    {
        id: 2,
        title: 'Ocun Ozone',
        img: 'ocun_ozone.jpg',
        price: 10000,
        count: 3,
        totalCost: 10000
    },
    {
        id: 3,
        title: 'Black Diamond Shadow',
        img: 'bd_shadow.jpg',
        price: 13000,
        count: 1,
        totalCost: 13000
    },
];


const cartContainer = document.querySelector('#cartContainer');
const cartTotalPrice = document.querySelector('.total-values');
const cart = document.querySelector('#cart');
const itemsTotal = document.querySelector('.items-intotal');
const cartEmpty = document.querySelector('.cart-empty');
const cartFull = document.querySelector('.cart-full');
const cartIcon = document.querySelector('.cart-icon');

const renderCartItem = function (item) {
    const markup = `
        <tr class="cart-item" data-productid="${item.id}">
            <td class="item">
                <img src="img/small/${item.img}" alt="${item.title}">
            </td>
            <td>
                <a href="product.html">${item.title}</a>
            </td>
            <td class="price">${item.price} руб.</td>
            <td class="qty">
                <div class="quantity">
                    <button class="minus-btn" type="button" name="button" data-click="minus">
                        -
                    </button>
                    <input type="text" name="name" value="${item.count}" id="count" data-count>
                    <button class="plus-btn" type="button" name="button" data-click="plus">
                        +
                    </button>
                </div>
            </td>
            <td class="sum" data-cost>${item.price * item.count} руб.</td>
            <td class="remove">
                <span class="x-remove" data-click="delete">x</span>
            </td>
        </tr>
    `;

    cartContainer.insertAdjacentHTML('beforeend', markup);
};

items.forEach(renderCartItem);

checkCart();
caltulateItemsTotal();
calculateTotalPrice();

function calculateTotalPrice() {
    let totalPrice = 0;
    items.forEach(function (element) {
        const thisPrice = element.count * element.price;
        totalPrice += thisPrice;
    });

    cartTotalPrice.innerText = `${totalPrice} руб`;
};

function caltulateItemsTotal() {
    itemsTotal.innerText = `Готовые к заказу (${items.length})`;
};

function checkCart() {
    if (items.length > 0) {
        cartEmpty.style.display = 'none';
        cartFull.style.display = 'block';
        cartIcon.classList.add('badge');
        cartIcon.dataset.count = items.length;
    } else {
        cartEmpty.style.display = 'block';
        cartFull.style.display = 'none';
        cartIcon.classList.remove('badge');
    }
};

const updateItemCounter = function (id, type) {
    const itemIndex = items.findIndex(function (element) {
        if (element.id == id) {
            return true;
        }
    });

    let count = items[itemIndex].count;

    if (type == 'minus') {
        if (count - 1 > 0) {
            count--;
            items[itemIndex].count = count;
            items[itemIndex].totalCost = count * items[itemIndex].price;
        }
    }

    if (type == 'plus') {
        count++;
        items[itemIndex].count = count;
        items[itemIndex].totalCost = count * items[itemIndex].price;
    }

    calculateTotalPrice();

    const countToShow = items[itemIndex].count;
    const currentProduct = cart.querySelector('[data-productid="' + id + '"]');
    const counter = currentProduct.querySelector('[data-count]');
    counter.value = countToShow;

    const totalItemsPrice = currentProduct.querySelector('[data-cost]');
    totalItemsPrice.innerText = `${items[itemIndex].totalCost} руб`;


};

const deleteItem = function (id) {
    const itemIndex = items.findIndex(function (element) {
        if (element.id == id) {
            return true;
        }
    });

    items.splice(itemIndex, 1);
    cartContainer.innerHTML = '';
    items.forEach(renderCartItem);
    checkCart();
    caltulateItemsTotal();
    calculateTotalPrice();
};


cart.addEventListener('click', function (e) {
    if (e.target.matches('[data-click="minus"]')) {
        const id = e.target.closest('[data-productid]').dataset.productid;
        updateItemCounter(id, 'minus');
    } else if (e.target.matches('[data-click="plus"]')) {
        const id = e.target.closest('[data-productid]').dataset.productid;
        updateItemCounter(id, 'plus');
    } else if (e.target.matches('[data-click="delete"]')) {
        const id = e.target.closest('[data-productid]').dataset.productid;
        deleteItem(id);
    }
});
