// let média, nota1, nota2 

// nota1 = Number(prompt("Digite a sua primeira nota: "))
// nota2 = Number(prompt("Digite a sua segunda nota: "))

// média = (nota1+nota2)/2

// if(média > 7){
//    alert("Aprovado")
// }else{
//     alert("Reprovado")
// }
//  alert("Sua média final é: " + média)

// let pontuação 

// pontuação = Number(prompt("Digite a sua pontuação: "))
// if(pontuação <= 10){
//     alert("Deu ruim")
// }
// if(pontuação >10 && pontuação <=100){
//     alert("Tá quase em")
// }
// if(pontuação >100 && pontuação <=200){
//     alert("Supimpa")
// }
// if(pontuação >200){
//     alert("MITOU!")
// }

let dias, multa, desconto, valorDiaria, conta

dias = Number(prompt("Quantos dias vai ficar? "))
multa = Number(150)
desconto = Number(0.25)

if(dias <= 5){
     valorDiaria = (100*dias) 
    
}
if(dias >5 && dias <= 10){
    valorDiaria = (90*dias) 
   
}
if(dias >10){
    valorDiaria = (80*dias) 
   
}

conta = valorDiaria*0.75 + multa
alert("Conta: " + conta)