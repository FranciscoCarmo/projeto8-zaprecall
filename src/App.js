import React from "react";
import Start from "./Start";
import QuestionsPage from "./QuestionsPage";

export default function App() {
  const [startRecall, setStartRecall] = React.useState(false);

  function resetStartRecall() {
    setStartRecall(false);
  }

  if (startRecall) {
    return <QuestionsPage resetStartRecall={resetStartRecall} />;
  } else {
    return <Start setStartRecall={setStartRecall} />;
  }
}
