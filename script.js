// de novo agradeçam o chatgpt e não eu porque eu sou uma negação em js (eu fiz o html pelo menos e so pedi pra ele escrever isso)
// eu vou deixar os comentários dele pra nós entendermos mas quando o código for portado pro site de vdd pfv tirem 💔

// seleciona todas as perguntas e o resultado final depois de todas as respostas
const perguntas = document.querySelectorAll('.listaPerguntas__item');
const resultadoDiv = document.querySelector('.resultado');

// Inicializa todas as perguntas como inativas, exceto a primeira
document.addEventListener('DOMContentLoaded', () => {
    perguntas.forEach((pergunta, index) => {
        if (index > 0) { // Aplica a classe apenas nas perguntas que não são a primeira (no caso a primeira tem index=0 pelo que eu entendo)
            pergunta.classList.add('listaPerguntas__item--inativo');
        }
    });
});

// Define o comportamento dos botões
perguntas.forEach(pergunta => {
    const botoes = pergunta.querySelectorAll('.botao');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove a classe inativa e adiciona a classe respondida
            pergunta.classList.remove('listaPerguntas__item--inativo');
            pergunta.classList.add('respondida');

            // Mostra a resposta
            const resposta = pergunta.querySelector('.resposta');
            resposta.style.display = 'block';
            resposta.querySelector('.resposta__mensagem').textContent = botao.value === 'v' ? 'Resposta certa!' : 'Resposta errada!';

            // Define a explicação
            const explicacao = resposta.querySelector('.resposta--explicacao');
            explicacao.style.display = 'block';

            // Verifica se a resposta está correta
            const isCorreta = botao.value === 'v';
            resposta.querySelector('.resposta__mensagem').textContent = isCorreta ? 'Resposta certa!' : 'Resposta errada!';

            // Aplica a cor correta ou incorreta ao botão clicado
            if (isCorreta) {
                botao.classList.add('botao--correto');
            } else {
                botao.classList.add('botao--incorreto');
            }

            // Desativa todos os botões após a resposta
            botoes.forEach(b => {
                b.disabled = true;
                b.classList.remove('ativo');
            });

            // Verifica se existem perguntas não respondidas e ativa a próxima
            const nextPergunta = Array.from(perguntas).find(p => p.classList.contains('listaPerguntas__item--inativo'));
            if (nextPergunta) {
                nextPergunta.classList.remove('listaPerguntas__item--inativo'); // Ativa a próxima pergunta
            } else {
                // Se não houver mais perguntas inativas, mostra o resultado
                resultadoDiv.style.display = 'block'; // Torna a div de resultado visível
            }
        });
    });
});