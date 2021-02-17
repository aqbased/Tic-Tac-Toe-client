'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gamesEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // AUTH
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // GAMES
  $('#newGame').on('click', gamesEvents.onNewGame)
  $('#newGame').on('click', gamesEvents.onPlayAgain)
  $('.container').hide()
  $('.box').on('click', gamesEvents.boxClick)
})
