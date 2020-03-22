import React from "react";
import "./ProgramInfoPage.css";

import strangerThingsInfo from "../../assets/images/stranger-things-info.png";

const ProgramInfoPage = (props) => {
  return (
    <div className="program-info-page">
      <img alt="listing" src={strangerThingsInfo}></img>
      <div className="program-summary-container">
        <p>
          When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural
          forces in order to get him back.
        </p>
      </div>
      <div className="watch-now">Watch Now</div>

      <div className="go-back" onClick={() => props.transition()}>
        &#x2B05;
      </div>
    </div>
  );
};

export default ProgramInfoPage;
