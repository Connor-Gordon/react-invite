import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getGoing() {
  axios.get('/going').then(resp => {
    store.dispatch({
      type: 'GET_GOING', 
      going: resp.data.going
    })
  })
}