



let aporte =document.getElementById('aporte');
console.log(aporte)
let porcentagem = document.getElementById('porcentagem');
let dias =document.getElementById('dias');
let resultado = document.getElementById('resultado');
let anos =10;
let btn = document.getElementById('calcularBtn');
let resultadoContainer = document.querySelector('.resultado-container');

let acumulator = 0



function calculaPorcentagem(value,percentage){
    let valorCalculado = value * percentage/100;
    return valorCalculado;
}

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
          console.log('valor atual do aporte',acumulator,'dia'+i)
          console.log('lucro',lucroMensal)

          if(cont == 30){
            console.log('valor total do mes sem juros',acumulator)
            let juros = (20 * lucroMensal) /100
            console.log('valor juros',juros)
            lucroMensal-= juros;
            console.log('lucro',lucroMensal)
            // acumulator+= lucroMensal;
            console.log('valor do acumulator apor 30 dias',acumulator)
            console.log('Valor depois do imposto desse mes',acumulator)
            cont = 0;
          }
        }
        return acumulator
}

function previsaoALongoPrazo(value,percentage,years,days){
    let valorAnual = 0;
    for(let i = 1; i <= days; i++){
        valorAnual += calculaJurosAcumulados(days,value,percentage)
        console.log(`ano ${i}: R$${valorAnual}`)
    }
    if(days >= 365){
        console.log(`Valor ao  final de ${days/30} anos ${valorAnual}`)
    }

    console.log(`Valor ao  final de ${days/30} meses ${valorAnual}`)
    }



btn .addEventListener('click',(e)=>{
    e.preventDefault();
   
    let valor = Number(aporte.value) 
    let dia = Number(dias.value) 
    let porcent = Number(porcentagem.value) 
    resultado.value ="R$ "+calculaJurosAcumulados(dia,valor,porcent).toFixed(2)
    resultadoContainer.style = 'display:flex';

})
