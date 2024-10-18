<?php
// Conexión a la base de datos
$dsn = "mysql:host=localhost;dbname=abajova;charset=utf8mb4";
$username = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verifica si se recibieron los datos del formulario
    if (isset($_POST['title'], $_POST['description'], $_POST['price'])) {
        // Recibir los datos del formulario
        $title = trim($_POST['title']);
        $description = trim($_POST['description']);
        $price = trim($_POST['price']);

        // Manejo de la imagen
        $imagePath = '';
        if (isset($_FILES['image']) && $_FILES['image']['error'] == UPLOAD_ERR_OK) {
            $imageFileName = basename($_FILES['image']['name']);
            $imagePath = '' . $imageFileName; // Cambia 'uploads/' según tu estructura de carpetas

            // Mueve el archivo subido a la carpeta de destino
            if (!move_uploaded_file($_FILES['image']['tmp_name'], $imagePath)) {
                echo "Error al subir la imagen.";
                exit;
            }
        } else {
            echo "Error en la subida de la imagen.";
            header("location:index.html");
            exit;
        }

        // Preparar la declaración SQL
        $stmt = $pdo->prepare("INSERT INTO productos (Nombre, Descripcion, Precio, ImagenURL) VALUES (:nombre, :descripcion, :precio, :imagen)");
        $stmt->bindParam(':nombre', $title);
        $stmt->bindParam(':descripcion', $description);
        $stmt->bindParam(':precio', $price);
        $stmt->bindParam(':imagen', $imagePath);

        // Ejecutar la declaración
        $stmt->execute();
        echo "Producto subido con éxito.";
        header("location:index.html");
    } else {
        echo "Por favor complete todos los campos requeridos.";
    }
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>
