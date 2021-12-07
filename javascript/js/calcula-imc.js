
var pacientes = document.querySelectorAll(".paciente");

function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
// form.js
function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var alturaEhValida = validaAltura(altura);
	var pesoEhValido = validaPeso(peso);

	if(!pesoEhValido){
	    console.log("Peso inválido");
	    tdImc.textContent = "Peso inválido!";
	    pesoEhValido = false;
	    paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValida){
	    console.log("Altura inválida");

	    tdImc.textContent = "Altura inválida!";
	    alturaEhValida = false;
	    paciente.classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido) {

	    var imc = calculaIMC(peso, altura);
	    tdImc.textContent = imc;   
	}
}
