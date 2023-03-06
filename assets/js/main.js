function meuEscopo(){
    const form = document.querySelector('.form');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        const imc = peso / (altura ** 2);
        if (!peso){
            setResultado('Peso invalido', false);
            return;
        }
        if(!altura) {
            setResultado('Altura invalida', false);
            return;
        }
        console.log(imc);
        if (imc < 18.5){
            setResultado(`Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`, true);
        } else if (18.5 <= imc && imc <= 24.9){
            setResultado(`Seu IMC é ${imc.toFixed(2)} (Peso normal)`, true);
        } else if (25 <= imc && imc <= 29.9){
            setResultado(`Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`, true);
        } else if (30 <= imc && imc <= 34.9){
            setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`, true);
        } else if (25 <= imc && imc <= 39.9){
            setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`, true);
        } else {
            setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`, true);
        }

    }
    form.addEventListener('submit', recebeEventoForm);

    function setResultado(msg, isValid){
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = document.createElement('p');
        if (isValid === true){
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('paragrafo-erro');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    }
}

meuEscopo();