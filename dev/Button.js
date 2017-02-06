import React from "react";
require("../css/dc.css");

console.log('imported Button.js');

var Button = React.createClass({
  render: function () {
    return (
      <li className="li-page">{this.props.name}</li>
    );
  }
});

module.exports = Button;