import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const PlayerForm = ({ player, handleSubmit }) => {
  const INITIAL_STATE = { [`atk${player}`]: '0', [`def${player}`]: '0', [`hp${player}`]: '0' }
  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = ({ target: { id, value } }) => setState({ ...state, [id]: value });
  const clearInput = () => setState(INITIAL_STATE);
  const statsValidation = (event, state) => {
    event.preventDefault();
    if(Number(state[`atk${player}`]) >= 0 && Number(state[`def${player}`]) >= 0 && Number(state[`hp${player}`]) !== 0) {
      handleSubmit(state);
    };
  };

  return (
    <form onSubmit={ (event) => {statsValidation(event, state); clearInput();} }>
      <h2>Personagem{ player }:</h2>
      <h3>Pontos restantes: { 50 - Number(state[`atk${player}`]) - Number(state[`def${player}`]) - Number(state[`hp${player}`]) } </h3>
      <label htmlFor="atk">
        Atk do Personagem{ player }
        <input onChange={ handleChange } id={`atk${player}`} type="number" min={ 0 } value={ state[`atk${player}`] } />
      </label>
      <label htmlFor="def">
        Def do Personagem{ player }
        <input onChange={ handleChange } id={`def${player}`} type="number" min={ 0 } value={ state[`def${player}`] } />
      </label>
      <label htmlFor="hp">
        Hp do Personagem{ player }
        <input onChange={ handleChange } id={`hp${player}`} type="number" min={ 0 } value={ state[`hp${player}`] } />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

PlayerForm.propTypes = {
  player: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PlayerForm;
