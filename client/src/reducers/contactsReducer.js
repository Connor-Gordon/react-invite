const initialState = {
    contacts: ''
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      // add actions here
      case 'GET_CONTACTS':
        return {...state, contacts: action.contacts}
      default:
        return state
    }
  }