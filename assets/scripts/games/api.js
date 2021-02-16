const config = require('../config')
const store = require('../store')

const showNewGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

const updateGame = function (index, value, over) {
  console.log(`this is index: ${index}, this is value: ${value}, this is over: ${over}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}
module.exports = {
  showNewGame,
  updateGame
}
