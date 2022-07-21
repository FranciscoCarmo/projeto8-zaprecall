import React from "react";
import Emotes from "./Emotes.js";
import Result from "./Result";
import ResetButtom from "./ResetButtom";

export default function LowerMenu({
  numberAnswer,
  numberQuestions,
  arrayEmotes,
  resetQuestionsPage,
}) {
  // const [isEnd, setIsEnd] = React.useState(false);
  let isEnd = false;
  let isCorrect = true;

  if (numberAnswer === numberQuestions) {
    isEnd = true;
    if (arrayEmotes.includes("images/cross.png")) {
      isCorrect = false;
    }
  }
  return (
    <div className="lowerMenu">
      <Result isEnd={isEnd} isCorrect={isCorrect} />
      {numberAnswer}/{numberQuestions} CONCLUÍDOS
      <Emotes arrayEmotes={arrayEmotes} />
      <ResetButtom isEnd={isEnd} resetQuestionsPage={resetQuestionsPage} />
    </div>
  );
}
