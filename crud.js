const entrada = require('readline-sync')


let opcao
let registros = [ { id: 1, name: 'erik', age: 38, mail: 'a@b.com' },
{ id: 2, name: 'gicele', age: 37, mail: 'b@c.com' },
{ id: 3, name: 'oliver', age: 3, mail: 'o@b.com' } ]


function criaRegistro() {

    let nome = entrada.question("Digite seu nome: ")
    let idade = parseInt(entrada.question("Digite sua idade: "))
    let email = entrada.question("Digite seu email: ")
    let id = registros.length+1
    registros.push({id: id, name: nome, age: idade, mail:email})
    console.log(registros)
}


function listaRegistro() {

    for(let i in registros){
        console.log(`ID: ${registros[i].id} Nome: ${registros[i].name} Idade: ${registros[i].age} E-mail: ${registros[i].mail}`)
    }
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