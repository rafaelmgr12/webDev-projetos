const escola = "Cod3r"

console.log(escola.charAt(4))
//console.log(escola.charAt(5))// Não gera erro, JS é uma linguagem relaxada.
console.log(escola.charCodeAt(3)) // Retorna o valor unicode da tabela.
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola" + escola + "!") // Semelhante ao python

console.log(escola.replace(3,"e"))

console.log("Ana,Maria,Pedro".split(",")) // regex no contextp do  
