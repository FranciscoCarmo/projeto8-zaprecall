export default function Emotes({ arrayEmotes }) {
  if (arrayEmotes.length > 0) {
    return (
      <div className="emotes">
        {arrayEmotes.map((image, key) => {
          return <img src={image} key={key}></img>;
        })}
      </div>
    );
  }
  return null;
}
