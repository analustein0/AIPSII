let eleitores, votos_brancos, votos_nulos, votos_validos, total, PB, PN, PV

eleitores = Number(prompt("Quantos eleitores?"))
votos_brancos = Number(prompt("Quantos votos brancos?"))
votos_nulos = Number(prompt("Quantos votos nulos?"))
votos_validos = Number(prompt("Quantos votos válidos?"))

total = votos_brancos + votos_nulos + votos_validos

PB = votos_brancos/total*100 
PN = votos_nulos/total*100 
PV = votos_validos/total*100 

alert ("Brancos: " + PB.toFixed(2) + "Nulos: " +  PN.toFixed(2) + "Válidos:" + PV.toFixed(2))

