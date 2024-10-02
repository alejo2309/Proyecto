<?php

$direccion = "localhost";
$nombreBADA = "id22383995_registro";
$usuario = "id22383995_abajova24";
$psw = "Proyecto2024_";

$enlace= mysqli_connect($direccion,$usuario,$psw,$nombreBADA);

$confirmacionLogin = false;

$username = $_POST['username'];
$password = $_POST['password'];


$consulta = "SELECT * FROM usuarios WHERE usuario='$username' and contrasena='$password'";
$login = mysqli_query($enlace, $consulta);

$fila = mysqli_fetch_row($login);

if (mysqli_num_rows($login) > 0) {
echo '<script>window.location.href="index.html";</script>';


} else {
echo "no";
}


?> 