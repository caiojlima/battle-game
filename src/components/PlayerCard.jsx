import React from "react";
import PropTypes from 'prop-types';

const PlayerCard = ({ number, atk, def, hp }) => (
  <div>
    <h3>Personagem { number }:</h3>
    <p>Ataque: { parseInt(atk) }</p>
    <p>Defesa: { parseInt(def) }</p>
    <p>HP: { parseInt(hp) }</p>
  </div>
 );


PlayerCard.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  atk: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  def: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  hp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default PlayerCard;
