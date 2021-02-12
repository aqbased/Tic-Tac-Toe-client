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

module.exports = {
  showNewGame
}
