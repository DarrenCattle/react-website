import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

console.log('init');

var initial = (
  <div>
    <Header/>
  </div>
); 

ReactDOM.render(
  initial,
  document.querySelector("#app")
);