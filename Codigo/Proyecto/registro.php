<?php
    $direccion = "localhost";
	$nombreBADA = "id22383995_registro";
	$usuario = "id22383995_abajova24";
	$psw = "Proyecto2024_";

    $enlace= mysqli_connect($direccion,$usuario,$psw,$nombreBADA);

    mysqli_set_charset($enlace, "utf-8");

    $consulta="SELECT * FROM ususarios";
	$insertarDato="INSERT usuarios("usuario","contraseña","telefono", "nombre", "apellido") VALUES $nomUsr,$password","$telefono","$name","$apellido";

	$resultado= mysqli_query($enlece, $consulta)

	$insertarDatoBADA= mysqli_query($enlece, $insertarDato)

	$fila= mysqli_fetch_row($resultado) #array

	$password= htmlspecialchars($_POST['contraseña']);
	$nomUsr= htmlspecialchars($_POST['username']);
	$name = htmlspecialchars($_POST['nombre']);
	$telefono = htmlspecialchars($_POST['telefono']);
	$apellido = htmlspecialchars($_POST['apellido']);

	<h1> echo fila[0] </h1>


	if ( (fila[1] == $password) and (fila[0] == $nomUsr) ){
		inicio()
	} else{
		echo "Error de login"
	}

	#-------------------------

	if ( mysqli_connect_errno() ){
		echo "hubo error"
		exit()
	}else {

	}

	#-------------------------

	mysqli_set_charset($enlace, "utf-8")

	<h1>fila[0]</h1>

	while ( $fila= mysqli_fetch_row($resultado) ) {
		echo $fila[0];
		echo $fila[1];
		echo $fila[2];
	}
?>
