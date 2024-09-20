const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Initialize Express app and port
const app = express();
const port = 3000;

// Configuration for multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create the 'uploads' directory if it doesn't exist
    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads');
    }
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve static files from 'public' directory
app.use(express.static('public'));

// Route for handling image uploads
app.post('/upload', upload.single('image'), (req, res) => {
  // Respond with a JSON object containing a success message and file details
  res.json({ message: 'Imagen subida exitosamente', file: req.file });
});

// Route to serve the HTML form for image upload
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario de Carga</title>
</head>
<body>
  <form id="productForm" enctype="multipart/form-data">
    <input type="file" name="image" required>
    <button type="submit">Subir Imagen</button>
  </form>
  <div id="message"></div>

  <script>
    document.getElementById('productForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(this);

      fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        document.getElementById('message').innerText = data.message; // Update message element
      })
      .catch(error => {
        console.error('Error:', error); // Log errors for debugging
        document.getElementById('message').innerText = 'Hubo un error al enviar el formulario.';
      });
    });
  </script>
</body>
</html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});