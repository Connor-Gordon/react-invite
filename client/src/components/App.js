import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

import Home from './Home'
import Contacts from './Contacts'
import Going from './Going'
import Notgoing from './Notgoing'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Contacts} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
