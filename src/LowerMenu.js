import React from "react";
import Emotes from "./Emotes.js";
import Result from "./Result";
import ResetButtom from "./ResetButtom";

export default function LowerMenu({
  numberAnswer,
  numberQuestions,
  arrayEmotes,
  resetQuestionsPage,
  minPoints,
}) {
  // const [isEnd, setIsEnd] = React.useState(false);
  let isEnd = false;
  let isCorrect = true;

  if (numberAnswer === numberQuestions) {
    isEnd = true;
    if (numberQuestions >= minPoints) {
      if (
        arrayEmotes.filter((x) => x === "images/cross.png").length >
        numberQuestions - minPoints
      ) {
        isCorrect = false;
      }
    } else if (arrayEmotes.includes("images/cross.png")) {
      isCorrect = false;
    }
  }
  return (
    <div className="lowerMenu">
      <Result isEnd={isEnd} isCorrect={isCorrect} minPoints={minPoints} />
      {numberAnswer}/{numberQuestions} CONCLUÍDOS
      <Emotes arrayEmotes={arrayEmotes} />
      <ResetButtom isEnd={isEnd} resetQuestionsPage={resetQuestionsPage} />
    </div>
  );
}
