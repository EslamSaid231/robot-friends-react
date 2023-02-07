import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const CardComponent = robots.map((username, i) => {
    return (
      <Card
        key={i}
        username={robots[i].username}
        titleName={robots[i].name}
        id={robots[i].id}
        email={robots[i].email}
      />
    );
  });
  return <div style={{ marginLeft: "60px" }}>{CardComponent}</div>;
};
export default CardList;
