'use strict'

const menuButton = document.querySelector('.menu')
const fullscreenMenu = document.querySelector('.fullscreen-menu')
const closeButton = document.querySelector('.close-button')

menuButton.addEventListener('click', () => {
  fullscreenMenu.style.display = 'block'
})

closeButton.addEventListener('click', () => {
  fullscreenMenu.style.display = 'none'
})
