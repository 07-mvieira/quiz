const perguntas = document.querySelectorAll('.listaPerguntas__item');
const resultadoDiv = document.querySelector('.resultado');

document.addEventListener('DOMContentLoaded', () => {
    perguntas.forEach((pergunta, index) => {
        if (index > 0) {
            pergunta.classList.add('listaPerguntas__item--inativo');
        }
    });
});

perguntas.forEach(pergunta => {
    const botoes = pergunta.querySelectorAll('.botao');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            pergunta.classList.remove('listaPerguntas__item--inativo');
            pergunta.classList.add('respondida');

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

            const nextPergunta = Array.from(perguntas).find(p => p.classList.contains('listaPerguntas__item--inativo'));
            if (nextPergunta) {
                nextPergunta.classList.remove('listaPerguntas__item--inativo');
            } else {
                resultadoDiv.style.display = 'block';
            }
        });
    });
});