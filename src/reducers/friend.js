export default (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_FRIEND':
      return action.payload;
    default:
      return state;
  }
}
