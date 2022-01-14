import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PlayerForm from "../components/PlayerForm";
import PlayerStatsPreview from "../components/PlayerStatsPreview";
const Home = () => {
  const [state, setState] = useState({ toggleStart: false, preventLoop: true });

  const handleSubmit = (event, formState) => {
    event.preventDefault();
    setState({ ...state, ...formState });
  };

  useEffect(() => {
    const toggle = state.atk1 && state.atk2 && state.preventLoop
    if(toggle) {
      setState({ ...state, toggleStart: true, preventLoop: false });
    };
  }, [state]);

  return (
    <>
    <Header />
    <PlayerForm player={ 1 } handleSubmit={ handleSubmit } />
    <PlayerForm player={ 2 } handleSubmit={ handleSubmit } />
    { (state.atk1) && <PlayerStatsPreview number={ 1 } atk={ state.atk1 } def={ state.def1 } hp={ state.hp1 } /> }
    { (state.atk2) && <PlayerStatsPreview number={ 2 } atk={ state.atk2 } def={ state.def2 } hp={ state.hp2 } /> }
    { state.toggleStart && <Link to="/battle"><button type="button">COMEÇAR!</button></Link> }
  </>
  );
};

export default Home;
