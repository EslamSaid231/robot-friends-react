import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ id, titleName, username, email }) => {
  return (
    <div
      className="fl tc bg-light-green dib br3 pa3 ma2 grow ma4 bw2 shadow-5 pl2  "
      style={{ width: "280px", height: "450px" }}
    >
      <div>
        <img alt="Robots" src={`https://robohash.org/${id}?200x200`} />
      </div>
      <div>
        <h2>{titleName}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
