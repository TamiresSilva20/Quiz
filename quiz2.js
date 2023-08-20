// Array de perguntas e opções
const questions = [ //variáveis que possuem um valor fixo,uma constante somente leitura
    {
        question: " Quando você recebe seu salário, o que você faz primeiro?",
        options: [
            "Gasto em compras ou entretenimento",
            "Pago minhas contas e despesas imediatamente",
            "Guardo uma parte em uma conta de poupança"
        ]
    },
    {
        question: "Quanto você gasta em média por semana?",
        options: ["Muito", "Moderadamente", "Pouco"
        ]
    },
    {
        question: "Você costuma fazer um orçamento mensal?",
        options: [
            "Não, não vejo necessidade de fazer um orçamento",

            "Às vezes, tento controlar minhas despesas",

            "Sim, sempre planejo meus gastos"
        ]
    },


    {
        question: "Você segue um orçamento mensal?",
        options: ["Nunca", "Às vezes", "Sempre"
        ]
    },
    {
        question: "Você costuma acompanhar seus gastos mensais?",
        options: [
            "Não, não tenho ideia de onde meu dinheiro vai",
            "Às vezes, faço uma análise básica dos gastos",

            "Sim, mantenho um registro detalhado dos meus gastos"
        ]
    },
    {
        question: "Você costuma fazer compras impulsivas?",
        options: ["Sempre", "Às vezes", "Raramente"
        ]
    },
    {
        question: "Como você decide se pode fazer uma compra maior?",
        options: [
            "Eu não costumo fazer compras maiores",
            "Eu compro se quero algo, independentemente do preço",
            "Eu sempre comparo preços e avalio se é realmente necessário"
        ]
    },
];

// Variáveis para controlar o estado do quiz
let currentQuestion = 0; // Índice da pergunta atual
let score = 0;// Pontuação acumulada


const perguntaElement = document.getElementById("pergunta");
const btn1Element = document.getElementById("btn-1");
const btn2Element = document.getElementById("btn-2");
const btn3Element = document.getElementById("btn-3");
const resultadoElement = document.getElementById("resultado");
const codpergElement = document.getElementById("codpergunta");
const pontoElement = document.getElementById("pontos");

function showQuestion() {
    const currentQuestionData = questions[currentQuestion];
    perguntaElement.textContent = currentQuestionData.question;
    btn1Element.textContent = currentQuestionData.options[0];
    btn2Element.textContent = currentQuestionData.options[1];
    btn3Element.textContent = currentQuestionData.options[2];

    const numeroDaQuestao = currentQuestion + 1;
    const totalQuestoes = questions.length;
    pontoElement.textContent = score;
    codpergElement.textContent = ` ${numeroDaQuestao} / ${totalQuestoes}`;
}
// atualizar a pontuação baseada na opção escolhida
function updateScore(optionIndex) {
    if (optionIndex === 0) {
        score += 3;
    } else if (optionIndex === 1) {
        score += 2;
    } else if (optionIndex === 2) {
        score += 1;
    }
}
// Event listeners para os botões de opção
btn1Element.addEventListener("click", () => {
    updateScore(0);
    nextQuestion();
});

btn2Element.addEventListener("click", () => {
    updateScore(1);
    nextQuestion();
});

btn3Element.addEventListener("click", () => {
    updateScore(2);
    nextQuestion();
});


function showResult() {
    btn1Element.style.display = 'none';
    btn2Element.style.display = 'none';
    btn3Element.style.display = 'none';
    perguntaElement.style.display = 'none';
    codpergElement.style.display = 'none';
    pontoElement.style.display='none';

    // Exibir o resultado
    resultadoElement.classList.remove("hidden");
    if (score <= 10) {
        resultadoElement.textContent = "Você gasta pouco e está bem no controle."; //textContent retorna todo o conteúdo de texto, incluindo o texto oculto pelo CSS
    } else if (score <= 20) {
        resultadoElement.textContent = "Você gasta moderadamente e pode melhorar sua gestão.";
    } else {
        resultadoElement.textContent = "Você gasta bastante e precisa considerar mudanças.";
    }
}


function nextQuestion() {
    currentQuestion++;// Incrementa o índice da pergunta
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

showQuestion();
