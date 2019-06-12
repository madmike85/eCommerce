const items = [
    {
        id: 1,
        title: 'La Sportiva Futura',
        img: 'la_futura.jpg',
        price: 13000,
        count: 1,
        sale: false,
        discont: 15
    },
    {
        id: 2,
        title: 'Ocun Ozone',
        img: 'ocun_ozone.jpg',
        price: 10000,
        count: 3,
        sale: false,
        discont: 15
    },
    {
        id: 3,
        title: 'Black Diamond Shadow',
        img: 'bd_shadow.jpg',
        price: 13000,
        count: 1,
        sale: false,
        discont: 15
    },
];

const cartContainer = document.querySelector('#cartContainer');
const deliveryCost = 600;
const delivery = document.querySelector('#delivery');
const totalItemsPrice = document.querySelector('#totalItemsPrice');
const totalOrderPrice = document.querySelector('#totalOrderPrice');
const deliveryPrice = document.querySelector('#deliveryPrice');
const totalItemsPriceMob = document.querySelector('#totalItemsPriceMob');
const totalOrderPriceMob = document.querySelector('#totalOrderPriceMob');
const deliveryPriceMob = document.querySelector('#deliveryPriceMob');

calculateOrderPrice();

const renderOrderItem = function (item) {
    
    const sale = !item.sale ? 0 : item.discont;
    
    const markup = `
        <tr class="cart-item">
            <td class="item">
                <img src="img/small/${item.img}" alt="${item.title}">
            </td>
            <td>
                <a href="product.html">${item.title}</a>
            </td>
            <td class="discont">${sale}%</td>
            <td class="price">${item.price} руб.</td>
            <td class="qty">${item.count} шт.</td>
            <td class="sum">${item.price * item.count} руб.</td>
        </tr>
    `;
    
    cartContainer.insertAdjacentHTML('beforeend', markup);
};

items.forEach(renderOrderItem);

function calculateTotalPrice () {
    let totalPrice = 0;
    items.forEach(function (element) {
        const thisPrice = element.price * element.count;
        totalPrice += thisPrice;
    });
    
    totalItemsPrice.innerText = `${totalPrice} руб`;
    totalItemsPriceMob.innerText = `${totalPrice} руб`;
    
    return totalPrice;
};

function calculateOrderPrice () {
    
    if (delivery.checked) {
        deliveryPrice.innerText = `${deliveryCost} руб`;
        deliveryPrice.classList.remove('free');
        totalOrderPrice.innerText = `${calculateTotalPrice() + deliveryCost} руб`;
        deliveryPriceMob.innerText = `${deliveryCost} руб`;
        deliveryPriceMob.classList.remove('free');
        totalOrderPriceMob.innerText = `${calculateTotalPrice() + deliveryCost} руб`;
        
    } else {
        deliveryPrice.innerText = `бесплатно`
        deliveryPrice.classList.add('free');
        totalOrderPrice.innerText = `${calculateTotalPrice()} руб`;
        deliveryPriceMob.innerText = `бесплатно`
        deliveryPriceMob.classList.add('free');
        totalOrderPriceMob.innerText = `${calculateTotalPrice()} руб`;
    }
}