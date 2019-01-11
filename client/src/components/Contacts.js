import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContacts } from '../actions/contacts'

class Contacts extends Component {
  componentDidMount() {
    getContacts()
  }
  
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <p>{this.props.contacts}</p>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    contacts: appState.contactsReducer.contacts
  }
}

export default connect(mapStateToProps)(Contacts)