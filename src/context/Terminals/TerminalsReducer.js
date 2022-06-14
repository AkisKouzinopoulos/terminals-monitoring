const terminalsReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_TERMINAL':
      return {
        ...state,
        selectedTerminals: [action.payload, ...state.selectedTerminals],
      };
    case 'DESELECT_TERMINAL':
      return {
        ...state,
        selectedTerminals: [
          ...state.selectedTerminals.filter(item => item.id !== action.payload.id),
        ],
      };
    case 'SCAN_TERMINAL':
      return {
        ...state,
        scanedTerminals: [action.payload, ...state.scanedTerminals],
        // isLoading: false,
      };
    case 'TERMINATE_TERMINAL':
      return {
        ...state,
        terminatedTerminals: [action.payload, ...state.terminatedTerminals],
        // isLoading: false,
      };
    case 'UPDATE_LOGS':
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        // isLoading: false,
      };
    case 'CLEAR_SELECTED_TERMINALS':
      return {
        ...state,
        selectedTerminals: [],
      };
    case 'CLEAR_STATE_TERMINALS':
      return {
        ...state,
        selectedTerminals: [],
        scanedTerminals: [],
        terminatedTerminals: [],
      };
    default:
      return state;
  }
};

export default terminalsReducer;
