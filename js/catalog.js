const items = [
    {
        title: 'Веревки',
        img: 'climbing-rope.jpg'
    },
    {
        title: 'Скальные туфли',
        img: 'climbing-shoes.jpg'
    },
    {
        title: 'Оттяжки',
        img: 'quick-draw.jpg'
    },
    {
        title: 'Карабины',
        img: 'carabiner.jpg'
    },
    {
        title: 'Страховочные системы',
        img: 'harness.jpg'
    },
    {
        title: 'Страховочные устройства',
        img: 'belaying-device.jpg'
    },
    {
        title: 'Аксессуары',
        img: 'chalk-bag.jpg'
    },
];

const catalogContainer = document.querySelector('#catalogContainer');

const renderCatalogItem = function (item) {
    const markup = `
        <div class="catalog-item">
            <div class="item-img">
                <a href="category.html"><img src="img/${item.img}" alt="${item.title}"></a>
            </div>
            <div class="item-title">
                <a href="category.html">${item.title}</a>
            </div>
        </div>
    `;
    catalogContainer.insertAdjacentHTML('beforeend', markup);
};

items.forEach(renderCatalogItem);

