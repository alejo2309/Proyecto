document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío por defecto del formulario

  const formData = new FormData(this);

  fetch('/upload', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json()) // Parsea la respuesta JSON
  .then(data => {
      document.getElementById('message').innerText = data.message; // Muestra el mensaje de éxito
  })
  .catch(error => {
      console.error('Error:', error); // Log de errores para depuración
      document.getElementById('message').innerText = 'Hubo un error al enviar el formulario.';
  });
});
