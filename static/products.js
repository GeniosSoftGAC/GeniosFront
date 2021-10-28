import { products } from './productList.js'

// Imagen aleatoria
// const fetchImage = async () => {
//   const response = await fetch(
//     `https://source.unsplash.com/collection/2280551/toys`,
//   )
//   const image = await response.url
//   return image
// }

export const productGrid = document.querySelector('.product-grid')

// Usando la función fetch para demo.
products.forEach((product, id) => {
  createProductCard(product, id)
})

function createProductCard(product, id) {
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
}
