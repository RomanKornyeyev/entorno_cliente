<?php

header('Content-Type: application/json;');
echo $_POST['name'];

// $conn = new PDO('mysql:host=localhost;dbname=dwes', 'byeejasonn', '1234', [
//     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
// ]);

// $stmt = $conn->prepare("SELECT * FROM dwec_server WHERE name = :name");
// $stmt->bindParam("name", $_POST['name']);

// // $stmt = $conn->prepare("SELECT * FROM dwec_server");

// $stmt->execute();
// $users = $stmt->fetchAll();

$users = [
    [
        "id" => 1,
        "user" => "jason",
        "password" => "1234",
        "email" => "jason.londono@mail.com"
    ],
    [
        "id" => 2,
        "user" => "franco",
        "password" => "1234",
        "email" => "franco@mail.com"
    ],
    [
        "id" => 3,
        "user" => "daniel",
        "password" => "1234",
        "email" => "dani@mail.com"
    ],
    [
        "id" => 4,
        "user" => "mario",
        "password" => "1234",
        "email" => "mario@mail.com"
    ]
];

echo json_encode($users, JSON_UNESCAPED_SLASHES);
// echo json_encode($users);