import OneQuestion from "./OneQuestion";

export default function Questions({
  questionList,
  numberAnswer,
  setNumberAnswer,
}) {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
  // Embaralha as cartas
  shuffle(questionList);

  // console.log(numberAnswers);
  // console.log(setNumberAnswers);

  return (
    <>
      {questionList.map((x, key) => {
        return (
          <OneQuestion
            Q={x.Q}
            R={x.R}
            index={key}
            numberAnswers={numberAnswer}
            setNumberAnswers={setNumberAnswer}
          />
        );
      })}
    </>
  );
}
