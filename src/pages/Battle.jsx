import React, { useState, useContext } from "react";
import BattleContext from '../context/BattleContext.js';
import Header from "../components/Header";

const Battle = () => {
  const [togglePlayer, setTogglePlayer] = useState(true);


  return (
    <>
      <Header />
      <main>
        <h2> Turno Personagem { togglePlayer ? '1' : '2' }</h2>
        <div>
          <h2>Card 1</h2>
          <p>vs</p>
          <h2>Card 2</h2>
        </div>
      </main>
    </>

  );
};

export default Battle;
