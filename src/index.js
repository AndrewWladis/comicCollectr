import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import AndysPicks from './andyPick';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <h2 class="title">Andy's Picks:</h2>
    <AndysPicks />
  </React.StrictMode>,
  document.getElementById('root')
);