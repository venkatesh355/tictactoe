import React from "react";
import Board from "./components/Board";
import "./styles/root.scss";

const App = () => {
  return (
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <p>Hard to get more minimal than this React app.</p>
    <Board />
  </div>
  );
 } 
 
 export default App;

