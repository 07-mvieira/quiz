const perguntas = document.querySelectorAll('.listaPerguntas__item');
const resultadoDiv = document.querySelector('.resultado');
let perguntasRespondidas = 0

document.addEventListener('DOMContentLoaded', () => {
});

perguntas.forEach(pergunta => {
    const botoes = pergunta.querySelectorAll('.botao');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            pergunta.classList.add('respondida');
            perguntasRespondidas++
            console.log("perguntas respondidas:",perguntasRespondidas);
            
            const resposta = pergunta.querySelector('.resposta');
            resposta.style.display = 'block';
            resposta.querySelector('.resposta__mensagem').textContent = botao.value === 'v' ? 'Resposta certa!' : 'Resposta errada!';

            const explicacao = resposta.querySelector('.resposta--explicacao');
            explicacao.style.display = 'block';

            const isCorreta = botao.value === 'v';
            resposta.querySelector('.resposta__mensagem').textContent = isCorreta ? 'Resposta certa!' : 'Resposta errada!';

            if (isCorreta) {
                botao.classList.add('botao--correto');
            } else {
                botao.classList.add('botao--incorreto');
            }

            botoes.forEach(b => {
                b.disabled = true;
                b.classList.remove('ativo');
            });

            if (perguntasRespondidas==10) {
                resultadoDiv.style.display = 'block';
            }
        });
    });
});