document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío por defecto del formulario

  const formData = new FormData(this);

  fetch('/uploadProduct.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json()) // Parsea la respuesta JSON
  .then(data => {
      const jaime = document.getElementById('m')
      jaime.style.display = 'flex'; // Muestra el mensaje de éxito
  })
  // peron peron que grande la tenes 
});
