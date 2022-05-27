import { createContext, useReducer } from 'react'
import terminalsReducer from './TerminalsReducer';

const TerminalsContext = createContext();

export const TerminalsProvider = ({ children }) => {
  const initialState = {
    selectedTerminals: [],
    scanedTerminals: [],
    terminatedTerminals: [],
  };

  const [state, dispatch] = useReducer(terminalsReducer, initialState);

  return (
    <TerminalsContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </TerminalsContext.Provider>
  )
}

export default TerminalsContext;
