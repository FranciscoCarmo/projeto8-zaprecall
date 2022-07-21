export default function ResetButtom({ isEnd, resetQuestionsPage }) {
  if (isEnd) {
    return (
      <div
        className="resetButton"
        onClick={() => {
          resetQuestionsPage();
        }}
      >
        REINICIAR RECALL
      </div>
    );
  }

  return null;
}
