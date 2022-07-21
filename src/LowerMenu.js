import React from "react";
import Emotes from "./Emotes.js";
import Result from "./Result";

export default function LowerMenu({
  numberAnswer,
  numberQuestions,
  arrayEmotes,
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
    </div>
  );
}
