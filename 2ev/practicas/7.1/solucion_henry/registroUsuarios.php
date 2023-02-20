<?php

require_once('Conector.php');

    $respuesta = 'Fallo en la inserccion'; // Variable referente a la respuesta a devolver
    
    if(!empty($_POST)){
        $db = Conector::instancia();

        $revisionUsuario = $db->getUsuario($_POST['nombre'], $_POST['apellidos']);

        if($revisionUsuario){
            $respuesta = 'El usuario ya existe en la base de datos!';
        }else {
            $respuesta = $db->insertUser($_POST);
            if($respuesta){
                $respuesta = 'Registrado!';
            }
        } 
    }

    echo json_encode($respuesta); 
    
?>