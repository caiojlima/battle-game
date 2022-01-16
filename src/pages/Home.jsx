import React, { useState, useEffect, useContext } from "react";
import BattleContext from "../context/BattleContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PlayerForm from "../components/PlayerForm";
import PlayerCard from "../components/PlayerCard";
import Instructions from "../components/Instructions";
import '../styles/Home.css';

const Home = () => {
  const [state, setState] = useState({ toggleStart: false, preventLoop: true, showStatsError: false });
  const { setProviderState } = useContext(BattleContext);
  const navigate = useNavigate();

  const handleSubmit = (formState) => {
    setState({ ...state, ...formState });
  };  
  
  useEffect(() => {
    const toggle = state.atk1 && state.atk2 && state.preventLoop
    if(toggle) {
      setState({ ...state, toggleStart: true, preventLoop: false });
    };
  }, [state]);
  
  const statsValidation = () => {
    const conditionPlayerOne = state.atk1 + state.def1 + state.hp1 > 50;
    const conditionPlayerTwo = state.atk2 + state.def2 + state.hp2 > 50;
    

    if ( conditionPlayerOne || conditionPlayerTwo ) {
      setState({ ...state, showStatsError: true });
    } else {
      setProviderState({ ...state });
      navigate('/battle');
    }
  }

  return (
    <>
    <Header />
    <Instructions />
    <PlayerForm player={ 1 } handleSubmit={ handleSubmit } />
    <PlayerForm player={ 2 } handleSubmit={ handleSubmit } />
    <div className="preview-container">
      { (state.atk1) && <PlayerCard number={ 1 } atk={ state.atk1 } def={ state.def1 } hp={ state.hp1 } /> }
      { (state.atk2) && <PlayerCard number={ 2 } atk={ state.atk2 } def={ state.def2 } hp={ state.hp2 } /> }
    </div>
    { state.toggleStart && (
      <div className="start-btn-container">
        <button type="button" onClick={ statsValidation }>Iniciar batalha!</button>
        { state.showStatsError && <p>Atributos com valores inválidos!</p> }
      </div>
    ) }
  </>
  );
};

export default Home;
