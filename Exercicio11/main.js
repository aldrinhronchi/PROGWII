function calculo() {
    var num1 = parseInt(document.getElementById('num1').value);
    var erro = "";
    if (validar(num1)) {
        var soma = fatorial(num1);
        document.querySelector("div.resultados p.soma").innerHTML = `Resultado do Fatorial de ${num1}: ${soma}`;
        document.querySelector("div.mensagens").innerHTML = erro;
    }
}

function validar(a) {
    var retorno = false;

    if (a >= 0) {
        retorno = true
        erro = " ";
    } else {
        erro = "somente valores positivos";
        document.querySelector("div.mensagens").innerHTML = erro;
    }
    return retorno;
}

function fatorial(a) {
    if (a <= 1)
        return 1;
    else
        return a * fatorial(a - 1);
}