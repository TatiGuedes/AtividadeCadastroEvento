const prompt = require('prompt-sync')();


var i;
contador = 0;
for(i = 1; i <= 101; i++) {

    //Define as perguntas do prompt

        const nome = +prompt("Insira seu nome:");
        const idade = +prompt("Insira sua idade:");


    // Condição que verifica que o contador chegou a 100 registros
    if ( contador == 100 ) {

        console.log ("Cadastro não permitido execido o limite!");
        break;

    } 
    // Condição para verificar idade
    else if  ( idade >= 18)  {

        console.log ("Usuário cadastrado com sucesso!"); 
        console.log(`Listando participantes!`);
        contador++;

    } 
    // Condição final que diz que caso os criterios acima nao sejam atendidos ele não é permitido
    else {

        console.log("Cadastro não permitido, idade menor que 18 anos");

    }
    
}