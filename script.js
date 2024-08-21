const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pedrinho foi ao parque pois estava entediado, ele quer fazer algo, o que ele deve fazer?",
        alternativas: [
            {
                texto: "Tomar sorvete ",
                afirmacao: "Seu sorvete caiu no chão, "
            },
            {
                texto: "Jogar futebol",
                afirmacao: "Você fez 2 gols contra,"
            }
        ]
    },
    {
        enunciado: "Você decide voltar pra casa, o que você faz quando chega em casa?",
        alternativas: [
            {
                texto: "Jogar algo em seu celular com seu amigo Juninho",
                afirmacao: "Você é extremamente ruim, assim sendo xingado por Juninho, "
            },
            {
                texto: "Fazer algo gostoso para comer. ",
                afirmacao: "Por você não saber cozinhar seu rango queima, e você fica triste,"
            }
        ]
    },
    {
        enunciado: "Você fica extremamente triste após um dia muito ruim, você decide tentar se animar, o que você faz?",
        alternativas: [
            {
                texto: "Você joga na loteria",
                afirmacao: "e após um dia ruim, mesmo sem expectativa, você decide jogar na lotofácil, aguarda alguns dias, e sai o resultado, VOCÊ GANHOU E FICA EXTREMAMENTE FELIZ PELA PRIMEIRA VEZ NA SEMANA, assim, você pode comprar o carro que tanto quer, um palio 2008 com aerofolio, e assim, sua historia termina feliz."
            },
            {
                texto: "Você ouve uma música",
                afirmacao: "Você ouve sua musica favorita, e começa a dançar, porém escorrega e bate a cabeça, assim desmaiando e ficando em coma durante 3 anos, e quando você acorda, perdeu tudo que tinha, seu celular pois sua mãe deu ele a sua irmã, seus tênis pois não servem mais, e por fim sua namorada, à qual traiu você com seu melhor amigo juninho, assim você termina sua história extremamente triste e todo lascado."
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
