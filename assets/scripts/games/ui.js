const store = require('../store')
// const events = require('./events')

const onNewGameSuccess = function (response) {
  store.game = response.game
  console.log(store.game)
  console.log('this is store.game._id: ' + store.game._id)
  console.log('this is store.game.owner: ' + store.game.owner)
  $('#gameMessage').text('Player ' + store.startPlayer + ', it\' your move!.')
  $('.container').show()
}

const onNewGameFailure = function () {
  $('#error-message').html('You cant start a new game yet.')
}

const isTaken = function () {
  $('#gameMessage').text('There is already a game piece there.')
  setTimeout(() => {
    $('#gameMessage').html('')
  }, 5000)
}

const onUpdateSuccess = function () {
  console.log('we made it to ui')
}

const onUpdateFailure = function () {
  console.log('we made it to ui and failed')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  isTaken,
  onUpdateFailure,
  onUpdateSuccess
}
