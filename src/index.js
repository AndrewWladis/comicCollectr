import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import AndysPicks from './sections/andyPick';
import Thor from './sections/thor';
import Morb from './sections/morb.js';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <h2 class="title">Andy's Picks:</h2>
    <AndysPicks />
    <h2 class="title">Morbius</h2>
    <Morb />
    <h2 class="title">Thor: Love and Thunder:</h2>
    <Thor />
  </React.StrictMode>,
  document.getElementById('root')
);