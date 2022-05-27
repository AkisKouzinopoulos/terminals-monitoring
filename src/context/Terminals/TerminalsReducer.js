const githubReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_TERMINAL':
      return {
        ...state,
        selectedTerminals: [action.payload, ...state.selectedTerminals],
        // isLoading: false,
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
        // isLoading: false,
      }
    default:
      return state
  }
}

export default githubReducer;
