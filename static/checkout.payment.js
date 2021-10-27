const checkoutForm = document.querySelector('#checkout')

const checkoutPaymentLayout = /*html*/ `
    <h1>WORK!</h1>
`

checkoutForm.addEventListener('click', (event) => {
  event.preventDefault()
  checkoutForm.innerHTML = checkoutPaymentLayout
})
