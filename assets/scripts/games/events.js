const api = require('./api')
const ui = require('./ui')

const onNewGame = function () {
  api.showNewGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  onNewGame
}
