export default function Header({ resetQuestionsPage }) {
  return (
    <div className="header" onClick={() => resetQuestionsPage()}>
      <img src="images/logo-pequeno.png" />
      <h1 className="title">ZapRecall</h1>
    </div>
  );
}
