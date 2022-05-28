const githubReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_TERMINAL':
      return {
        ...state,
        selectedTerminals: [action.payload, ...state.selectedTerminals],
      }
    case 'DESELECT_TERMINAL':
      return {
        ...state,
        selectedTerminals: [...state.selectedTerminals.filter(item => item.id !== action.payload.id)],
      }
    case 'SCAN_TERMINAL':
      console.log('aaa', action.payload);
      return {
        ...state,
        scanedTerminals: [action.payload, ...state.scanedTerminals],
        // isLoading: false,
      }
    case 'TERMINATE_TERMINAL':
      return {
        ...state,
        terminatedTerminals: [action.payload, ...state.terminatedTerminals],
        // isLoading: false,
      }
    case 'CLEAR_SELECTED_TERMINALS':
      return {
        ...state,
        selectedTerminals: [],
      }
    default:
      return state
  }
}

export default githubReducer;
