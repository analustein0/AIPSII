let HT, VH, PD, SB, TD, SL, valor_total

HT = Number(prompt("Quantas horas você trabalhou esse mês?"))
VH = Number(prompt("Quanto você recebe por hora trabalhada?"))
PD = Number(prompt("Qual o seu percentual de desconto?"))

SB = HT * VH
TD = (PD/100)*SB
SL = SB - TD

alert ("Horas trabalhadas " + HT + 
"\nSeu ganho por hora: R$ " + VH.toFixed(2) +
 "\nSeu salário bruto: R$  " + SB.toFixed(2) + 
 "\nSeu desconto é: R$ " + TD.toFixed(2) +
  "\nSeu salário liquido é: R$ " + SL.toFixed(2))
