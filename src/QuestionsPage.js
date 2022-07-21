import React from "react";

import Header from "./Header";
import Questions from "./Questions";
import LowerMenu from "./LowerMenu";

export default function QuestionsPage({ resetStartRecall }) {
  const questionList = [
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

  const [numberAnswer, setNumberAnswer] = React.useState(0);
  const numberQuestions = questionList.length;
  const [arrayEmotes, setArrayEmotes] = React.useState([]);

  function resetQuestionsPage() {
    resetStartRecall();
    setNumberAnswer(0);
    setArrayEmotes([]);
  }
  return (
    <div className="questionsPage">
      <Header />
      <Questions
        questionList={questionList}
        numberAnswer={numberAnswer}
        setNumberAnswer={setNumberAnswer}
        arrayEmotes={arrayEmotes}
        setArrayEmotes={setArrayEmotes}
      />
      <LowerMenu
        numberAnswer={numberAnswer}
        numberQuestions={numberQuestions}
        arrayEmotes={arrayEmotes}
        resetQuestionsPage={resetQuestionsPage}
      />
    </div>
  );
}
