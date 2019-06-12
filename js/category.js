const items = [
    {
        id: 1,
        title: 'La Sportiva Futura',
        img: 'la_futura.jpg',
        price: 13000,
        discont: 0.15,
        inStock: 6,
        sale: false,
        new: false,
    },
    {
        id: 2,
        title: 'La Sportiva Skwama',
        img: 'la_skwama.jpg',
        price: 11000,
        discont: 0.15,
        inStock: 12,
        sale: false,
        new: true,
    },
    {
        id: 3,
        title: 'La Sporiva Gripit',
        img: 'la_gripit.jpg',
        price: 9000,
        discont: 0.15,
        inStock: 5,
        sale: true,
        new: false,
    },
    {
        id: 4,
        title: '5.10 Hiangle',
        img: '5-10_hiangle.jpg',
        price: 11500,
        discont: 0.15,
        inStock: 2,
        sale: false,
        new: true,
    },
    {
        id: 5,
        title: 'Black Diamond Shadow',
        img: 'bd_shadow.jpg',
        price: 13000,
        discont: 0.15,
        inStock: 2,
        sale: false,
        new: false,
    },
    {
        id: 6,
        title: 'Evolv Ashima',
        img: 'evolv_ashima.jpg',
        price: 9500,
        discont: 0.15,
        inStock: 12,
        sale: true,
        new: false,
    },
    {
        id: 7,
        title: 'Mad Rock Lotus',
        img: 'mad_lotus.jpg',
        price: 8000,
        discont: 0.15,
        inStock: 11,
        sale: true,
        new: false,
    },
    {
        id: 8,
        title: 'Ocun Ozone',
        img: 'ocun_ozone.jpg',
        price: 10000,
        discont: 0.15,
        inStock: 10,
        sale: false,
        new: false,
    },
    {
        id: 9,
        title: 'So ILL Runner',
        img: 'sill_runner.jpg',
        price: 15000,
        discont: 0.15,
        inStock: 12,
        sale: false,
        new: true,
    },
    {
        id: 10,
        title: 'Boreal Alpha',
        img: 'boreal_alpha.jpg',
        price: 10000,
        discont: 0.15,
        inStock: 5,
        sale: false,
        new: false,
    },
    {
        id: 11,
        title: 'Scarpa Chimera',
        img: 'scarpa_chimera.jpg',
        price: 11000,
        discont: 0.15,
        inStock: 5,
        sale: true,
        new: false,
    },
    {
        id: 12,
        title: 'Scarpa Mago',
        img: 'scarpa_mago.jpg',
        price: 12000,
        discont: 0.15,
        inStock: 2,
        sale: false,
        new: true,
    },
];

const goodsContainer = document.querySelector('#goodsContainer');
const cartIcon = document.querySelector('.cart-icon');
let itemsInCart = 3;

const renderCategoryItems = function (item) {

    if (item.sale) {
        const markup = `
            <div class="grid-item" data-productid="${item.id}">
                <div class="item-img">
                    <a href="product.html"><img src="img/small/${item.img}" alt="${item.title}"></a>
                </div>
                <div class="ribbon">
                    <span class="red">sale</span>
                </div>
                <div class="item-title">
                    <a href="product.html">${item.title}</a>
                </div>
                <div class="item-price">
                    <span class="original-price sale">${item.price} руб.</span>
                    <span class="discount-price">${item.price - item.price * item.discont} руб.</span>
                </div>
                <div class="is-avaliable">
                    <i class="fas fa-check"></i> в наличии
                </div>
                <button class="buy-btn" type="button" name="buy-btn" data-click="addToCart">
                    в корзину
                </button>
            </div>
        `;

        goodsContainer.insertAdjacentHTML('beforeend', markup);

    } else if (item.new) {
        const markup = `
            <div class="grid-item" data-productid="${item.id}">
                <div class="item-img">
                    <a href="product.html"><img src="img/small/${item.img}" alt="${item.title}"></a>
                </div>
                <div class="ribbon">
                    <span class="green">new</span>
                </div>
                <div class="item-title">
                    <a href="product.html">${item.title}</a>
                </div>
                <div class="item-price">
                    <span class="original-price">${item.price} руб.</span>
                    <span class="discount-price hidden">${item.price - item.price * item.discont} руб.</span>
                </div>
                <div class="is-avaliable">
                    <i class="fas fa-check"></i> в наличии
                </div>
                <button class="buy-btn" type="button" name="buy-btn" data-click="addToCart">
                    в корзину
                </button>
            </div>
        `;

        goodsContainer.insertAdjacentHTML('beforeend', markup);
    } else {
        const markup = `
            <div class="grid-item" data-productid="${item.id}">
                <div class="item-img">
                    <a href="product.html"><img src="img/small/${item.img}" alt="${item.title}"></a>
                </div>
                <div class="item-title">
                    <a href="product.html">${item.title}</a>
                </div>
                <div class="item-price">
                    <span class="original-price">${item.price} руб.</span>
                    <span class="discount-price hidden">${item.price - item.price * item.discont} руб.</span>
                </div>
                <div class="is-avaliable">
                    <i class="fas fa-check"></i> в наличии
                </div>
                <button class="buy-btn" type="button" name="buy-btn" data-click="addToCart">
                    в корзину
                </button>
            </div>
        `;

        goodsContainer.insertAdjacentHTML('beforeend', markup);
    }


};

items.forEach(renderCategoryItems);

const addToCart = function (id) {
    const itemIndex = items.findIndex(function (element) {
        if (element.id == id) {
            return true;
        }
    });
    
    itemsInCart++;
    cartIcon.dataset.count = itemsInCart;
};

goodsContainer.addEventListener('click', function (e) {
    if (e.target.matches('[data-click="addToCart"]')) {
        const id = e.target.closest('[data-productid]').dataset.productid;
        addToCart(id);
    }
});
                