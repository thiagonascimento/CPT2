<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form de Registro com validações em JS</title>
    <link rel="stylesheet" href="css/styles.css">

    <script type='text/javascript' src='//code.jquery.com/jquery-compat-git.js'></script>
    <script type='text/javascript' src='//igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js'></script>
    
</head>

<body>

<?php

    include_once('CRUD.php');

    $ObjCRUD = new CRUD();

    $paises = $ObjCRUD->SelectPais();
    //print_r();
   

    if(isset($_POST['btn-submit'])){
        if ($ObjCRUD->InserirForm($_POST) == 'ok') {
            header('location: /formulario/index.php');
        } else {
            echo '<script type="text/javascript">alert("Erro em cadastrar");</script>';
        }
        
     }
  

?>
    <div id="main-container">
        <h1>Formulário</h1>
        <form id="register-form" method="post">

            <div class="full-box">
                <label id="LabelNome" for="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Digite seu nome" data-required data-min-length="3" data-max-length="16">
            </div>

            <div class="half-box spacing">
                <label id="LabelEmail" for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-required  data-min-length="2" data-email-validate>
            </div>

    
            <div class="half-box">
                <label id="LabelTel" for="tel">telefone</label>
                <input type="tel" name="tel" id="tel" placeholder="(11) 1111-1111" maxlength="15" data-required data-only-letters>
            </div>

            <div class="half-box spacing">
                <label id="LabelPais" name="pais" >País</label>
                <select type="text" name = "pais" id="pais"  > 
                    <option selected value=""><?php echo($paises[0])?></option>
                        <?php
                            $a = count($paises);
                            for($b = 0; $b < $a; $b++){
                              echo '<option>' .$paises[$b]. '</option>';
                             }  
                        ?>
                             
                </select>
                    
            </div>

            <div class="half-box">
                <label id="LabelAssunto" for="assunto">Assunto</label>
                <select data-required type="text" name = "assunto" id="assunto"> 
                    <option selected disabled value="">Selecione</option>
                    <option>Reclamação de Curso</option>
                    <option>Reclamação de software</option>
                    <option>Reclamação de Conteúdo </option>
                    <option>Reclamação de Atendimento </option>
                    <option>Elogio </option>
                    <option>Outro </option>          
                </select>
            </div>

            <div class="full-box">
                <label id="LabelMensagem" for="mensagem"> Mensagem </label> 
               <textarea id="mensagem" type="text" name="mensagem" data-required data-min-length="3"> </textarea>  
            </div>
  
            <div class="full-box">
                <input id="btn-submit" name ="btn-submit" value="Enviar" type="submit">
            </div>
        </form>
    </div>
    <p class="error-validation template"></p>
    
    <script src="js/scripts.js"></script>

</body>

</html>