import React from "react";

function Hand({ imgUrl, customClassName }) {
  return (
    <div>
      <img src={imgUrl} alt="" className={`h-[200px] ${customClassName}`} />
    </div>
  );
}

export default Hand;
