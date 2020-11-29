const entrada = require('readline-sync')
const fs = require("fs")


let opcao
const registros = leArquivo()

function leArquivo() {
    let vetorVazio = []
    let arqRegistros = fs.readFileSync('./pessoas/pessoas.txt','utf8')
    let vetor = arqRegistros.split(';')
    console.log(vetor)
    for( let i in vetor){
        console.log(vetor[i])
    }
    console.log(vetorVazio)
    return vetorVazio
}


function criaRegistro() {

    let nome = entrada.question("Digite seu nome: ")
    let idade = parseInt(entrada.question("Digite sua idade: "))
    let email = entrada.question("Digite seu email: ")
    let id = registros.length+1
    console.log(registros)
    fs.appendFileSync('./pessoas/pessoas.txt', `;{id:'${id}',name:'${nome}',age:'${idade}',mail:'${email}'}`, function (err) {
        if (err) throw err;
        console.log('Arquivo criado!')
    })
}


function listaRegistro() {
    leArquivo()
    for(let i in registros){
        console.log(`ID: ${registros[i].id} Nome: ${registros[i].name} Idade: ${registros[i].age} E-mail: ${registros[i].mail}`)
    }
    //console.log(registros)
}

function atualizaRegistro() {
    listaRegistro()
    let alterar = entrada.question("Digite o ID que será alterado: ")
    let alteraCampo = ""
    let campo = entrada.question("Escolha o campo que deseja atualizar: \n 1 - Nome\n 2 - Idade\n 3 - E-mail\nDigite uma opcao: ")
    if(campo == 1){
        alteraCampo = "name"
    }
    else if(campo == 2){
        alteraCampo = "age"
    }
    else if(campo == 3){
        alteraCampo = "mail"
    }
    registros[alterar-1][alteraCampo] = entrada.question("Digite o novo valor: ")
}

function deletaRegistro() {
    listaRegistro()
    let deletar = entrada.question("Digite o ID do registro que sera deletado: ")
    registros.splice(deletar-1,1)
    console.log(`Registro ${deletar}, removido com sucesso`)
}


while (opcao != 0){
    opcao = entrada.question("Menu:\n 1 - Nova entrada\n 2 - Consultar registro\n 3 - Atualizar registro\n 4 - Deletar registro\n 0 - Sair\nDigite uma opcao: ")
    if(opcao == 1){
        criaRegistro()
    }
    else if (opcao == 2){
        listaRegistro()
    }
    else if (opcao == 3){
        atualizaRegistro()
    }
    else if (opcao == 4) {
        deletaRegistro()
    }
    else if (opcao == 0){
        console.log("Saindo")
    } else {
        console.log("Opcao invalida")
    }
}