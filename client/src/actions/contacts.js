import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getContacts() {
  axios.get('/contacts').then(resp => {
    store.dispatch({
      type: 'GET_CONTACTS', 
      contacts: resp.data.contacts
    })
  })
}