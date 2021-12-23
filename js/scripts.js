const fields = document.querySelectorAll("[data-required]")

let nome = document.querySelector("#name");
let labelNome = document.querySelector("#LabelNome");
let valideNome = false

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#LabelEmail");
let valideEmail = false

let tel = document.querySelector("#tel");
let labelTel = document.querySelector("#LabelTel");
let valideTel = false

let assunto = document.querySelector("#assunto");
let labelAssunto = document.querySelector("#LabelAssunto");
let valideAssunto = false

let mensagem = document.querySelector("#mensagem");
let labelMensagem = document.querySelector("#LabelMensagem");
let valideMensagem = false

let pais = document.querySelector("#pais");
let labelPais = document.querySelector("#LabelPais");

// método para manipular mensagens de erro
function printMessage(tag, msg, label) {


    // checa os erros presentes na tag
    let errorsQty = tag.parentNode.querySelector('.error-validation');

    // imprimir erro só se não tiver erros
    if (errorsQty === null) {
        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let tagParent = tag.parentNode;

        template.classList.remove('template');

        tagParent.appendChild(template);

        //Preenche de vermelho nvalido
        label.setAttribute('style', 'color:red')
        tag.setAttribute('style', 'border-color:red')


    }
}

// remove as validações 
function cleanValidations(validations, label, tag) {
    validations.forEach(el => el.remove());

    //Preenche de verde quando está valido
    label.setAttribute('style', 'color:green')
    tag.setAttribute('style', 'border-color:green')

}

// Validar nome
nome.addEventListener('keyup', () => {


    nomeLenth = nome.value.length;
    nomeAtributo = nome.getAttribute('data-min-length');

    //Verifica a quantidade miníma de caractere
    if (nomeLenth < nomeAtributo) {
        valideNome = false;
        let errorMessage = `O campo precisa ter mais que ${nomeAtributo} caracteres`;
        this.printMessage(nome, errorMessage, labelNome);



    } else {
        valideNome = true;
        let currentValidations = document.querySelectorAll('form .error-validation');
        this.cleanValidations(currentValidations, labelNome, nome);
    }

})

// Validar e-mail
email.addEventListener('keyup', () => {

    //emailLenth = email.value.length;
    emailAtributo = email.getAttribute('data-min-length');

    let re = /\S+@\S+\.\S+/;
    let emailVal = email.value;

    // valida email no formato padrao
    if (!re.test(emailVal)) {
        valideEmail = false;
        let errorMessage = `Insira um e-mail no padrão nome@email.com`;
        //let errorMessage = `O campo precisa ter mais que ${emailAtributo} caracteres`;
        this.printMessage(email, errorMessage, labelEmail);

    } else {
        valideEmail = true;
        let currentValidations = document.querySelectorAll('form .error-validation');
        this.cleanValidations(currentValidations, labelEmail, email);
    }

})



// validar telefone
tel.addEventListener('keyup', () => {


    var behavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },

        options = {
            onKeyPress: function(val, e, field, options) {
                field.mask(behavior.apply({}, arguments), options);
            }

        };
    $('#tel').mask(behavior, options);

})

mensagem.addEventListener('keyup', () => {
    mensagemLenth = mensagem.value.length;
    mensagemAtributo = mensagem.getAttribute('data-min-length');



    //Verifica a quantidade miníma de caractere
    if (mensagemLenth < mensagemAtributo) {
        valideMensagem = false;
        let errorMessage = `O campo precisa ter mais que ${mensagemAtributo} caracteres`;
        this.printMessage(mensagem, errorMessage, labelMensagem);



    } else {
        valideMensagem = true;
        let currentValidations = document.querySelectorAll('form .error-validation');
        this.cleanValidations(currentValidations, labelMensagem, mensagem);
    }


});

assunto.addEventListener('click', () => {

    valideAssunto = true;
    let currentValidations = document.querySelectorAll('form .error-validation');
    this.cleanValidations(currentValidations, labelAssunto, assunto);


});



// evento de envio do form, que valida os inputs
document.querySelector("form")
    .addEventListener("submit", event => {
        // console.log("enviar o formulário")

        // não vai enviar o formulário
        if (valideNome && valideEmail && valideMensagem && valideAssunto) {

            alert('Enviado');

        } else {
            event.preventDefault()
            if (valideNome == false) {
                errorMessage = "Preenchimento obrigatório";
                this.printMessage(nome, errorMessage, labelNome);
            }
            if (valideEmail == false) {
                errorMessage = "Preenchimento obrigatório";
                this.printMessage(email, errorMessage, labelEmail);
            }
            if (valideMensagem == false) {
                errorMessage = "Preenchimento obrigatório";
                this.printMessage(mensagem, errorMessage, labelMensagem);
            }
            if (valideAssunto == false) {
                valideAssunto = false;
                errorMessage = "";
                this.printMessage(assunto, errorMessage, labelAssunto);
            }

        }
    });