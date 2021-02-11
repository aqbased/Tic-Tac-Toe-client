const store = require('./../store')

const signUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  $('#error-message').html('Thank you for signing up!')
  // Clear the message after 5 seconds
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signUpFailure = function (response) {
  $('#error-message').html('Sorry that didn\'t work, please try again.')
  // Clear the message after 5 seconds
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#error-message').text('Thank you for signing in!')
  $('#sign-in').trigger('reset')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signInFailure = function (response) {
  $('#error-message').text('Sorry that didn\'t work, please try again.')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signOutSuccess = function (response) {
  $('#error-message').text('Thank you for visiting.')
  $('#sign-out').trigger('reset')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const signOutFailure = function (response) {
  $('#error-message').text('You are stuck forever, enjoy your stay.  Please try again.')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const changePasswordFailure = function (response) {
  $('#error-message').text('Password change attempt failed, please try again.')
  setTimeout(() => {
    $('#error-message').html('')
  }, 5000)
}

const changePasswordSuccess = function (response) {
  $('#error-message').text('You have changed your password.')
  $('#change-password').trigger('reset')
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
