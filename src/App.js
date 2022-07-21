import React from "react";
import Start from "./Start";
import QuestionsPage from "./QuestionsPage";

export default function App() {
  const questionListReact = [
    {
      Q: "O que é JSX?",
      R: "Uma extensão de linguagem do JavaScript",
    },
    {
      Q: "O React é __ ",
      R: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      Q: "Componentes devem iniciar com __ ",
      R: "letra maiúscula",
    },
    {
      Q: "Podemos colocar __ dentro do JSX ",
      R: "expressões",
    },
    {
      Q: "O ReactDOM nos ajuda __",
      R: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      Q: "Usamos o npm para __ ",
      R: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      Q: "Usamos props para __ ",
      R: "passar diferentes informações para componentes ",
    },
    {
      Q: "Usamos estado (state) para __",
      R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const questionListAnimais = [
    {
      Q: "Qual o maior felino do mundo, em dimensões?",
      R: "Tigre",
    },
    {
      Q: "Qual o maior réptil do mundo?",
      R: "Cobra",
    },
    {
      Q: "Qual a maior ave do mundo?",
      R: "Avestruz",
    },
    {
      Q: "Qual o maior animal vivo no planeta? ",
      R: "Baleia Azul",
    },
    {
      Q: "Quе аnіmаl é еѕѕе? О tаmаnhо vаrіа еntrе 3 mm а 10 сm dе соmрrіmеntо dереndеndо dа еѕрéсіе. Теm аntеnаѕ lоngаѕ, trêѕ раrеѕ dе реrnаѕ, dоіѕ раrеѕ dе аѕаѕ.",
      R: "Barata",
    },
    {
      Q: "Qual a maior cobra do mundo?",
      R: "Píton",
    },
    {
      Q: "Como se chamam as espécies que podem viver tanto em terra quanto na água?",
      R: "Anfíbios ",
    },
    {
      Q: "Qual o animal mais venenoso do mundo?",
      R: "Aranha",
    },
  ];

  const questionListEsportes = [
    {
      Q: "Quanto tempo dura uma partida de futebol?",
      R: "90 minutos, divididos em duas partes de 45 minutos cada.      ",
    },
    {
      Q: "Quando foi realizada a primeira Copa do Mundo de futebol?",
      R: "Em 13 de julho de 1930, no Uruguai. ",
    },
    {
      Q: "Qual time de futebol ganhou mais Copas do Mundo?",
      R: "Brasil (5).",
    },
    {
      Q: "Qual é o apelido de Leicester City? ",
      R: "The Foxes",
    },
    {
      Q: "Quantos jogadores um time de futebol tem em jogo? ",
      R: " 11",
    },
    {
      Q: "Quem ganhou a Copa do Mundo de 2010?",
      R: "A seleção da Espanha.",
    },
    {
      Q: "Quem é o artilheiro do FC Barcelona? ",
      R: "Atualmente, Lionel Messi.",
    },
    {
      Q: "Em que time italiano jogou Diego Maradona? ",
      R: "No Napoli.",
    },
  ];

  const arrayDecks = [
    {
      value: questionListReact,
      label: "React",
    },

    {
      value: questionListAnimais,
      label: "Animais",
    },

    {
      value: questionListEsportes,
      label: "Esportes",
    },
  ];

  const [startRecall, setStartRecall] = React.useState(false);

  const [deckSelected, setdeckSelected] = React.useState(questionListReact);
  const [minPoints, setMinPoints] = React.useState(0);

  function resetStartRecall() {
    setStartRecall(false);
  }

  if (startRecall) {
    return (
      <QuestionsPage
        resetStartRecall={resetStartRecall}
        deckSelected={deckSelected}
        minPoints={minPoints}
        setMinPoints={setMinPoints}
      />
    );
  } else {
    return (
      <Start
        setStartRecall={setStartRecall}
        arrayDecks={arrayDecks}
        setdeckSelected={setdeckSelected}
        minPoints={minPoints}
        setMinPoints={setMinPoints}
      />
    );
  }
}
