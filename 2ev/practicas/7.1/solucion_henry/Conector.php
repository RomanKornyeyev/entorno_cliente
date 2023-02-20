<?php
    class Conector {
        private static $instancia;
        private $enlaceBD;
        private CONST HOST = 'localhost';
        private CONST BBDD = 'examen';
        private CONST USUARIO = 'admin';
        private CONST PASS = 'admin';

        private function __construct(){
            try {
                $this->enlaceBD = new PDO("mysql:host=".self::HOST.";dbname=".self::BBDD,self::USUARIO,self::PASS, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]);
            } catch (PDOException $excepcion) {
                die('ERROR AL CONECTAR CON LA BASE DE DATOS:'.$excepcion->getMessage());
            }
        }
        public static function instancia(){
            if(self::$instancia == null){
                self::$instancia = new Conector();
            }
            return self::$instancia;
        }
        public function getUsuarios(){
            try {
                $consultaPrep = $this->enlaceBD->prepare("SELECT * FROM usuarios;");
                $consultaPrep->execute();
                $resultado = $consultaPrep->fetchAll();
            } catch (PDOException $excepcion) {
                die('ERROR EN LA CONSULTA:'.$excepcion->getMessage());
            }
            return $resultado;
        }
        public function getUsuario($nombre, $apellidos){
            try {
                $consultaPrep = $this->enlaceBD->prepare("SELECT * FROM usuarios WHERE nombre = :nombre AND apellidos = :apellidos");
                $consultaPrep->bindParam(':nombre',$nombre);
                $consultaPrep->bindParam(':apellidos',$apellidos);
                $consultaPrep->execute();
                $resultado = $consultaPrep->fetch();
            } catch (PDOException $excepcion) {
                die('ERROR EN LA CONSULTA:'.$excepcion->getMessage());
            }
            return $resultado;
        }
        public function insertUser(array $array){
            try {
                $consultaPrep = $this->enlaceBD->prepare("INSERT INTO usuarios (nombre,apellidos, dni,estudios) VALUES (:nombre,:apellidos,:dni,:estudios);");
                $consultaPrep->bindParam(':nombre',$array['nombre']);
                $consultaPrep->bindParam(':apellidos',$array['apellidos']);
                $consultaPrep->bindParam(':nif',$array['dni']);
                $consultaPrep->bindParam(':estudios',$array['estudios']);
                $resultado = $consultaPrep->execute();

            } catch (PDOException $excepcion) {
                die('ERROR EN LA CONSULTA: '.$excepcion->getMessage());
            }
            return $resultado;
        }
        public function eliminar($id){
            try {
                $consultaPrep = $this->enlaceBD->prepare("DELETE FROM usuarios WHERE id = :id");
                $consultaPrep->bindParam(':id',$id);
                $resultado = $consultaPrep->execute();

            } catch (PDOException $excepcion) {
                die('ERROR EN LA CONSULTA: '.$excepcion->getMessage());
            }
            return $resultado;
        }
    }
?>