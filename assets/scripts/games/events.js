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

const rotatePlayer = function () {
  // If winning message isn't inside the gameMessage ID then switch players
  if ($('#gameMessage').html() !== ('Player ' + store.startPlayer + ' has won!')) {
    if (store.startPlayer === 'X') {
      store.startPlayer = 'O'
      $('#gameMessage').text('Player ' + store.startPlayer + ', it\' your move!.')
    } else {
      store.startPlayer = 'X'
      $('#gameMessage').text('Player ' + store.startPlayer + ', it\' your move!.')
    }
  }
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
    $('#gameMessage').html('Player ' + store.startPlayer + ' has won!')
  }
}

const boxClick = function (event) {
  // if space isnt empty trigger ui error message
  if ($(event.target).text() === 'X' || $(event.target).text() === 'O') {
    ui.isTaken()
    // if space is empty, add token to game space
  } else if ($(event.target).text('')) {
    $(event.target).text(store.startPlayer)
    // put x inside of the cell targeting the targets id
    store.cells[event.target.id] = store.startPlayer
  }
  checkForWinner()
  rotatePlayer()
}

module.exports = {
  onNewGame,
  boxClick
}
