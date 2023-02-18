<?php
    header('Content-Type: application/json');

    try {
        $mbd = new PDO('mysql:host=localhost;dbname=ajax;charset=utf8mb4', 'user_ajax', '123456', [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    }catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "\n";
        die();
    }

    if (isset($_POST)) {
        // Prepare
        $stmt = $mbd->prepare("INSERT INTO usuarios INSERT INTO usuarios (nombre, apellido, dni, estudios) VALUES (:nombre, :apellido, :dni, :estudios);");
        // Bind
        $stmt->bindParam(':nombre', $_POST['nombre']);
        $stmt->bindParam(':apellido', $_POST['apellido']);
        $stmt->bindParam(':dni', $_POST['dni']);
        $stmt->bindParam(':estudios', $_POST['estudios']);

        // Excecute
        $stmt->execute();
    }
?>