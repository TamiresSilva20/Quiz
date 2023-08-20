const perguntas = [
  {
  pergunta: "Quanto você gasta em média por semana?", respostas: ["Muito", "Moderadamente", "Pouco"], pontos: [1, 2, 3],
  },
  {
  pergunta: "Você costuma fazer compras impulsivas?", respostas: ["Sempre", "Às vezes", "Raramente"], pontos: [1, 2, 3],
  },
  {
  pergunta: "Você segue um orçamento mensal?", respostas: ["Nunca", "Às vezes", "Sempre"], pontos: [1, 2, 3],
  },
  {
  pergunta: "Qual é o nome da capital do Brasil?", respostas: ["Brasília", "Rio de Janeiro", "São Paulo"], pontos: [1, 2, 3],
  },
  {
  pergunta: "Qual é o nome da capital da Itália?", respostas: ["Roma", "Milão", "Turim"], pontos: [1, 2, 3],
  },
  ];
  
  const perguntaElement = document.getElementById('pergunta');
  const botoes = [
  document.getElementById('btn-1'),
  document.getElementById('btn-2'),
  document.getElementById('btn-3')
  ];
  const resultadoElement = document.getElementById('resultado');
  
  let currentPerguntaIndex = 0;
  let respostas = [];
  
  function showPergunta() {
  const currentPergunta = perguntas[currentPerguntaIndex];
  perguntaElement.textContent = currentPergunta.pergunta;
  
  for (let i = 0; i < botoes.length; i++) {
  botoes[i].textContent = currentPergunta.options[i];
  botoes[i].addEventListener('click', () => selectAnswer(i));
  }
  }
  
  function selectAnswer(selectedIndex) {
  respostas.push(selectedIndex);
  currentPerguntaIndex++;
  
  if (currentPerguntaIndex < perguntas.length) {
  showPergunta();
  } else {
  showResultado();
  }
  }
  
  function showResultado() {
  perguntaElement.style.display = 'none';
  for (let button of botoes) {
  button.style.display = 'none';
  }
  
  let pontuacao = 0; for (let i = 0; i < perguntas.length; i++) {
  let resposta = prompt(perguntas[i].pergunta);
  for (let j = 0; j < perguntas[i].respostas.length; j++) {
  if (resposta === perguntas[i].respostas[j]) { pontuacao += perguntas[i].pontos[j]; }
  }
  }
  if (pontuacao < 10) {
  resultadoText += "Você gasta pouco e está bem no controle.";
  } else if (pontuacao < 20) {
  resultadoText += "Você gasta moderadamente e pode melhorar sua gestão.";
  } else {  resultadoText += "Você gasta bastante e precisa considerar mudanças."; }
  
  resultadoElement.textContent = resultadoText;
  resultadoElement.classList.remove('hidden');
  }
  
  showPergunta();
  

  