import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import AndysPicks from './sections/andyPick';
import Cap4 from './sections/cap4.js';
import Aquaman2 from './sections/aquaman2.js';
import GreenLanternCorps from './sections/greenLanternCorps';
import Mustread from './sections/mustread';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <h2 class="title">Andy's Picks:</h2>
    <AndysPicks />
    <h2 class="title">Aquaman 2:</h2>
    <Aquaman2 />
    <h2 class="title">Green Lantern Corps:</h2>
    <GreenLanternCorps />
    <h2 class="title">Captain America: New World Order:</h2>
    <Cap4 />
    <h1 class="title">Today's Must Read Recommendation:</h1>
    <Mustread />
  </React.StrictMode>,
  document.getElementById('root')
);