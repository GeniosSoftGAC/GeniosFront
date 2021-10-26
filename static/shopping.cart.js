// Selección de elementos de interfaz

import { products } from './productList.js'
import { productGrid } from './products.js'

// Carrito de compras
const cartMainButton = document.querySelector('.shopping-cart-icon')
const cartMenu = document.querySelector('.shopping-cart')
const cartMenuScrim = cartMenu.querySelector('.shopping-cart__list--scrim')
const cartMenuList = cartMenu.querySelector('.shopping-cart__list')

const cartListContent = cartMenuList.querySelector('.shopping-cart__list--body')

// Métodos

const closeCart = () => {
  cartMenu.style.display = 'none'
  document.body.style.overflow = 'auto'
}

const openCart = () => {
  cartMenu.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

// Eventos

/* Abrir menú de carrito de compras. */
cartMainButton.addEventListener('click', openCart)

/* Selecciona el producto y lo agrega al carrito */

const createShoppingCart = (name, price, image) => {
  return /* html */ `
    <div class="cart-list__card">
      <div
        class="cart-list__card--image"
        style="background-image: url('${image}')"
        alt="image"
      ></div>
      <div class="cart-list__card--info">
        <h3 class="cart-list__cart--name">${name}</h3>
        <h4 class="cart-list__cart--price">${price}</h4>
        <input type="number" name="quantity" id="quantity" min="0" max="100" />
      </div>
      <i cart-remove class="fas fa-trash"></i>
    </div>
  `
}

productGrid.addEventListener('click', (event) => {
  const target = event.target
  if (
    target.className == 'shopping-add' ||
    target.className == 'fa fa-cart-plus'
  ) {
    let productId = target.closest('.shopping-add').id
    openCart()
    let currentProduct = products[productId]
    cartListContent.innerHTML += createShoppingCart(
      currentProduct.name,
      currentProduct.price,
      currentProduct.image,
    )
  }
})

cartListContent.addEventListener('click', (event) => {
  if (event.target.closest('[cart-remove]')) {
    event.target.closest('.cart-list__card').remove()
  }
})

/* Cerrar menú carrito de compras */
cartMenuScrim.addEventListener('click', (event) => {
  if (event.target.className == cartMenuScrim.className) {
    closeCart()
  }
})
