import React, { useState, useContext } from "react";
import BattleContext from '../context/BattleContext.js';
import PlayerCard from '../components/PlayerCard';
import Header from "../components/Header";
import '../styles/Battle.css';

const Battle = () => {
  const [togglePlayer, setTogglePlayer] = useState(true);
  const [dice, setDice] = useState(0);
  const { providerState, setProviderState } = useContext(BattleContext);

  const attackingPlayer = () => {
    if(togglePlayer) {
      const remainingHp = dice + (providerState.atk1 * 0.7) - providerState.def2;
      setProviderState({ ...providerState, hp2: remainingHp });
    } else {
      const remainingHp = dice + (providerState.atk2 * 0.7) - providerState.def1;
      setProviderState({ ...providerState, hp1: remainingHp });
    }
  };

  const diceRoll = () => {
    const diceResult = Math.round((Math.random() * 20) + 1);
    setDice(diceResult);
    attackingPlayer();
    setTogglePlayer(!togglePlayer);
  };

  return (
    <>
      <Header />
      <main>
        <h2> Turno Personagem { togglePlayer ? '1' : '2' }</h2>
        <div className="battle-container">
          <PlayerCard number={ 1 } atk={ providerState.atk1 } def={ providerState.def1 } hp={ providerState.hp1 } />
          <span>vs</span>
          <PlayerCard number={ 2 } atk={ providerState.atk2 } def={ providerState.def2 } hp={ providerState.hp2 } />
        </div>
      </main>
      <div className="dice-container">
        { <h3>{ dice }</h3> }
        <button type="button" onClick={ diceRoll }>Jogue o Dado!</button>
      </div>
    </>

  );
};

export default Battle;
