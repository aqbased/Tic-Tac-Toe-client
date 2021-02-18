const store = require('./../store')

const signUpSuccess = function (response) {
  $('#signUpModal').modal('hide')
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
  $('#changePassButton').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#signUpButton').hide()
  $('#sign-in').hide()
  $('#signInButton').hide()
  $('#signInModal').modal('hide')
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
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#changePassButton').hide()
  $('#changePassModal').modal('hide')
  $('#signInButton').show()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#signUpButton').show()
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
  $('#changePassModal').modal('hide')
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
