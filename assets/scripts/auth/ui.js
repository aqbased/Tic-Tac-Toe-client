const store = require('./../store')

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  // $('#sign-up').trigger('reset')
  $('#error-message').html('Thank you for signing up!')
  // Clear the message after 5 seconds
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signUpFailure = function (response) {
  $('form').trigger('reset')
  $('#error-message').html('Sorry that didn\'t work, please try again.')
  // Clear the message after 5 seconds
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signInSuccess = function (response) {
  store.user = response.user
  $('form').trigger('reset')
  $('#error-message').text('Thank you for signing in!')
  $('#index-games').show()
  $('#newGame').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#error-message').text('Sorry that didn\'t work, please try again.')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('.container').hide()
  $('#error-message').text('Thank you for visiting.')
  store.over = true
  $('#index-games').hide()
  $('#newGame').hide()
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signOutFailure = function (response) {
  $('form').trigger('reset')
  $('#error-message').text('You are stuck forever, enjoy your stay.  Please try again.')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const changePasswordFailure = function (response) {
  $('form').trigger('reset')
  $('#error-message').text('Password change attempt failed, please try again.')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#error-message').text('You have changed your password.')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordFailure,
  changePasswordSuccess
}
