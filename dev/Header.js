import React from "react";
import Button from "./Button";
import Content from "./Content";
require("../css/dc.css");

console.log('imported Header.js');

var Header = React.createClass({
  render: function () {
    return (
      <div className="nav">
        <div className="container-fluid">
          <li className="li-header">Darren Cattle</li>
          <ul className="sections">
            <Button name="Home"/>
            <Button name="About"/>
            <Button name="Jobs"/>
            <Button name="Soccer"/>
            <Button name="Art"/>
            <Button name="Black"/>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Header;