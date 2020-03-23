import React from "react";

const Protection = ({ deg, startOpacity, clearPercent, transitionTime, zIndex }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundImage: `linear-gradient(${deg | 0}deg, rgba(0, 0, 0,  ${startOpacity | 1}),
         rgba(255, 255, 255, 0) ${clearPercent | 20}%, rgba(255, 255, 255, 0) 100%)`,
        zIndex: zIndex | 0,
        transition: "background-image 2s"
      }}
    ></div>
  );
};

export default Protection;
