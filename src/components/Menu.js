import { Children } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Menu() {
  const path = window.location.pathname;
  return (
    <>
      <div className="space_invader"></div>
      <div className="menu_box">
        <div href="/" className="menu_title">
          Horror playbox
        </div>

        <div className="menu_elements">
          <a href="/shinning" className="title_btn shinning">
            Shinning
          </a>
          <a href="/thing" className="title_btn thing">
            The Thing
          </a>
          <a href="/ring" className="title_btn ring">
            The Ring
          </a>
          <a href="/alien" className="title_btn alien">
            Alien
          </a>
          <a href="/exorcist" className="title_btn exorcist">
            Exorcist
          </a>
        </div>
      </div>
    </>
  );
}
