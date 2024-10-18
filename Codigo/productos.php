<?php
// Configuración de la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "abajova";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Consulta SQL para obtener los productos
$sql = "SELECT * FROM productos"; 
$result = $conn->query($sql);

$productos = array();
if ($result->num_rows > 0) {
  // Obtener los datos de cada fila
  while($row = $result->fetch_assoc()) {
    $producto = array(
      'id' => $row["ID"],
      'name' => $row["Nombre"],
      'description' => $row["Descripcion"],
      'price' => $row["Precio"],
      'imageUrl' => $row["imagenURL"] // Asegúrate de que esta columna exista en tu base de datos
    );
    array_push($productos, $producto);
  }
} else {
  echo "No se encontraron productos";
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($productos);

$conn->close();
?>