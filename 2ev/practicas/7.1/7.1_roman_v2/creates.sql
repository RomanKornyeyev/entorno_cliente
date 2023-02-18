CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(100) NOT NULL UNIQUE,
    estudios VARCHAR(255) NOT NULL
);

INSERT INTO usuarios VALUES (1, 'roman', 'kr', '123', 'bach');
INSERT INTO usuarios VALUES (2, 'anabel', 'pd', '1234', 'uni');
INSERT INTO usuarios VALUES (3, 'franco', 'g', '12345', 'bach');