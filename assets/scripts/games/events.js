const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onNewGame = function () {
  store.startPlayer = 'X'
  store.cells = ['', '', '', '', '', '', '', '', '']
  api.showNewGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onPlayAgain = function () {
  store.startPlayer = 'X'
  store.cells = ['', '', '', '', '', '', '', '', '']
  const $text = $('.col-4')
  $text.html($text.html().replace('X', ''))
  api.showNewGame()
    .then(ui.onPlayAgainSuccess)
    .catch(ui.onPlayAgainFailure)
}

const checkForWinner = function () {
  if ((store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') || (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O') ||
  (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') || (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O') ||
  (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') || (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O') ||
  (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') || (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O') ||
  (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') || (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O') ||
  (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') || (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O') ||
  (store.cells[2] === 'X' && store.cells[5] === 'X' && store.cells[8] === 'X') || (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O') ||
  (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') || (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O')) {
    ui.isWinner()
    return true
  } else if (checkForDraw()) {
    return true
  }
  return false
}

const checkForDraw = function () {
  if ((store.cells[0] === 'X' || store.cells[0] === 'O') && (store.cells[1] === 'X' || store.cells[1] === 'O') &&
  (store.cells[2] === 'X' || store.cells[2] === 'O') && (store.cells[3] === 'X' || store.cells[3] === 'O') &&
  (store.cells[4] === 'X' || store.cells[4] === 'O') && (store.cells[5] === 'X' || store.cells[5] === 'O') &&
  (store.cells[6] === 'X' || store.cells[6] === 'O') && (store.cells[7] === 'X' || store.cells[7] === 'O') &&
  (store.cells[8] === 'X' || store.cells[8] === 'O')) {
    ui.isDraw()
    return true
  }
  return false
}

const boxClick = function (event) {
  // if space isnt empty trigger ui error message
  if ($(event.target).text() === 'X' || $(event.target).text() === 'O') {
    ui.isTaken()
    return
    // if space is empty, add token to game space
  } else if ($(event.target).text('')) {
    $(event.target).text(store.startPlayer)
    // put x or o inside of the cell targeting the targets id
    store.cells[event.target.id] = store.startPlayer
    api.updateGame(event.target.id, store.startPlayer, checkForWinner())
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  }
  checkForDraw()
}

module.exports = {
  onNewGame,
  boxClick,
  // rotatePlayer,
  onPlayAgain
}
