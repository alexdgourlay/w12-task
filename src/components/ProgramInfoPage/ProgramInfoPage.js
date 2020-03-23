import React from "react";
import "./ProgramInfoPage.css";

import Protection from "../Protection";
import strangerThingsInfo from "../../assets/images/stranger-things-info.png";

const ProgramInfoPage = (props) => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <div className={loading ? "loading" : "program-info-page"}>
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

      <Protection clearPercent={70} zIndex={0}></Protection>
      <Protection deg={90} clearPercent={30} zIndex={0}></Protection>

      <img alt="listing" src={strangerThingsInfo}></img>
    </div>
  );
};

export default ProgramInfoPage;
