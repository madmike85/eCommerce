$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});

const newItems = [
  {
    id: 1,
    title: 'Scarpa Mago',
    img: 'scarpa_mago.jpg',
    price: 12000,
    discont: 0.15,
    inStock: 2,
    sale: false,
    new: true
  },
  {
    id: 2,
    title: 'Scarpa Mago',
    img: 'scarpa_mago.jpg',
    price: 12000,
    discont: 0.15,
    inStock: 2,
    sale: false,
    new: true
  },
  {
    id: 3,
    title: 'Scarpa Mago',
    img: 'scarpa_mago.jpg',
    price: 12000,
    discont: 0.15,
    inStock: 2,
    sale: false,
    new: true
  },
  {
    id: 4,
    title: 'Scarpa Mago',
    img: 'scarpa_mago.jpg',
    price: 12000,
    discont: 0.15,
    inStock: 2,
    sale: false,
    new: true
  },
  {
    id: 5,
    title: 'Scarpa Mago',
    img: 'scarpa_mago.jpg',
    price: 12000,
    discont: 0.15,
    inStock: 2,
    sale: false,
    new: true
  },
  {
    id: 6,
    title: 'Scarpa Mago',
    img: 'scarpa_mago.jpg',
    price: 12000,
    discont: 0.15,
    inStock: 2,
    sale: false,
    new: true
  }
];

const saleItems = [
  {
    id: 1,
    title: 'Scarpa Chimera',
    img: 'scarpa_chimera.jpg',
    price: 11000,
    discont: 0.15,
    inStock: 5,
    sale: true,
    new: false
  },
  {
    id: 2,
    title: 'Scarpa Chimera',
    img: 'scarpa_chimera.jpg',
    price: 11000,
    discont: 0.15,
    inStock: 5,
    sale: true,
    new: false
  },
  {
    id: 3,
    title: 'Scarpa Chimera',
    img: 'scarpa_chimera.jpg',
    price: 11000,
    discont: 0.15,
    inStock: 5,
    sale: true,
    new: false
  },
  {
    id: 4,
    title: 'Scarpa Chimera',
    img: 'scarpa_chimera.jpg',
    price: 11000,
    discont: 0.15,
    inStock: 5,
    sale: true,
    new: false
  },
  {
    id: 5,
    title: 'Scarpa Chimera',
    img: 'scarpa_chimera.jpg',
    price: 11000,
    discont: 0.15,
    inStock: 5,
    sale: true,
    new: false
  },
  {
    id: 6,
    title: 'Scarpa Chimera',
    img: 'scarpa_chimera.jpg',
    price: 11000,
    discont: 0.15,
    inStock: 5,
    sale: true,
    new: false
  }
];

const newItemsContainer = document.querySelector('#newItemsContainer');
const saleItemsContainer = document.querySelector('#saleItemsContainer');
const cartIcon = document.querySelector('.cart-icon');
let itemsInCart = 3;

const renderItems = function(item) {
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

    saleItemsContainer.insertAdjacentHTML('beforeend', markup);
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
                    <span class="discount-price hidden">${item.price * item.discont} руб.</span>
                </div>
                <div class="is-avaliable">
                    <i class="fas fa-check"></i> в наличии
                </div>
                <button class="buy-btn" type="button" name="buy-btn" data-click="addToCart">
                    в корзину
                </button>
            </div>
        `;

    newItemsContainer.insertAdjacentHTML('beforeend', markup);
  }
};

newItems.forEach(renderItems);
saleItems.forEach(renderItems);

const addToCartNew = function(id) {
  const itemIndex = newItems.findIndex(function(element) {
    if (element.id == id) {
      return true;
    }
  });

  itemsInCart++;
  cartIcon.dataset.count = itemsInCart;
};

newItemsContainer.addEventListener('click', function(e) {
  if (e.target.matches('[data-click="addToCart"]')) {
    const id = e.target.closest('[data-productid]').dataset.productid;
    addToCartNew(id);
  }
});

const addToCartSale = function(id) {
  const itemIndex = saleItems.findIndex(function(element) {
    if (element.id == id) {
      return true;
    }
  });

  itemsInCart++;
  cartIcon.dataset.count = itemsInCart;
};

saleItemsContainer.addEventListener('click', function(e) {
  if (e.target.matches('[data-click="addToCart"]')) {
    const id = e.target.closest('[data-productid]').dataset.productid;
    addToCartSale(id);
  }
});
