import Select from "react-select";

export default function Start({ setStartRecall, arrayDecks, setdeckSelected }) {
  function handleAddrTypeChange(e) {
    setdeckSelected(e.value);
  }

  return (
    <div className="firstPage">
      <div className="logo">
        <img src="images/logo.png"></img>
      </div>
      <h1 className="title">ZapRecall</h1>
      <Select
        className="select"
        options={arrayDecks}
        onChange={(e) => handleAddrTypeChange(e)}
        placeholder="Escolha seu deck:"
      />
      <div className="startButton" onClick={() => setStartRecall(true)}>
        Iniciar Recall!
      </div>
    </div>
  );
}
