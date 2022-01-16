import React, { useState, useContext } from "react";
import BattleContext from '../context/BattleContext.js';
import PlayerCard from '../components/PlayerCard';
import Header from "../components/Header";
import '../styles/Battle.css';

const Battle = () => {
  const [togglePlayer, setTogglePlayer] = useState(true);
  const [dice, setDice] = useState(0);
  const { providerState: { atk1, atk2, def1, def2, hp1, hp2 } } = useContext(BattleContext);

  const diceRoll = () => {
    const diceResult = Math.round((Math.random() * 20) + 1);
    setDice(diceResult);
    setTogglePlayer(!togglePlayer);
  };

  return (
    <>
      <Header />
      <main>
        <h2> Turno Personagem { togglePlayer ? '1' : '2' }</h2>
        <div className="battle-container">
          <PlayerCard number={ 1 } atk={ atk1 } def={ def1 } hp={ hp1 } />
          <span>vs</span>
          <PlayerCard number={ 2 } atk={ atk2 } def={ def2 } hp={ hp2 } />
        </div>
      </main>
      <div className="dice-container">
        { dice && <h3>{ dice }</h3> }
        <button type="button" onClick={ diceRoll }>Jogue o Dado!</button>
      </div>
    </>

  );
};

export default Battle;
