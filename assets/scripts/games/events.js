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

const boxClick = function (event) {
  // if space isnt empty trigger ui error message
  if ($(event.target).text() === 'X') {
    ui.isTaken()
    // if space is empty, add token to game space
  } else if ($(event.target).text('')) {
    $(event.target).text('X')
    // put x inside of the cell targeting the targets id
    store.cells[event.target.id] = 'X'
  }
}
module.exports = {
  onNewGame,
  boxClick
}
