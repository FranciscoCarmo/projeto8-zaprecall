export default function Result({ isEnd, isCorrect, minPoints }) {
  if (isEnd === true) {
    if (isCorrect) {
      return (
        <div className="resultado">
          <div className="parabens">
            <img src="images/party.png"></img>
            <p>Parabéns!</p>
          </div>
          <p>Você bateu sua meta de flashcards!!</p>
        </div>
      );
    }
    if (!isCorrect) {
      return (
        <div className="resultado">
          <div className="parabens">
            <img src="images/sad.png"></img>
            <p>Putz...</p>
          </div>
          <p>Ainda faltam alguns... Mas não desanime!</p>
        </div>
      );
    }
  }

  return null;
}
