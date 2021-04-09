// Carne - 400 gr por pessoa + de 6horas - 650 gr
// Cerveja - 1200 ml por perssoa + de 6horas - 2000 ml
// Refrigerante/agua = 1000 ml por pessoa + de 6horas - 1500 ml 

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}


function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let consumoCarne = carnePorPessoa(duracao);
    let consumoCerveja = cervejaPorPessoa(duracao);
    let consumoBebidaSemAlcool = bebidasPorPessoa(duracao);


    let quantidadeTotalDeCarne = consumoCarne * adultos + (consumoCarne / 2 * criancas);
    let quantidadeTotalDeCerveja = consumoCerveja * adultos;
    let quantidadeTotalDeBebidasSemAlcool = consumoBebidaSemAlcool * adultos + (consumoBebidaSemAlcool / 2 * criancas);

    resultado.innerHTML = `<p class="bottom"><strong>${quantidadeTotalDeCarne / 1000}Kg de Carne</strong>, podendo ser variado (carne, frango e linguiça)</p>`;
    resultado.innerHTML += `<p class="bottom"><strong>${Math.ceil(quantidadeTotalDeCerveja / 355)} Latas de Cerveja de 355ml</strong></p>`;
    resultado.innerHTML += `<p><strong>${Math.ceil(quantidadeTotalDeBebidasSemAlcool / 2000)} Pet's 2L (Água/Refrigerante)</strong></p>`;
}

