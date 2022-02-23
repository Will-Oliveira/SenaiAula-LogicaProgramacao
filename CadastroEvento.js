// para verificar o código mudando de acordo com os devidos input, é preciso mudar valores nas linhas descritas abaixo
// linha 13, altera a data que o evento irá acontecer - destaco que a formatação da data está esabelecida em: "mês/dia/ano"
// linha 28, altera a data de nascimento - destaco que a formatação da data está esabelecida em: "mês/dia/ano"
// linha 37, para incluir um nome extra na lista (ou retirar), é preciso que faça colocando o nome entre aspas e inserir virgula: "nome da pessoa",
// linha 39, altere a quantidade de lugares que terá o evento
// linha 45, altere a quantidade de lugares que será feita a condicional

// algumas observações:
// a linha 16 contém o código que pesquisei no seguinte link: https://www.youtube.com/watch?v=2EAs2BH3Y_4&t=79s
// nas linhas 11, 12, 13 e 14, devido ainda não ter chegado no módulo para estudar essa função, pesquisei (MUITO) e encontrei um código bem pequeno, no link: 
// https://pt.stackoverflow.com/questions/93741/calcular-idade-em-anos-usando-javascript

let dataEvento = new Date('03/30/2022')
let dataHoje = new Date()

if(dataEvento > dataHoje){
    console.log("Olá, o evento ocorrerá dia: " + (new Intl.DateTimeFormat('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'}).format(dataEvento) + "\nFavor, insira sua data de nascimento a seguir:\n"))
} else {
    console.log("Que pena, o evento ocorreu dia:", dataEvento, "Acompanhe nosso site que em breve, teremos outros eventos. \n")
}

function idade(d1, d2) {
	d2 = d2 || new Date();
	var diff = d2.getTime() - d1.getTime();
	return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

  	let dataAniversario = (idade(new Date('03/10/2020')))

  if(dataAniversario > 17){
	  console.log("Parabéns! Você atende a idade minima para se cadastrar. A seguir, coloque seu nome na lista de participantes.\n") 
  }
  else{
	  console.log("Cadastro não efetuado. Este evento é voltado para maiores de 18 anos.\n")
  }
    console.log("Abaixo, segue a lista de particiantes que irão participar da palestra, junto com você:")
    let listaParticipantes = ["Miguel", "Arthur", "Gael", "Heitor", "Theo", "Davi", "Gabriel", "Bernardo", "Samuel", "João Miguel", "Helena", "Alice", "Maria Alice"]
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