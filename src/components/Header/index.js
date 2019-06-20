import React from "react";
import "./styles.scss";

const Header = props => (
  <div className="header">
    <h1 className="title">{props.titleApp}</h1>
  </div>
);

Header.defaultProps = {
  titleApp: "Desafio 01"
};

export default Header;
