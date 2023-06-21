let idade, anos, meses, dias

// idade = Number(prompt("Qual a sua idade?"))
anos = Number(prompt("Quantos anos?"))
meses = Number(prompt("Quantos meses?"))
dias = Number(prompt("Quantos dias?"))

idade = anos * 365 +meses * 30 + dias


alert("Sua idade em dias é: " + idade)