import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="space_invader"></div>
      <div className="menu_box">
        <a href="/" className="menu_title">
          Horror playbox
        </a>

        <div className="menu_elements">
          <a href="/Shinning" className="title_btn shinning">
            Shinning
          </a>
          <a href="/Thing" className="title_btn thing">
            The Thing
          </a>
          <a href="/Ring" className="title_btn ring">
            The Ring
          </a>
          <a href="/Alien" className="title_btn alien">
            Alien
          </a>
          <a href="/Exorcist" className="title_btn exorcist">
            Exorcist
          </a>
        </div>
      </div>
    </>
  );
}
