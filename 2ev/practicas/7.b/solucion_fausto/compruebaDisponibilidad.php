<?php

    $login =[ 'lucer', 'mateo', 'marcos', 'luis', 'alberto']; // lista de usuarios ya creados
    $respuesta = 'Debe ingresar un nombre de usuario'; // Variable referente a la respuesta a devolver
    $usuario = $_POST['usuario']; // Rescatamos el usuario enviado en la petición

    if($usuario){ // Si el usuario enviado es distinto a vacio se procede con la revisión
        if (in_array($usuario, $login)) { // Verificamos si el usuario se encuentra en la lista
            // En caso afirmativo, indicamos que no se encuentra disponible
            $respuesta = "El nombre de usuario $usuario No se encuentra libre";
            // En caso negativo, indicamos que el usuario sí se encuentra disponible
        } else $respuesta = "El nombre de usuario $usuario Sí se encuentra libre";
    }
    /*
        NOTA: en caso de enviarse vacío el campo nombre, se mostrará un mensaje indicando
        que éste debe ser rellenado
    */
    echo json_encode($respuesta);
    
?>