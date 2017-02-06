import React from "react";

console.log('imported Content.js');

var Button = React.createClass({
  render: function () {
    return (
      <li>{this.props.name}</li>
    );
  }
});

module.exports = Button;