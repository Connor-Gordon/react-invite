const initialState = {
    going: ''
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      // add actions here
      case 'GET_GOING':
        return {...state, going: action.going}
      default:
        return state
    }
  }