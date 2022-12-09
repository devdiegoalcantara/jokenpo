var jogadorNome1;
var jogadorPontos = 0;
var jogadorEscolha = 0;

var computadorPontos = 0;
var computadorEscolha = 0;

//Exibe mensagem
function mensagem(texto) {
    document.getElementById("mensagem").innerHTML = texto;
}
//Define o nome do Jogador
function definirNomeJogador(nome) {
    document.getElementById("jogadorNome").innerHTML = nome;
}

// Sorteia entre dois número
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// calcula e retorna quem ganhou
// 0 - Empate
// 1 - Jogador
// 2 - Computador
function calcularEscolha(jogador, computador) {
    if (jogador == 1 && computador == 1) {
        return 0;
    }
    else if (jogador == 1 && computador == 2) {
        return 2;
    } 
    else if (jogador == 1 && computador == 3) {
        return 1;
    } 
    else if (jogador == 2 && computador == 1) {
        return 1;
    }
    else if (jogador == 2 && computador == 2) {
        return 0;
    } 
    else if (jogador == 2 && computador == 3) {
        return 2;
    }
    else if (jogador == 3 && computador == 1) {
        return 2;
    }
    else if (jogador == 3 && computador == 2) {
        return 1;
    } 
    else if (jogador == 3 && computador == 3) {
        return 0;
    }
}
//Escolhe a jogada do usuário
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura
  
// exibir para o usuário a mão selecionada
function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar("jogador", jogadorEscolha);

    // sortear a jogada do computador
    computadorEscolha = sortear(1, 3);
    selecionar("computador", computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if(ganhador == 0){
        mensagem ("Empate");
    }
    else if (ganhador == 1) {
        mensagem ("Ponto para " + jogadorNome1);
        somarPontoJogador();
    }
    else if (ganhador == 2) {
        mensagem ("Ponto para Computador");
        somarPontoComputador();
    }
    setTimeout(function() { 
        deselecionar("jogador", jogadorEscolha);
        deselecionar("computador", computadorEscolha);

        mensagem(jogadorNome1 + " escolha uma opção acima");
     }, 3000);
}
function selecionar(tipo, escolha){
        document.getElementById(tipo + "Escolha" + escolha).classList.add("selecionado");
    }
    function deselecionar(tipo, escolha){
        document.getElementById(tipo + "Escolha" + escolha).classList.remove("selecionado");
    }
    // calcular quem ganhou
    // somar pontos
    function somarPontoJogador() {
    jogadorPontos++;
    document.getElementById("jogadorPontos").innerHTML = jogadorPontos;
}
    function somarPontoComputador() {
    computadorPontos++;
    document.getElementById("computadorPontos").innerHTML = computadorPontos;
}
          
document.getElementById("jogadorEscolha1").onclick = function () { jogar(1); };
document.getElementById("jogadorEscolha2").onclick = function () { jogar(2); };
document.getElementById("jogadorEscolha3").onclick = function () { jogar(3); };

jogadorNome1 = prompt('Qual é o seu nome?');


mensagem("Bem vindoª " + jogadorNome1 + "  vamos começar? escolha uma das opções acima!");
definirNomeJogador(jogadorNome1);

