



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
         console.log(typeof value)
         console.log('valor do acumulator',acumulator)
         let cont =0;
         let impostoAnual =0;
        for(let i =1;i <= days ;i++){
          let valorDiario = calculaPorcentagem(acumulator,percentage);
        //   console.log(`Valor do dia ${i}: R$ ${acumulator}`)
          acumulator += valorDiario 
          console.log('valor do  dia ',i ,acumulator)
          cont ++
          if(cont == 30){
            let juros = (20 * acumulator) /100
            acumulator -= juros;
            impostoAnual += acumulator
            console.log('Valor depois do imposto desse mes',acumulator)
            cont = 0;
          }
        }
        // console.log('Valor do total de imposto pago no ano: ',impostoAnual)
        console.log('valor',acumulator)
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