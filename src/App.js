import React from "react";
import Start from "./Start";
import QuestionsPage from "./QuestionsPage";

export default function App() {
  const [startRecall, setStartRecall] = React.useState(false);

  if (startRecall) {
    return <QuestionsPage />;
  } else {
    return <Start setStartRecall={setStartRecall} />;
  }
}
