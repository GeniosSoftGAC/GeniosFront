const checkoutForm = document.querySelector('.checkout-form')
const checkoutButton = document.querySelector('.checkout-button')

const checkoutPaymentLayout = /*html*/ `
    <section class="payment-title">
      <h1>PAGO</h1>
      <p>ELIGE MÉTODO DE PAGO</p>
    </section>
    
    <section class="payment-container">
      <div class="payment-method">
        <h2>Transferencia bancaria</h2>
        <img src="./images/pse.png" alt="pse">
      </div>
      <div class="payment-method">
        <h2>Tarjeta de crédito</h2>
        <img src="./images/tarjeta_credito.png" alt="tarjeta">
      </div>
      <div class="payment-method">
        <h2>Efecty</h2>
        <img src="./images/efecty.png" alt="efecty">
      </div>
    </section>
`

checkoutForm.addEventListener('click', (event) => {
  event.preventDefault()
})

checkoutButton.addEventListener('click', () => {
  checkoutForm.innerHTML = checkoutPaymentLayout
})
