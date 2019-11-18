import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
      <div>
        <nav className="navbar navbar-light bg-light" data-spy="affix">
          <span className="navbar-brand mb-0 h1 font-weight-bolder">
            Leauge of Clicky
          </span>

          <span className="navbar-brand mb-0 h1 font-weight-bolder">
            {props.message}
          </span>

          <span className="navbar-brand mb-0 h1 font-weight-bolder">
            Gold Collected : {props.score}
          </span>

          <span className="navbar-brand mb-0 h1 font-weight-bolder">
            Highest Gold Collected : {props.maxScore}
          </span>
        </nav>
      </div>
  );
}

export default Navbar;
