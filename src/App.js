import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
  <footer>
    This project was created by Nataliia Rubtsova and is {" "}
    <a rel="noreferrer" href="https://github.com/Yami-tasha/cool-react-app" target="_blank">open-sourced on GitHab</a>
  </footer>
    </div>
    </div>
  );
}

