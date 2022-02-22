let dataEvento = new Date('03/30/2022')
let dataHoje = new Date()
let dataNascimento = new Date('03/10/2000')


// let idadeEvento = dataEvento - dataNascimento
//     if(idadeEvento > 17){
//         console.log("maior de idade")
//     }else{
//         console.log("Menos de 18 anos não podem se cadastrar para esse evento.")
//     }
//         let()


if(dataEvento > dataHoje){
    console.log("Bem vindo!\n")

    let listaParticipantes = ["Miguel", "Arthur", "Gael", "Heitor", "Theo", "Davi", "Gabriel", "Bernardo", "Samuel", "João Miguel", "Helena", "Alice", "Maria Alice"]
    quantidade = listaParticipantes.length;
    let lugares = 100
    
    for(let contador = 0; contador < listaParticipantes.length; contador++){
        console.log(listaParticipantes[contador])}
        console.log("\n"+"A quantidade de participantes cadastrados no momento são:", quantidade, "pessoas.", "\n"+"Faltam", lugares-quantidade, "vagas disponíveis para o evento.")
    


} else {
    console.log("Que pena, o evento já ocorreu...\n")
}

