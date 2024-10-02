document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;
    
    const message = `Compra realizada con éxito!\nDirección: ${address}\nMétodo de Pago: ${paymentMethod}`;
    
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    
    // Resetea el formulario
    this.reset();
});
