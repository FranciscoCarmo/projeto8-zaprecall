export default function StartButton({ minPoints, setStartRecall }) {
  if (minPoints >= 1) {
    return (
      <div className="startButton" onClick={() => setStartRecall(true)}>
        Iniciar Recall!
      </div>
    );
  } else {
    return <div className="startButton disallowed">Iniciar Recall!</div>;
  }
}
