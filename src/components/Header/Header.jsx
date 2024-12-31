import react from "react";
import "./Header.css";

export const Header = (props) => {
  return (
    <div className="header">
      <img src="" alt="" />
      <p>{props.text}</p>
    </div>
  );
};
