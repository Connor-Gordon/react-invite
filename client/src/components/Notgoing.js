import React, { Component } from 'react'
import { connect } from 'react-redux'
import { notgoing } from '../actions/notgoing'
import store from '../store'

import { getNotGoing } from '../actions/notgoing'

class Notgoing extends Component {
  componentDidMount() {
    getNotGoing()
  }
  
  render() {
    return (
      <div>
        <h1>Not Going</h1>
        <p>{this.props.notgoing}</p>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    example: appState.notgoingReducer.notgoing
  }
}

export default connect(mapStateToProps)(Notgoing)