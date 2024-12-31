import React from "react";

export default function Emoji(props) {
  return (
    <div>
      <button onClick={() => props.onButtonClick(props)}>
        <img src="" />
      </button>
      <p>{props.value}</p>
    </div>
  );
}
