function realizarSuma() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    document.getElementById('resultado').innerHTML = '';

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        showError();
    } else {
        let resultado = numero1 + numero2;
        document.getElementById('resultado').innerHTML = `El resultado de la suma es: ${resultado}`;
    }
}

function showError() {
    alert("Por favor, ingresa números válidos en ambos campos.");
}