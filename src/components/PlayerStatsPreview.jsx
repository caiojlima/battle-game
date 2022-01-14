import React from "react";
import PropTypes from 'prop-types';

const PlayerStatsPreview = ({ number, atk, def, hp }) => (
  <div>
    <h3>Personagem {number}:</h3>
    <p>Ataque: { atk }</p>
    <p>Defesa: { def }</p>
    <p>HP: { hp }</p>
  </div>
 );


PlayerStatsPreview.propTypes = {
  number: PropTypes.number.isRequired,
  atk: PropTypes.string.isRequired,
  def: PropTypes.string.isRequired,
  hp: PropTypes.string.isRequired,
};

export default PlayerStatsPreview;
