<?php
    require_once('Conector.php');

     $db = Conector::instancia();

     $resultado = $db->getUsuarios();

     echo json_encode($resultado);
?>