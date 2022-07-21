import React from "react";

import Header from "./Header";
import Questions from "./Questions";
import LowerMenu from "./LowerMenu";

export default function QuestionsPage({
  resetStartRecall,
  deckSelected,
  minPoints,
}) {
  const questionList = deckSelected;

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
        minPoints={minPoints}
      />
    </div>
  );
}
