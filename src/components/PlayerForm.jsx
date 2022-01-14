import React, { useState } from "react";
import PropTypes from 'prop-types';


const PlayerForm = ({ player, handleSubmit }) => {
  const INITIAL_STATE = { [`atk${player}`]: '0', [`def${player}`]: '0', [`hp${player}`]: '0' }
  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = ({ target: { id, value } }) => setState({ ...state, [id]: value });
  const clearInput = () => setState(INITIAL_STATE);

  return (
    <form onSubmit={ (event) => {handleSubmit(event, state); clearInput();} }>
      <label htmlFor="atk">
        Atk do Personagem{ player }
        <input onChange={ handleChange } id={`atk${player}`} type="text" value={ state[`atk${player}`] } />
      </label>
      <label htmlFor="def">
        Def do Personagem{ player }
        <input onChange={ handleChange } id={`def${player}`} type="text" value={ state[`def${player}`] } />
      </label>
      <label htmlFor="hp">
        Hp do Personagem{ player }
        <input onChange={ handleChange } id={`hp${player}`} type="text" value={ state[`hp${player}`] } />
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
