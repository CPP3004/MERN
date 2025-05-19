import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayerById,
  deletePlayerById
} from '../controllers/playerControllers.js'

const routes = (app) => {
  app.route('/players')
    .get(getPlayers)
    .post(addNewPlayer)

  app.route('/player/:PlayerId')
    .get(getPlayerWithID)
    .put(updatePlayerById)
    .delete(deletePlayerById)
}

export default routes
