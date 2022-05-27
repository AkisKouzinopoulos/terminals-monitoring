export default (state, action) => {
  switch(action.type) {

    case 'ACTION_TERMINAL':

      return {
        ...state,
        terminals: [action.payload, ...state.terminals]
      }

    default:
      return state;
  }
}