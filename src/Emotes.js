export default function Emotes({ arrayEmotes }) {
  if (arrayEmotes.length > 0) {
    return (
      <div className="emotes">
        {arrayEmotes.map((image) => {
          return <img src={image}></img>;
        })}
      </div>
    );
  }
  return null;
}
