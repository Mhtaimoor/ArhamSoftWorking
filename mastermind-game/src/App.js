import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";
import { Rules } from "./components/rule";
import { Game } from "./components/game";

function App() {
  return(
  <Container>
    <div>
      <h1 className="title">MasterMind React Game</h1>
      <Rules />
      <Game />
    </div>
  </Container>
  );
}

export default App;
