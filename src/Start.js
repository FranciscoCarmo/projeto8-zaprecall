export default function Start({ setStartRecall }) {
  return (
    <div className="firstPage">
      <div className="logo">
        <img src="images/logo.png"></img>
      </div>
      <h1 className="title">ZapRecall</h1>
      <div className="startButton" onClick={() => setStartRecall(true)}>
        Iniciar Recall!
      </div>
    </div>
  );
}
