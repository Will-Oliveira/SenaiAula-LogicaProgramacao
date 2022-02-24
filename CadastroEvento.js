// para verificar o código mudando de acordo com os devidos input, é preciso mudar valores nas linhas descritas abaixo
// linha 14, altera a data que o evento irá acontecer - destaco que a formatação da data está esabelecida em: "mês/dia/ano"
// linha 30, altera a data de nascimento - destaco que a formatação da data está esabelecida em: "mês/dia/ano"
// linha 39, coloque seu nome para incluir na listagem de participantes
// linha 42, para incluir um nome extra na lista (ou retirar), é preciso que escreva o nome entre aspas e inserir virgula: "nome da pessoa", isso irá afetar a soma!
// linha 44, altere a quantidade de lugares que terá o evento
// linha 50, altere a quantidade de lugares que será feita a condicional

// algumas observações e devidos créditos:
// as linhas 18 e 20 contém o código que usei para sanar o problema de formatação para pt-BR; pesquisei e achei a solução no seguinte link: https://www.youtube.com/watch?v=2EAs2BH3Y_4&t=79s
// nas linhas 23, 24, 25 e 26; devido ainda não ter chegado no módulo para estudar essa função, pesquisei (MUITO) e encontrei um código bem pequeno, no link abaixo que sanou meu problema: 
// https://pt.stackoverflow.com/questions/93741/calcular-idade-em-anos-usando-javascript

let dataEvento = new Date('03/30/2022')
let dataHoje = new Date()

if(dataEvento > dataHoje){
    console.log("Olá, hoje é " + (new Intl.DateTimeFormat('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'}).format(dataHoje)) + ".\nA palestra será: " + (new Intl.DateTimeFormat('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'}).format(dataEvento) + ".\nFavor, insira sua data de nascimento a seguir:\n"))
    
} else {
    console.log("Que pena, o evento ocorreu dia:" + (new Intl.DateTimeFormat('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'}).format(dataEvento) + "\nMas não se preocupe! Acompanhe nosso site que em breve, teremos outros eventos. \n"))
}

function idade(d1, d2) {
	d2 = d2 || new Date();
	var diff = d2.getTime() - d1.getTime();
	return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

let dataAniversario = (idade(new Date('03/10/2000')))

  if(dataAniversario > 17){
	  console.log("Parabéns! Você atende a idade mínima para se cadastrar. A seguir, coloque seu nome na lista de participantes.\n") 
}
  else{
	  console.log("Cadastro não efetuado. Este evento é voltado para maiores de 18 anos.\n")
}

let seuNome = "William"
    console.log("Olá", seuNome, "\nAbaixo, segue a lista de particiantes que irão participar da palestra, junto com você:\n")

let listaParticipantes = [seuNome, "Miguel", "Arthur", "Gael", "Heitor", "Theo", "Davi", "Gabriel", "Bernardo", "Samuel", "João Miguel", "Helena", "Alice", "Maria Alice"]
    quantidade = listaParticipantes.length;
let lugares = 100
    
    for(let contador = 0; contador < listaParticipantes.length; contador++){
        console.log(listaParticipantes[contador])}
        console.log("\n"+"A quantidade de participantes cadastrados no momento são de:", quantidade, "pessoas.")

    if(lugares <= 100){
        console.log("Aproveite que ainda temos", lugares-quantidade, "vagas disponíveis.")
    }
    else{
        console.log("Cadastro para o evento não realizado devido excesso de participantes!")
    }