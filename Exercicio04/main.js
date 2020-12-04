function calculo() {
    var nome = document.getElementById('nome').value;
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = parseInt(document.getElementById('num3').value);
    var disc = document.getElementById('disc').value;

    var erro = "";

    if (validar(num1, num2, num3) && verNome(nome)) {
        var result = media(num1, num2, num3);
        var situacao = validaSituacao(result);



        document.querySelector("div.resultados p.media").innerHTML = `A média final do aluno ${nome} 
            na disciplina ${disc} foi ${result}. Aluno ${situacao}`;

        document.querySelector("div.mensagens").innerHTML = erro;


    }




}
function verNome(name) {
    var retorno = false;
    if (name.length == 0 || name.length < 3) {
        erro = "DIGITE O NOME DO ALUNO";
        document.querySelector("div.mensagens").innerHTML = erro;
    } else {
        retorno = true;
    }
    return retorno;
}

function validar(a, b, c) {
    var retorno = false;


    if (a >= 0 && c >= 0 && b >= 0) {
        retorno = true


    } else {

        erro = "VALORES NEGATIVOS";
        document.querySelector("div.mensagens").innerHTML = erro;
    }

    if (a < 11 && c < 11 && b < 11) {
        retorno = true
        erro = " ";

    } else {

        erro = "Valores não podem ser maior que 10";
        document.querySelector("div.mensagens").innerHTML = erro;
    }

    if (a.isNaN && c.isNaN && b.isNaN) {
        retorno = true
        erro = " ";

    } else {
        erro = "DIGITE TODAS AS NOTAS";
        document.querySelector("div.mensagens").innerHTML = erro;
    }
    return retorno;
}

function media(a, b, c) {
    var media = (a + b + c) / 3;
    media = media.toFixed(2);
    return media;
};

function validaSituacao(valor) {
    var situacao = "";

    if (valor >= 7) {
        situacao = "Aprovado"
    }
    if (valor > 4 && valor < 7) {
        situacao = "Em exame"
    }
    if (valor <= 4) {
        situacao = "Reprovado"
    }

    return situacao;
};