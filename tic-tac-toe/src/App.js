import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import socketIoClient from 'socket.io-client';

import Board from './Board/Board';

function App() {
  // const socket = socketIoClient('http://127.0.0.1:3000/game/:PI');
  // socket.emit('move', ['aje', 'taye']);
  // socket.on('FromAPI', (message) => {
  //   console.log('Message recieved to frontend');
  //   console.log(message);
  // });
  return (
    <div className="App">
      <Board />

      {/* <svg width="100vw" height="100vh" style={style}>

        <g stroke="#5555CC" strokeWidth="2" opacity="0.5">
          <path d="m 0 550 l 1000 0" />
          <path d="m 0 500 l 1000 0" />
          <path d="m 0 450 l 1000 0" />
          <path d="m 0 400 l 1000 0" />
          <path d="m 0 350 l 1000 0" />
          <path d="m 0 300 l 1000 0" />
          <path d="m 0 250 l 1000 0" />
          <path d="m 0 200 l 1000 0" />
          <path d="m 0 150 l 1000 0" />
          <path d="m 0 100 l 1000 0" />
        </g> */}

      {/* First Dataset */}
      {/* First */}
      {/* <path d="m 150 540 l 30 0 l 0 -400 l -30 0" fill="#5CDB95" />
        <path d="m 165 540 l 15 0 l 0 -400 l -15 0" fill="#5CAA95" />

        <path d="m 190 540 l 30 0 l 0 -300 l -30 0" fill="#F64C72" />
        <path d="m 205 540 l 15 0 l 0 -300 l -15 0" fill="#F62233" />

        <path d="m 230 540 l 30 0 l 0 -280 l -30 0" fill="#FFAAFF" />
        <path d="m 245 540 l 15 0 l 0 -280 l -15 0" fill="#FFAA77" />

        {/* Second */}
      {/* <path d="m 310 540 l 30 0 l 0 -280 l -30 0" fill="#5CDB95" />
        <path d="m 325 540 l 15 0 l 0 -280 l -15 0" fill="#5CAA95" />

        <path d="m 350 540 l 30 0 l 0 -300 l -30 0" fill="#F64C72" />
        <path d="m 365 540 l 15 0 l 0 -300 l -15 0" fill="#F62233" />

        <path d="m 390 540 l 30 0 l 0 -200 l -30 0" fill="#FFAAFF" />
        <path d="m 405 540 l 15 0 l 0 -200 l -15 0" fill="#FFAA77" /> */}

      {/* Third */}
      {/* <path d="m 470 540 l 30 0 l 0 -200 l -30 0" fill="#5CDB95" />
        <path d="m 485 540 l 15 0 l 0 -200 l -15 0" fill="#5CAA95" />

        <path d="m 510 540 l 30 0 l 0 -300 l -30 0" fill="#F64C72" />
        <path d="m 525 540 l 15 0 l 0 -300 l -15 0" fill="#F62233" />

        <path d="m 550 540 l 30 0 l 0 -250 l -30 0" fill="#FFAAFF" />
        <path d="m 565 540 l 15 0 l 0 -250 l -15 0" fill="#FFAA77" /> */}

      {/* Fourth */}
      {/* <path d="m 630 540 l 30 0 l 0 -400 l -30 0" fill="#5CDB95" />
        <path d="m 645 540 l 15 0 l 0 -400 l -15 0" fill="#5CAA95" />

        <path d="m 670 540 l 30 0 l 0 -300 l -30 0" fill="#F64C72" />
        <path d="m 685 540 l 15 0 l 0 -300 l -15 0" fill="#F62233" />

        <path d="m 710 540 l 30 0 l 0 -380 l -30 0" fill="#FFAAFF" />
        <path d="m 725 540 l 15 0 l 0 -380 l -15 0" fill="#FFAA77" />

      </svg>
      <h1>Bar Chart using raw SVG codes</h1>
      <p>#CodingSVG</p> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
