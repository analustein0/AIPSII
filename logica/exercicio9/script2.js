let primeiro;
let segundo;
let sinal;

function enviaSete(){
    document.getElementById("visor").value += "7"
}

function enviaOito(){
    document.getElementById("visor").value += "8"
}

function enviaNove(){
    document.getElementById("visor").value += "9"
}

function enviaQuatro(){
    document.getElementById("visor").value += "4"
}

function enviaCinco(){
    document.getElementById("visor").value += "5"
}

function enviaSeis(){
    document.getElementById("visor").value += "6"
}

function enviaUm(){
    document.getElementById("visor").value += "1"
}

function enviaDois(){
    document.getElementById("visor").value += "2"
}

function enviaTrês(){
    document.getElementById("visor").value += "3"
}

function enviaZero(){
    document.getElementById("visor").value += "0"
}

function atualizaVisor(){
    primeiro = document.getElementById("visor").value 
   document.getElementById("visor").value = ''
}


   function adicao(){
    primeiro = document.getElementById("visor").value 
   document.getElementById("visor").value = ''
   
    sinal = "+"
}


function igual(){
    segundo =  document.getElementById("visor").value
    let result
    if(sinal == "p"){
    result = Math.pow(parseInt(primeiro), parseInt(segundo))
    
    }
    if(sinal == "r"){
        result = Math.sqrt(parseInt(primeiro))  
        
    }
    
    if(sinal == "+"){
         result = parseInt(primeiro) + parseInt(segundo)
         
     }
     if(sinal == "-"){
    result = parseInt(primeiro) - (segundo)
    
    }
    if(sinal == "X"){
        result = parseInt(primeiro) * (segundo)
        
        
    }
    if(sinal == "/"){
        result = parseInt(primeiro) / (segundo)
        }
        document.getElementById("visor").value = result
   
    }


function apaga(){
    document.getElementById("visor").value = ''
    primeiro = ''
    segundo = ''
}

function subtracao(){
    primeiro = document.getElementById('visor').value 
   document.getElementById('visor').value = ''
   sinal = "-"
   
}

function multiplicacao(){
    primeiro = document.getElementById('visor').value 
   document.getElementById('visor').value = ''
   sinal = "X"
}

function divisao(){
    primeiro = document.getElementById('visor').value 
   document.getElementById('visor').value = ''
   sinal = "/"
}

function raizQuad(){
    primeiro = document.getElementById('visor').value 
   document.getElementById('visor').value = ''
   sinal = "r"
   igual()
}

function potencia(){
primeiro = document.getElementById('visor').value 
   document.getElementById('visor').value = ''
   sinal = "p"
}  





