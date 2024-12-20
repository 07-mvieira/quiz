const perguntas = document.querySelectorAll('.listaPerguntas__item');
const resultadoDiv = document.querySelector('.resultado');
const article = document.querySelector('article')
let perguntasRespondidas = 0
let respostasCorretas = 0

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
                respostasCorretas++
                console.log("respostas corretas:",respostasCorretas)
            } else {
                botao.classList.add('botao--incorreto');
            }
            
            botoes.forEach(b => {
                b.disabled = true;
                b.classList.remove('ativo');
            });

            const acertos = document.getElementById('acertos');
            if (perguntasRespondidas==10) {
                resultadoDiv.style.display = 'block';
                acertos.innerHTML = `(${respostasCorretas}/10)`;
                article.style.filter = "blur(3px)";
            }

            const fechar = document.getElementById('fechar')
            fechar.addEventListener('click', () => {
                resultadoDiv.style.display = 'none';
                article.style.filter = "blur(0)";
            });
        });
    });
});