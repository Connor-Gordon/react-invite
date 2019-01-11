const initialState = {
  notgoing: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'GET_NOTGOING':
      return {...state, notgoing: action.notgoing}
    default:
      return state
  }
}