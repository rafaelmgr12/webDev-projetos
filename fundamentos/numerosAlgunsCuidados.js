console.log(7 / 0); // não tem problema
console.log("10" / 2); // vai dar certo, ele pega o valor do conteudo da string e tenta converte em number
console.log("10,2" / 2); // ele vai falar que é NaN

console.log("Show" * 2); // NaN

console.log(0.1 + 0.7); //especificacão IEEE Standard, imprecisão para gera otimzição

//console.log(10.toString()
console.log((10.345).toString());
