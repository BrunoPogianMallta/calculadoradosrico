



let aporte =document.getElementById('aporte');
console.log(aporte)
let porcentagem = document.getElementById('porcentagem');
let dias =document.getElementById('dias');
let resultado = document.getElementById('resultado');
let anos =10;
let btn = document.getElementById('calcularBtn');

let acumulator = 0



function calculaPorcentagem(value,percentage){
    let valorCalculado = value * percentage/100;
    return valorCalculado;
}

console.log('apoha',typeof aporte)

function calculaJurosAcumulados(days,value,percentage){
         acumulator = value;
         let cont =0;
         let impostoMensal =0;
         let lucroMensal = 0;
        for(let i =1;i <= days ;i++){
          let valorDiario = calculaPorcentagem(acumulator,percentage);
          lucroMensal += valorDiario
          acumulator += valorDiario 
          cont ++
          if(cont == 30){
            let juros = (20 * lucroMensal) /100
            acumulator -= juros;
            impostoMensal += acumulator
            console.log('Valor depois do imposto desse mes',acumulator)
            cont = 0;
          }
        }
        return acumulator
}

function previsaoALongoPrazo(value,percentage,years,days){
    let valorAnual = 0;
    for(let i = 1; i <= years; i++){
        valorAnual += calculaJurosAcumulados(days,value,percentage)
        console.log(`ano ${i}: R$${valorAnual}`)
    }
    if(days >= 365){
        console.log(`Valor ao  final de ${days/30} anos ${valorAnual}`)
    }

    console.log(`Valor ao  final de ${days/30} meses ${valorAnual}`)
    }


// console.log('Valor diário arrecadado R$',calculaPorcentagem(aporte,porcentagem));

// calculaJurosAcumulados(dias,aporte,porcentagem)

//  previsaoALongoPrazo(aporte,porcentagem,anos,dias)

btn .addEventListener('click',(e)=>{
    e.preventDefault();
   
    let valor = Number(aporte.value) 
    let dia = Number(dias.value) 
    let porcent = Number(porcentagem.value) 
    resultado.value = calculaJurosAcumulados(dia,valor,porcent).toFixed(2)

    console.log(valor)
    console.log(dias.value)
    console.log(porcentagem.value)
})