<?php

    try {
        $mbd = new PDO('mysql:host=localhost;dbname=ajax;charset=utf8mb4', 'user_ajax', '123456', [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    }catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "\n";
        die();
    }

    //deportes (id=1)
    if(isset($_POST['deportes'])) {
        $id = 1;
        $stmt = $mbd->prepare("SELECT id, link FROM usuarios WHERE id = :id;");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    
        
        foreach ($stmt as $key => $fila) {
            echo $fila['link'];
        }
    }

    //bebidas (id=2)
    if(isset($_POST['bebidas'])) {
        $id = 2;
        $stmt = $mbd->prepare("SELECT id, link FROM usuarios WHERE id = :id;");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    
        
        foreach ($stmt as $key => $fila) {
            echo $fila['link'];
        }
    }

    //revistas (id=3)
    if(isset($_POST['revistas'])) {
        $id = 3;
        $stmt = $mbd->prepare("SELECT id, link FROM usuarios WHERE id = :id;");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    
        
        foreach ($stmt as $key => $fila) {
            echo $fila['link'];
        }
    }