const store = require('../store')

const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#gameMessage').text('Player ' + store.startPlayer + ', it\'s your move!')
  $('.container').show()
}

const onFailure = function () {
  $('#gameMessage').text('Sorry, there was an error.  Please try again.')
  setTimeout(() => {
    $('#gameMessage').html('')
  }, 5000)
}

const isTaken = function () {
  $('#gameMessage').text('There is already a game piece there.')
  setTimeout(() => {
    $('#gameMessage').html('')
  }, 5000)
}

const onUpdateSuccess = function () {
  // If the tie game message exists, return true
  if ($('#gameMessage').html() === ('Looks like a tie game!  Restart to win or suffer from mediocrity.')) {
    return true
  } // If winning message isn't inside the gameMessage ID then switch players
  if ($('#gameMessage').html() !== ('Player ' + store.startPlayer + ' has won!')) {
    if (store.startPlayer === 'X') {
      store.startPlayer = 'O'
      $('#gameMessage').text('Player ' + store.startPlayer + ', it\'s your move!')
    } else {
      store.startPlayer = 'X'
      $('#gameMessage').text('Player ' + store.startPlayer + ', it\'s your move!')
    }
  }
}

const isWinner = function () {
  store.over = true
  store.game.over = true
  store.game.cells = store.cells
  $('#gameMessage').html('Player ' + store.startPlayer + ' has won!')
  $('.container').css('pointer-events', 'none')
}

const isDraw = function () {
  store.over = true
  store.game.over = true
  $('#gameMessage').text('Looks like a tie game!  Restart to win or suffer from mediocrity.')
  $('.container').css('pointer-events', 'none')
}

const onPlayAgainSuccess = function (response) {
  store.game = response.game
  $('#gameMessage').text('Player ' + store.startPlayer + ', it\'s your move!')
  $('.container').css('pointer-events', '')
  $('.container').show()
}

const onIndexSuccess = function (responseData) {
  const games = responseData.games
  let gamesHtml = ''
  games.forEach(game => {
    gamesHtml += `
      <p>ID: ${game.owner}<p>
      <p>Cells Used: ${game.cells}<p>
      <p>Game Over: ${game.over}<p>
      <hr>
    `
  })
  $('.index-body').html(gamesHtml)
}
module.exports = {
  onNewGameSuccess,
  isTaken,
  onUpdateSuccess,
  isWinner,
  isDraw,
  onPlayAgainSuccess,
  onIndexSuccess,
  onFailure
}
