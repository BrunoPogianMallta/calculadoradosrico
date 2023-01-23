



let aporte =document.getElementById('aporte');
let porcentagem = document.getElementById('porcentagem');
let dias =document.getElementById('dias');
let resultado = document.getElementById('resultado');
let anos =10;
let btn = document.getElementById('calcularBtn');
let resultadoContainer = document.querySelector('.resultado-container');
let aviso = document.querySelector('.aviso');
 

let acumulator = 0


function limpaCampos(){
  aporte.value= '';
  porcentagem.value = '';
  dias.value = '';
}


function calculaPorcentagem(value,percentage){
    let valorCalculado = value * percentage/100;
    return valorCalculado;
}

function calculaJurosAcumulados(days,value,percentage){
         acumulator = value;
         let cont =0;
         let lucroMensal = 0;

         if(acumulator === 0 || days === 0 || percentage === 0){
           alert('Vai calcular o que ai meu amigo?')
           limpaCampos();
           return;
         }

         if(percentage > 100){
           alert('AHH!! mais de 100% de lucro ao dia? ta de palhaçada né?')
         }

         if(days > 18250){
           alert('Quem guarda dinheiro por tanto tempo?')
         }
         
        for(let i =1;i <= days ;i++){
          let valorDiario = calculaPorcentagem(acumulator,percentage);
          lucroMensal += valorDiario
          acumulator += valorDiario 
          cont ++
          
          if(cont == 30){
            let juros = (20 * lucroMensal) /100
            console.log('valor juros',juros)
            lucroMensal-= juros;
            cont = 0;
          }
        }

        return acumulator
}




btn .addEventListener('click',(e)=>{
    e.preventDefault();
    let valor = Number(aporte.value) 
    let dia = Number(dias.value) 
    let porcent = Number(porcentagem.value)
    resultado.value ="R$ "+calculaJurosAcumulados(dia,valor,porcent).toFixed(2)
    resultadoContainer.style = 'display:flex';
    aviso.style = 'display:none';
    limpaCampos();

})
