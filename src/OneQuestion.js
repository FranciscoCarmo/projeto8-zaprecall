import { CaretForwardOutline } from "react-ionicons";

export default function OneQuestion() {
  return (
    <>
      {/* Passar essas seções para commponente */}
      <div className="question closed ">
        <p>Pergunta 1</p>
        <CaretForwardOutline color={"#00000"} height="30px" width="30px" />{" "}
      </div>

      <div className="question front hidden">
        <p>O que é JSX?</p>
        <img src="images/setinha.png"></img>
      </div>

      <div className="question back hidden">
        <p>É um trem de programação difícil demaisss</p>
        <div className="buttonSection">
          <div className="answerButton red">Não lembrei</div>
          <div className="answerButton yellow">Quase não lembrei </div>
          <div className="answerButton green">Zap!</div>
        </div>
      </div>
    </>
  );
}
