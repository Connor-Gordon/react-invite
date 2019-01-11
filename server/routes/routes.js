const express = require('express')
const axios = require('axios')

const Router = express.Router()

const data = {
  contacts: [],
  going: [],
  notgoing: [],
}

Router.get('/contacts', (req, res, next) => {
  if (data.contacts.length === 0){
    axios.get('https://randomuser.me/api/?results100').then(resp => {
      data.contacts = resp.data.results.map(contact, i) => {
        contact.id = i + 1

        return contact
      })

      res.json(data.contacts)yar
    } else {
      res.json(data.contacts)
    }
})

Router.get('/going', (req, res, next) => {
  res.json(data.going)
})

Router.get('/notgoing', (req, res, next) => {
  res.json(data.notgoing)
})

Router.patch('/going/:id', (req, res, next) => {
  const id = req.params.id

// constants filter to check through arrays of contacts

  const contactIsGoing = data.going.filter(person => id == person.id).length !== 0
  const contactIsNotGoing = data.notgoing.filter(person => id == person.id).length !== 0
  const contactIsUndecided = data.contacts.filter(person => id == person.id).length !== 0


  if(contactIsUndecided) {
  const contact = data.contacts.find(person => id == person.id)
  data.contacts = data.contacts.filer(person =>  != person.id)
  data.going.push(contact)
  }

  if(contactIsNotGoing) {
    const contact = data.notgoing.find(person => id == person.id)
    data.contacts = data.notgoing.filer(person =>  != person.id)
    data.going.push(contact)
  }

res.json(data.going)
})

Router.patch('/notgoing/:id', (req, res, next) => {
  const id = req.params.id
  
    const contactIsGoing = data.going.filter(person => id == person.id).length !== 0
    const contactIsNotGoing = data.notgoing.filter(person => id == person.id).length !== 0
    const contactIsUndecided = data.contacts.filter(person => id == person.id).length !== 0
  
  
    if(contactIsUndecided) {
    const contact = data.contacts.find(person => id == person.id)
    data.contacts = data.contacts.filer(person =>  != person.id)
    data.notgoing.push(contact)
    }
  
    if(contactIsGoing) {
      const contact = data.going.find(person => id == person.id)
      data.going = data.going.filer(person =>  != person.id)
      data.notgoing.push(contact)
    }
  
  res.json(data.notgoing)
})

module.exports = Router