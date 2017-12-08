export const changeFriend = (friend) => {
  return {
    type: 'CHANGE_FRIEND',
    payload: friend
  }
}

export const actionCreators = {
  changeFriend
}
