import React from "react";

export default function OneQuestion({
  Q,
  R,
  index,
  numberAnswers,
  setNumberAnswers,
  arrayEmotes,
  setArrayEmotes,
  isOneCardFlipped,
  setIsOneCardFlipped,
}) {
  // console.log(Q);
  // console.log(index);
  // console.log(numberAnswers);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [answer, setAnswer] = React.useState("");

  if (!isOpen) {
    if (answer === "") {
      return (
        <div className="question closed ">
          <p>Pergunta {index + 1}</p>
          <img
            src="images/seta.png"
            className="seta"
            onClick={() => {
              if (!isOneCardFlipped) {
                setIsOpen(true);
                setIsOneCardFlipped(true);
              }
            }}
          ></img>
        </div>
      );
    }
    // Se errar
    if (answer === "bad") {
      return (
        <div className="question closed answered bad">
          <p>Pergunta {index + 1}</p>
          <img src="images/cross.png"></img>
        </div>
      );
    }

    // Se dúvida
    if (answer === "neutral") {
      return (
        <div className="question closed answered neutral">
          <p>Pergunta {index + 1}</p>
          <img src="images/question.png"></img>
        </div>
      );
    }

    // Se acertar
    if (answer === "good") {
      return (
        <div className="question closed answered good">
          <p>Pergunta {index + 1}</p>
          <img src="images/correct.png"></img>
        </div>
      );
    }
  }

  if (isOpen && !isFlipped) {
    return (
      <div className="question front ">
        <p>{Q}</p>
        <img src="images/setinha.png" onClick={() => setIsFlipped(true)}></img>
      </div>
    );
  }

  if (isOpen && isFlipped) {
    return (
      <div className="question back ">
        <p>{R}</p>
        <div className="buttonSection">
          <div
            className="answerButton red"
            onClick={() => {
              setIsOpen(false);
              setIsFlipped(false);
              setAnswer("bad");
              setNumberAnswers(numberAnswers + 1);
              arrayEmotes.push("images/cross.png");
              setArrayEmotes([...arrayEmotes]);
              setIsOneCardFlipped(false);
            }}
          >
            Não lembrei
          </div>
          <div
            className="answerButton yellow"
            onClick={() => {
              setIsOpen(false);
              setIsFlipped(false);
              setAnswer("neutral");
              setNumberAnswers(numberAnswers + 1);
              arrayEmotes.push("images/question.png");
              setArrayEmotes([...arrayEmotes]);
              setIsOneCardFlipped(false);
            }}
          >
            Quase não lembrei{" "}
          </div>
          <div
            className="answerButton green"
            onClick={() => {
              setIsOpen(false);
              setIsFlipped(false);
              setAnswer("good");
              setNumberAnswers(numberAnswers + 1);
              arrayEmotes.push("images/correct.png");
              setArrayEmotes([...arrayEmotes]);
              setIsOneCardFlipped(false);
            }}
          >
            Zap!
          </div>
        </div>
      </div>
    );
  }
}
