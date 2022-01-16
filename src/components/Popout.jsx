import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Popout.css';

function Popout({ number }) {
  const navigate = useNavigate();

  return (
    <div className="popout-mask">
      <div className="popout-container">
        <h1>O Personagem {number} venceu!</h1>
        <button type="button" onClick={ () => navigate('/') }>Retornar para o início</button>
      </div>
    </div>
  );
};

Popout.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Popout

