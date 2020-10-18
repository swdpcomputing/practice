import React from "react";

const LikeHeart = ({liked, onClick}) => {//Destructuring props from the props argument of the function
  let heartState = "fa fa-heart";
  if (!liked) heartState += "-o";
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={heartState}
    ></i>
  );
};

export default LikeHeart;
