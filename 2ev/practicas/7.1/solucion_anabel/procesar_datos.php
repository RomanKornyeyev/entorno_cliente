<?php
try {
    $dbname="js";
    $user="anabel";
    $password="1234";
    $dsn = "mysql:host=localhost;dbname=$dbname";
    
    $options = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    );
    $dbh = new PDO($dsn, $user, $password);

} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "\n";
    die();
}

if(isset($_POST['insertar'])) {
    $stmt = $dbh->prepare("INSERT INTO usuarios (nombre, apellidos, dni, estudios)
    VALUES (:nombre, :apellidos, :dni, :estudios)");
    
    //Aqui mete los datos
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $dni = $_POST['dni'];
    $estudios = $_POST['estudios'];
    
    //Aqui ejecutas para pegar los valores en la sentencia
    if ($stmt->execute([
        ':nombre'=>$nombre,
        ':apellidos'=>$apellidos,
        ':dni'=>$dni,
        ':estudios'=>$estudios,
        ])) {
        echo '<p>Insercción realizada!!!!!</p>';
    } else {
        echo '<p>Insercción fallida :(</p>';
    }
}

if(isset($_POST['borrar'])) {
    $stmt = $dbh->prepare("DELETE FROM usuarios WHERE dni = :dni");
    
    //Aqui mete los datos
    $dni = $_POST['dni'];
    
    //Aqui ejecutas para pegar los valores en la sentencia
    if ($stmt->execute([
        ':dni'=>$dni
        ])) {
        echo '<p>Borrado realizado!!!!!</p>';
    } else {
        echo '<p>Borrado fallido :(</p>';
    }
}

if(isset($_POST['seleccionar'])) {
    $stmt = $dbh->prepare("SELECT * FROM usuarios");

    //Aqui ejecutas para pegar los valores en la sentencia
    if ($stmt->execute()) {
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo "<table>";
        echo "<tr><th>Nombre</th><th>Apellidos</th><th>DNI</th><th>Estudios</th></tr>";
        foreach ($users as $key => $fila) {
            echo "<tr>";
            foreach ($fila as $key => $value) {
                if($key != 'id') {
                    echo "<td>".ucfirst($value)."</td>";
                }
            }
            echo "</tr>";
        }
        echo "</table>";

    } else {
        echo 'Resultados no recuperados :(';
    }
}
