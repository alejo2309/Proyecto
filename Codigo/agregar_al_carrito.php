<?php

// 1. Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "abajova";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

session_start(); // Iniciar la sesión

// Obtener el ID del usuario de la sesión
$usuario_id = $_SESSION['usuario_id']; 

// 2. Obtener datos de la petición AJAX
$data = json_decode(file_get_contents('php://input'), true);
$usuario_id = $data['usuario_id'];
$producto_id = $data['producto_id'];
$cantidad = $data['cantidad'];

// 3. Insertar datos en la tabla "carrito"
$sql = "INSERT INTO carrito (usuario_id, producto_id, cantidad) 
        VALUES ('$usuario_id', '$producto_id', '$cantidad')";

if ($conn->query($sql) === TRUE) {
  echo "Producto agregado al carrito correctamente";
} else {
  echo "Error al agregar el producto al carrito: " . $conn->error;
}

// 4. Cerrar la conexión
$conn->close();

?>