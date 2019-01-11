import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoing } from '../actions/going'

class Going extends Component {
  componentDidMount() {
    getGoing()
  }
  
  render() {
    return (
      <div>
        <h1>going</h1>
        <p>{this.props.going}</p>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    going: appState.goingReducer.going
  }
}

export default connect(mapStateToProps)(Going)