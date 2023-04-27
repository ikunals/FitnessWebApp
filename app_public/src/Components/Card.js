import React from "react";
import "../css/Card.css";

const Card = ({ title, img, url }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center" id="card">
        <img src={img} alt="" />

        <p className="font-semibold text-[18px] text-[#005599]">
          {" "}
          <a href={url} target="_blank">
            {" "}
            {title}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
