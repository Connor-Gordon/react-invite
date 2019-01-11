import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import Contacts from './Contacts'
import Going from './Going'
import { getNotGoing } from '../actions/notgoing'

class Home extends Component {
  
  render() {
    return (
        <div className="mainContainer">
            <Contacts />
            <Going />
            <Notgoing />
    </div>
    )
  }
}


export default Home;