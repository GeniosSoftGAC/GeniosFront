// Selección de elementos de interfaz
const cartMainButton = document.querySelector('.shopping-cart-icon')
const cartMenu = document.querySelector('.shopping-cart')
const cartMenuScrim = cartMenu.querySelector('.shopping-cart__list--scrim')
const cartMenuList = cartMenu.querySelector('.shopping-cart__list')

// Eventos

/* Abrir menú de carrito de compras. */

cartMainButton.addEventListener('click', () => {
  cartMenu.style.display = 'block'
  document.body.style.overflow = 'hidden'
})

/* cerrar menú carrito de compras */

cartMenuScrim.addEventListener('click', () => {
  cartMenu.style.display = 'none'
  document.body.style.overflow = 'auto'
})
