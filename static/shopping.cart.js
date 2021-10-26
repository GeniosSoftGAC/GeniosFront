// Selección de elementos de interfaz

// Carrito de compras
const cartMainButton = document.querySelector('.shopping-cart-icon')
const cartMenu = document.querySelector('.shopping-cart')
const cartMenuScrim = cartMenu.querySelector('.shopping-cart__list--scrim')
const cartMenuList = cartMenu.querySelector('.shopping-cart__list')

const shoppingAddButton = document.querySelectorAll('.shopping-add')

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
productGrid.addEventListener('click', (event) => {
  const target = event.target
  if (
    target.className == 'shopping-add' ||
    target.className == 'fa fa-cart-plus'
  ) {
    openCart()
    console.log(target.closest('.shopping-add').id)
  }
})

/* Cerrar menú carrito de compras */
cartMenuScrim.addEventListener('click', closeCart)
