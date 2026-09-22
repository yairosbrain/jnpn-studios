const products = [{ id: 1, name: 'חולצת פשתן קלאסית', price: 299 }, { id: 2, name: 'מכנסיים מחויטים', price: 450 }];

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    products.forEach(p => {
        const article = document.createElement('article');
        article.className = 'product-card';
        article.innerHTML = `
            <div class="img-placeholder"></div>
            <h3>${p.name}</h3>
            <p class="price">${p.price} ₪</p>
            <button class="add-to-cart-btn" onclick="addToCart(${p.id}, '${p.name}')">הוסף לסל</button>
        `;
        grid.appendChild(article);
    });
}

function addToCart(id, name) {
    const countEl = document.getElementById('cart-count');
    countEl.textContent = parseInt(countEl.textContent) + 1;
}

renderProducts();