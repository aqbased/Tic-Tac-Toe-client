const store = require('../store')

const onNewGameSuccess = function () {
  $('#gameMessage').text('Player ' + store.startPlayer + ', it\' your move!.')
  $('.container').show()
}

const onNewGameFailure = function () {
  $('#error-message').html('You cant start a new game yet.')
}

const isTaken = function () {
  $('.gameMessage').text('There is already a game peice there.')
  setTimeout(() => {
    $('#gameMessage').html('')
  }, 5000)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  isTaken
}
