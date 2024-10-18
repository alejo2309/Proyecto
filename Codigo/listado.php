<?php
// Conexión a la base de datos
$conn = new mysqli('localhost', 'root', '', 'productos');

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consultar los productos
$sql = "SELECT * FROM items";
$result = $conn->query($sql);

$productos = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $productos[] = $row;
    }
}

// Devolver los productos como JSON
echo json_encode($productos);

$conn->close();
?>
