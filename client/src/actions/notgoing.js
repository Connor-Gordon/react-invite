import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getNotGoing() {
  axios.get('/notgoing').then(resp => {
    store.dispatch({
      type: 'GET_NOTGOING', 
      notgoing: resp.data.notgoing
    })
  })
}