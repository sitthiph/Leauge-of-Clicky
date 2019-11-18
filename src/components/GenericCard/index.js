import React from "react";
import "./style.css";

function GeneralCard(props) {
  return (
    <div className="card" onClick={() => props.imageEvent(props.id)}>
      <div className="img-container">
        <a href="#">
          <img
            // alt={props.name}
            src={props.image}
          />
        </a>
      </div>
    </div>
  );
}

export default GeneralCard;
