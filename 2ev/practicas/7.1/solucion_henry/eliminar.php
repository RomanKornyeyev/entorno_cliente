<?php
    require_once('Conector.php');

    $id = $_GET['id'];

    $db = Conector::instancia();

    $resultado = $db->eliminar($id);

    echo json_encode($resultado);
?>