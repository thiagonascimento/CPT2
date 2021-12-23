<?php
 /*
    $servidor = "localhost";
    $usuario = "root";
    $senha ="";
    $database ="CPT";

    //Conexão com banco de dados
     $mysqli = new mysqli( $servidor,$usuario, $senha,  $database );

     if ($mysqli) {
        echo "Connected!";
      } else {
        echo "Connection Failed";
      }

   # Seleciona o banco de dados 
   // mysql_select_db( $database ) ;


# Executa a query desejada 
$query = "SELECT * FROM `Formulario`;";
$resultado = mysqli_query($mysqli,$query);
$dados = mysqli_fetch_array($resultado);
echo $dados[0],$dados[1];
*/
class Conexao{

    private $servidor ;
    private $usuario ;
    private $senha;
    private $database;

   public function __construct(){
     $this->servidor = "localhost";
     $this->usuario = "root";
     $this->senha = "";
     $this->database = "CPTBD" ;

   }

    public function connect_mysql() {
 
            try {
                return new PDO('mysql:host='.$this->servidor .'; dbname='.$this->database.';charset=utf8',
                 $this->usuario , $this->senha );
            } catch (PDOException $exception) {
                
                exit('Falha Conexão Banco de dados!');
            }

        }


}
    

?> 

