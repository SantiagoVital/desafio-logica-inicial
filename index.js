// #Desafio Classificador de Nível de Herói
//
// **O que deve ser utilizado:**
//
// - Vairiáveis
// - Operadores
// - Laços de Repetição
// - Estrutura de Decisões
//
// ## Objetivo:
// Crie uma variável para armazenar o nome de quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//
// Se o XP for menor do que 1.000 = Ferro
// Se o XP for entre 1.001 e 2.000 = Bronze
// Se o XP for entre 2.001 e 5.000 = Prata
// Se o XP for entre 6.001 e 7.000 = Ouro
// Se o XP for entre 7.001 e 8.000 = Platina
// Se o XP for entre 8.001 e 9.000 = Ascendente
// Se o XP for entre 9.001 e 10.000 = Imortal
// Se o XP for maior ou igual a 10.001 = Radiante
//
// ## Saída
// Ao final deve-se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nível}**."

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para obter entrada do usuário
function getUserInput(query) {
    return new Promise((resolve) => {
        rl.question(query, (input) => resolve(input));
    });
}

async function classifyHero() {
    // Solicita ao usuário que digite o nome do herói
    let nomeHeroi = await getUserInput("Digite o nome do herói: ");

    // Solicita ao usuário que digite a quantidade de experiência
    let xp = parseInt(await getUserInput("Digite a quantidade de experiência (XP): "), 10);

    // Estrutura de decisão para classificar o nível baseado no XP
    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    // Saída
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);

    // Fechar o readline após o uso
    rl.close();
}

classifyHero();