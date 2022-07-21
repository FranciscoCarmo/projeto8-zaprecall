import Select from "react-select";
import React from "react";
import StartButton from "./StartButton";

export default function Start({
  setStartRecall,
  arrayDecks,
  setdeckSelected,
  minPoints,
  setMinPoints,
}) {
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
      <input
        className="minPoints"
        type="text"
        placeholder="Digite sua meta de zaps: (1-8)"
        onChange={(e) => {
          setMinPoints(e.target.value);
          console.log(e.target.value);
        }}
      ></input>
      <StartButton minPoints={minPoints} setStartRecall={setStartRecall} />
    </div>
  );
}
