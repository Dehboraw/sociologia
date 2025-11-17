const questions = [
    {
        question:"Qual conceito explica a convivência harmoniosa entre diferentes grupos étnicos em uma sociedade?",
        answers: [
            {id: 1, text: "a) Segregação", correct: false},
            {id: 2, text: "b) Integração racial", correct: true},
            {id: 3, text: "c) Discriminação", correct: false},
            {id: 4, text: "d) Exclusão social", correct: false}
        ]
    },

    {
        question:"A miscigenação no Brasil contribuiu para:",
        answers: [
            {id: 1, text: "a) Manutenção da segregação racial", correct: false},
            {id: 2, text: "b) Formação de uma sociedade etnicamente homogênea", correct: false},
            {id: 3, text: "c) Criação de uma identidade cultural plural", correct: true},
            {id: 4, text: "d) Aumento da discriminação", correct: false}
        ]
    },

    {
        question:"O que significa o termo racismo estrutural?",
        answers: [
            {id: 1, text: "a) Preconceito individual baseado em ignorância", correct: false},
            {id: 2, text: "b) Política explícita de segregação racial", correct: false},
            {id: 3, text: "c) Sistema de desigualdades presente nas instituições sociais", correct: true},
            {id: 4, text: "d) Ações afirmativas para minorias", correct: false}
        ]
    },

{
        question:"Qual é a principal característica do preconceito sociocultural?",
        answers: [
            {id: 1, text: "a) Basear-se em evidências científicas", correct: false},
            {id: 2, text: "b) Resultar da diversidade cultural", correct: false},
            {id: 3, text: "c) Promover a igualdade social", correct: false},
            {id: 4, text: "d) Julgar grupos sociais com base em estereótipos e generalizações", correct: true}
        ]
    },


    {
        question:"O preconceito pode ser diferenciado da discriminação porque, enquanto o preconceito é uma atitude, a discriminação é uma:",
        answers: [
            {id: 1, text: "a) Emoção", correct: false},
            {id: 2, text: "b) Ação ou prática que prejudica um grupo", correct: true},
            {id: 3, text: "c) Crença pessoal neutra", correct: false},
            {id: 4, text: "d) Ideologia dominante", correct: false}
        ]
    },

    {
        question:"Um exemplo de preconceito sociocultural é:",
        answers: [
            {id: 1, text: "a) Ação afirmativa para grupos marginalizados", correct: false},
            {id: 2, text: "b) Debate público sobre diversidade", correct: false},
            {id: 3, text: "c) Leis que protegem minorias étnicas", correct: false},
            {id: 4, text: "d) Estereótipos negativos sobre pessoas de determinada classe social", correct: true}
        ]
    },

    {
        question:"Segundo Norbert Elias, o processo civilizador envolve:",
        answers: [
            {id: 1, text: "a) O controle crescentemente rigoroso das emoções e comportamentos", correct: true},
            {id: 2, text: "b) O aumento da violência nas sociedades", correct: false},
            {id: 3, text: "c) A eliminação das normas sociais", correct: false},
            {id: 4, text: "d) O fim do Estado e das instituições", correct: false}
        ]
    },

    {
        question:"O conceito de 'habitus' em Elias refere-se a:",
        answers: [
            {id: 1, text: "a) Um processo biológico de adaptação", correct: false},
            {id: 2, text: "b) Uma maneira aprendida, interna e duradoura de sentir e agir na sociedade", correct: true},
            {id: 3, text: "c) Um sistema político", correct: false},
            {id: 4, text: "d) Um tipo de violência institucional", correct: false}
        ]
    },

{
        question:"Qual foi uma consequência do processo civilizador para a experiência social?",
        answers: [
            {id: 1, text: "a) Aumento da impulsividade e agressividade na vida cotidiana", correct: false},
            {id: 2, text: "b) Maior contenção dos impulsos e regulação social dos comportamentos", correct: true},
            {id: 3, text: "c) Desorganização do Estado", correct: false},
            {id: 4, text: "d) Eliminação das diferenças sociais", correct: false}
        ]
    },

    {
        question:"Norbert Elias relaciona o processo civilizador à formação do Estado de que forma?",
        answers: [
            {id: 1, text: "a) O Estado é uma mera força opressora sem relação com civilização", correct: false},
            {id: 2, text: "b) O Estado é irrelevante no processo civilizador", correct: false},
            {id: 3, text: "c) O Estado elimina as normas sociais", correct: false},
            {id: 4, text: "d) O Estado contribui para o monopólio do uso legítimo da força e regulação social", correct: true}
        ]
    },

    {
        question:"A Lei no 10.639/2003 no Brasil tem como objetivo:",
        answers: [
            {id: 1, text: "a) Excluir a história africana do currículo escolar", correct: false},
            {id: 2, text: "b) Tornar obrigatória a inclusão da história e cultura afro-brasileira e africana nas escolas", correct: true},
            {id: 3, text: "c) Incentivar a segregação racial", correct: false},
            {id: 4, text: "d) Proibir o ensino de temas étnicos nas escolas", correct: false}
        ]
    },

    {
        question:"O preconceito religioso é um exemplo de:",
        answers: [
            {id: 1, text: "a) Forma de tolerância cultural", correct: false},
            {id: 2, text: "b) Ritual de integração social", correct: false},
            {id: 3, text: "c) Fenômeno sociocultural que cria intolerância e exclusão", correct: true},
            {id: 4, text: "d) Igualdade social", correct: false}
        ]
    },

]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
}
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
});

}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct === true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Reiniciar Quiz";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else { 
        showScore();
    }

}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
