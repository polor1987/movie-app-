import React from "react";
import { Rate } from "antd";

const Card = ({name,img,rate }) => {
  return (
    <div className="card">
      <img className="image" src={img} />
      <div className="info">
        <div className="name">{name}</div>
        <Rate className="rate" disabled={true} value={rate}/>
      </div>
    </div>
  );
};

export default Card;
