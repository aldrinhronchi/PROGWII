function calculadora() {
    var valor1 = document.getElementById("fnumero1").value
    var valor2 = document.getElementById("fnumero2").value
    var soma = (parseInt(valor1) + parseInt(valor2))
    var subt = valor1 - valor2
    var mult = valor1 * valor2
    var div = valor1 / valor2
    var resto = valor1 % valor2
    document.querySelector('.soma').innerHTML = soma;
    document.querySelector('.sub').innerHTML = subt;
    document.querySelector('.mult').innerHTML = mult;
    document.querySelector('.div').innerHTML = div;
    document.querySelector('.resto').innerHTML = resto;
}