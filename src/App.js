import "./scss/main.scss";

function App() {
  return (
    <>
      <div className="space_invader"></div>
      <div className="menu_box">
        <h1 className="menu_title">Horror playbox</h1>
        <div className="menu_elements">
          <button className="title_btn shinning">Shinning</button>
          <button className="title_btn psycho">American Psycho</button>
          <button className="title_btn ring">The Ring</button>
          <button className="title_btn alien">Alien</button>
          <button className="title_btn exorcist">Exorcist</button>
        </div>
      </div>
    </>
  );
}

export default App;
