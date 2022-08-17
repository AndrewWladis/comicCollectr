import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import AndysPicks from './sections/andyPick';
import Cap4 from './sections/cap4.js';
import Aquaman2 from './sections/aquaman2.js';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <h2 class="title">Andy's Picks:</h2>
    <AndysPicks />
    <h2 class="title">Captain America: New World Order:</h2>
    <Cap4 />
    <h2 class="title">Aquaman 2:</h2>
    <Aquaman2 />
  </React.StrictMode>,
  document.getElementById('root')
);