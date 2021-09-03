console.log('JavaScript carregado.');

//cpf exemplo: 37142811854
function validaCPF(cpf) {
    //console.log(cpf.length); quantidade de caracteres na variável cpf

    if(cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9); //iniciando no caractere 0 pega ao total 9 caracteres
        var digitos = cpf.substring(9); //iniciando no 9º caractere pega todos os caracteres que vem depois (incluindo o 9º tmbm)

/*         console.log("numeros do cpf: " + numeros); saída = 0123456789
        console.log("digitos do cpf: " + digitos); saída = 11*/

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i; //charAt(indice) --> pega o valor da posicão indice
        }


        //OPERADOR TERNÁRIO - é feito uma pergunta esperando true/false após o ? e caso seja false a variável recebe o valor que vem após o sinal de :
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11); //essa linha equivale à: 
        //if (soma % 11 < 2 ) {
        //    var resultado = 0;    
        //} else {
            // var resultado = 11 - (soma % 11);
        //}

        //Validação do primeiro dígito, no nosso exemplo vale 5
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        //console.log(digitos.toString().charAt(0) + ' é a primeira posição da variável digitos'); 
        //resultado recebe o valor do primeiro digito, no nosso exemplo digitios = 54 por tanto digitos.charAt(0) = 5
       
        soma = 0;
        numeros = cpf.substring(0, 10); //iniciando no caractere 0 pega um total de 10 caracteres

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k; //charAt(indice) --> pega o valor da posicão indice
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //Validação do segundo digito, no nosso exemplo vale 4
        if (resultado != digitos.charAt(1)) {
            return false;
        }
        return true;
    }
    
}

function validacao() { //essa função é chamada através do evento onclick de um botão
    console.log('Iniciando validação CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById("cpf_digitado").value; //lê o valor do imput com id="cpf_digitado" e guarda na variável cpf
    
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) { //if(resultadoValidacao) === if (resultadoValidacao === true)
        document.getElementById("success").style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}