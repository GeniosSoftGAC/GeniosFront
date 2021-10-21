const products = [
  {
    name: 'Producto 1',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    price: 20000,
  },
  {
    name: 'Producto 2',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    price: 50000,
  },
  {
    name: 'Producto 3',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    price: 90000,
  },
  {
    name: 'Producto 4',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    price: 150000,
  },
]

const productGrid = document.querySelector('.product-grid')

products.forEach((product) => {
  const productCard = /* html */ `
      <div class="product-card">
        <div
          style=" background-image: url('${product.image}')"
          class="product-card__image"
        ></div>
  
        <div class="product-info">
          <div>
            <h2 class="product-name">${product.name}</h2>
            <p class="product-price">
              <strong>price:</strong>
              ${product.price}
            </p>
          </div>
          <div class="shopping-add">
            <i class="fa fa-shopping-cart"></i>
          </div>
        </div>
      </div>
  `

  productGrid.innerHTML += productCard
})
