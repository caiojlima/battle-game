import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import '../styles/Instructions.css';

const Instructions = () => {
  const INITIAL_STATE  = true;
  const [isCollapsed, setIsCollapsed] = useState(INITIAL_STATE);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="collapsed" onClick={ toggleCollapse }>
        <h2>Instruções</h2>
        <span className={ !!isCollapsed && 'rotate' }><AiOutlineArrowDown /></span>
      </div>
      <ul className={ isCollapsed ? 'list' : 'list hide' }>
        <li>Distribua os pontos de personagem da forma que preferir. Quantidade máxima de pontos: 50. Obs: HP não pode ser 0.</li>
        <li>Após o salvamento de um personagem, um preview com os stats definidos aparecerá.</li>
        <li>O multiplicador de ataque é 0.5 enquanto o de defesa é 1.</li>
        <li>Quando dois personagens forem criados, um botão pra iniciar a batalha aparecerá.</li>
      </ul>
    </div>
  );
};

export default Instructions;
