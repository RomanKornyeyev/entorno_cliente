<?php
header('Content-Type: application/json');
require("base.php");

if (isset($_POST)) {
    $name = $_POST["nombre"];
    $consulta = $db->prepare("SELECT Nombre from alumnos WHERE Nombre = :nombre LIMIT 1");
    $consulta->execute([":nombre" => $name]);
    $user = $consulta->fetch();

    if ($user["Nombre"] == $name) {
        echo json_encode("Este nombre ya ha sido elegido ");
    } else {
        echo json_encode("Este nombre todavia no ha sido registrado");
    }
}

?>