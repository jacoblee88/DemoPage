// Array of product objects
const products = [
    { id: 1, name: "Magic Wand", price: 10.00, description: "Unleash your wizardry skills." },
    { id: 2, name: "Invisibility Cloak", price: 20.00, description: "Disappear in style!" },
    { id: 3, name: "Time Turner", price: 30.00, description: "Turn back time with a twist." }
    // Feel free to add more whimsical products!
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const cartList = document.getElementById('cartList');

    const renderProducts = () => {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name} - $${product.price}</h3>
                <p>${product.description}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    };

    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        renderCart();
    };

    const renderCart = () => {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cartItem';
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(cartItem);
        });
    };

    renderProducts();
});