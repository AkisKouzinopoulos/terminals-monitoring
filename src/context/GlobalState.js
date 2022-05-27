import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
//Initial State
const initialState = {
  terminals: []
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function actionTerminal(scanedTerminalsObj) {
    dispatch({
      type: 'ACTION_TERMINAL',
      payload: scanedTerminalsObj
    });
  }

  return (<GlobalContext.Provider value={{
    terminals: state.terminals,
    actionTerminal,
  }}>
    {children}
  </GlobalContext.Provider>)
}
