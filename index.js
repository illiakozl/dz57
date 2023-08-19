// script.js
const categories = document.querySelectorAll('.category');
const productsBlock = document.querySelector('.products');
const productInfoBlock = document.querySelector('.product-info');

categories.forEach(category => {
  category.addEventListener('click', () => {
    // Simulate fetching and displaying products of the selected category
    productsBlock.innerHTML = `
      <ul>
        <li class="product">Product 1</li>
        <li class="product">Product 2</li>
        <li class="product">Product 3</li>
        <!-- ... more products ... -->
      </ul>
    `;

    productsBlock.style.display = 'block';
    productInfoBlock.style.display = 'none';
  });
});

productsBlock.addEventListener('click', event => {
  const clickedProduct = event.target;
  if (clickedProduct.classList.contains('product')) {
    // Simulate fetching and displaying product information
    productInfoBlock.innerHTML = `
      <h2>${clickedProduct.textContent}</h2>
      <p>Product description here...</p>
      <button class="buy-button">Buy</button>
    `;

    productsBlock.style.display = 'none';
    productInfoBlock.style.display = 'block';
  }
});

productInfoBlock.addEventListener('click', event => {
  if (event.target.classList.contains('buy-button')) {
    alert('Product purchased!');
    productsBlock.style.display = 'none';
    productInfoBlock.style.display = 'none';
  }
});
