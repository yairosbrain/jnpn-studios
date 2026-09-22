const products = [{ id: 1, name: 'חולצת פשתן קלאסית', price: 299 }, { id: 2, name: 'מכנסיים מחויטים', price: 450 }];

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    products.forEach(p => {
        const article = document.createElement('article');
        article.className = 'product-card';

        const img = document.createElement('div');
        img.style.background = 'var(--beige)';
        img.style.aspectRatio = '1/1';
        img.style.marginBottom = '10px';
        img.setAttribute('role', 'img');
        img.setAttribute('aria-label', `תמונה של ${p.name}`);

        const title = document.createElement('h3');
        title.textContent = p.name;

        const price = document.createElement('p');
        price.textContent = `${p.price} ₪`;

        const btn = document.createElement('button');
        btn.className = 'btn-primary';
        btn.type = 'button';
        btn.textContent = 'הוספה לעגלה';
        btn.addEventListener('click', () => addToCart(p.id, p.name));

        article.appendChild(img);
        article.appendChild(title);
        article.appendChild(price);
        article.appendChild(btn);
        grid.appendChild(article);
    });
}

function addToCart(id, name) {
    const countEl = document.getElementById('cart-count');
    let count = parseInt(countEl.textContent, 10) + 1;
    countEl.textContent = count;
    alert(`${name} נוסף לעגלה`);
}

renderProducts();