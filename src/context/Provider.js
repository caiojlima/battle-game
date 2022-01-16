import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BattleContext from './BattleContext';

function Provider({ children }) {
  const [providerState, setProviderState] = useState();
  const contextValue = {
    providerState,
    setProviderState,
  };

  return (
    <BattleContext.Provider value={ contextValue }>
      { children }
    </BattleContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider

