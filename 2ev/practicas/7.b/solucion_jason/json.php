<?php

header('Content-Type: application/json;');

$conn = new PDO('mysql:host=localhost;dbname=dwes', 'byeejasonn', '1234', [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);

$stmt = $conn->prepare("SELECT * FROM dwec_server WHERE name = :name");
$stmt->bindParam(":name", $_POST['name']);

$stmt->execute();
$users = $stmt->fetch();

echo json_encode($users, JSON_UNESCAPED_SLASHES);