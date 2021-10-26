const products = [
  {
    name: 'Producto 1',
    image: '',
    price: 20000,
  },
  {
    name: 'Producto 2',
    image: '',
    price: 50000,
  },
  {
    name: 'Producto 3',
    image: '',
    price: 90000,
  },
  {
    name: 'Producto 4',
    image: '',
    price: 150000,
  },
  {
    name: 'Producto 5',
    image: '',
    price: 250000,
  },
  {
    name: 'Producto 6',
    image: '',
    price: 260000,
  },
]

const fetchImage = async () => {
  const response = await fetch(
    `https://source.unsplash.com/collection/190727/1600x900`,
  )
  const image = await response.url
  return image
}

const productGrid = document.querySelector('.product-grid')

// Usanfo la función fetch para demo.
products.forEach((product, id) => {
  fetchImage().then((image) => {
    product.image = `${image}`
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
            <div class="shopping-add" id="${id}">
              <i class="fa fa-cart-plus"></i>
            </div>
          </div>
        </div>
    `
    productGrid.innerHTML += productCard
  })
})
