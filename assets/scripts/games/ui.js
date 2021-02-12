
const onNewGameSuccess = function () {
  $('#error-message').html('You have started a new game.')
  $('.container').show()
}

const onNewGameFailure = function () {
  $('#error-message').html('You cant start a new game yet.')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
