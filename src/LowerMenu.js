import Emotes from "./Emotes.js";

export default function LowerMenu({
  numberAnswer,
  numberQuestions,
  arrayEmotes,
}) {
  return (
    <div className="lowerMenu">
      {numberAnswer}/{numberQuestions} CONCLUÍDO
      <Emotes arrayEmotes={arrayEmotes} />
    </div>
  );
}
