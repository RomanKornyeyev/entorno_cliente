<?php

    try {
        $mbd = new PDO('mysql:host=localhost;dbname=ajax;charset=utf8mb4', 'user_ajax', '123456', [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    }catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "\n";
        die();
    }

    if(isset($_POST['insertar'])) {
        $stmt = $mbd->prepare("INSERT INTO usuarios (nombre, apellido, dni, estudios)
        VALUES (:nombre, :apellido, :dni, :estudios)");
        
        //Aqui mete los datos
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $dni = $_POST['dni'];
        $estudios = $_POST['estudios'];
        
        //Aqui ejecutas para pegar los valores en la sentencia
        if ($stmt->execute([
            ':nombre'=>$nombre,
            ':apellido'=>$apellido,
            ':dni'=>$dni,
            ':estudios'=>$estudios,
            ])) {
            echo 'Insercción realizada!!!!!';
        } else {
            echo 'Insercción fallida :(';
        }
    }

    if(isset($_POST['borrar'])) {
        $stmt = $mbd->prepare("DELETE FROM usuarios WHERE dni = :dni");
        
        //Aqui mete los datos
        $dni = $_POST['dni'];
        
        //Aqui ejecutas para pegar los valores en la sentencia
        if ($stmt->execute([
            ':dni'=>$dni
            ])) {
            echo 'Borrado realizado!!!!!';
        } else {
            echo 'Borrado fallido :(';
        }
    }

    if(isset($_POST['consultar'])) {
        $stmt = $mbd->prepare("SELECT nombre, apellido, dni, estudios FROM usuarios;");
        $stmt->execute();
    
        //arrays asociativos
        $primeraFila = true;
        foreach ($stmt as $key => $fila) {
            //pintamos heading
            if($primeraFila){
                echo "<tr>";
                foreach ($fila as $llave => $value){
                    if($llave != 'id'){
                        echo "<td class='heading'><b>$llave</b></td>";
                    }
                }
                echo "</tr>";
            }
            $primeraFila = false;
    
            //pintamos cuerpo
            echo "<tr>";
            echo "<td>". $fila['nombre']."</td>";
            echo "<td>". $fila['apellido']."</td>";
            echo "<td>". $fila['dni']."</td>";
            echo "<td>". $fila['estudios']."</td>";
            echo "</tr>";
        }
    }