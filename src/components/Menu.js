import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="space_invader"></div>
      <div className="menu_box">
        <h1 className="menu_title">Horror playbox</h1>

        <div className="menu_elements">
          <button className="title_btn shinning">Shinning</button>
          <button className="title_btn thing">The Thing</button>
          <button className="title_btn ring">The Ring</button>
          <button className="title_btn alien">Alien</button>
          <button className="title_btn exorcist">Exorcist</button>
        </div>
      </div>
    </>
  );
}

export default Menu;
