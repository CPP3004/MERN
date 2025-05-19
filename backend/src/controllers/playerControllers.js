import mongoose from 'mongoose'
import { PlayerSchema } from '../models/playerModel.js'

const Player = mongoose.model('Player', PlayerSchema)

// Create new player
export const addNewPlayer = async (req, res) => {
  try {
    const newPlayer = new Player(req.body)
    const savedPlayer = await newPlayer.save()
    res.status(201).json(savedPlayer)
  } catch (err) {
    res.status(500).send(err.message || err)
  }
}

// Get all players
export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find({})
    res.status(200).json(players)
  } catch (err) {
    res.status(500).send(err.message || err)
  }
}

// // Get player by ID
// export const getPlayerWithID = async (req, res) => {
//   try {
//     const player = await Player.findById(req.params.PlayerId)
//     if (!player) {
//       return res.status(404).send('Player not found')
//     }
//     res.status(200).json(player)
//   } catch (err) {
//     res.status(500).send(err.message || err)
//   }
// }
export const getPlayerWithID = async (req, res) => {
  const { PlayerId } = req.params

  // Validate if the PlayerId is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(PlayerId)) {
    return res.status(400).send('Invalid PlayerId')
  }

  try {
    // console.log(`Player GET id: ${PlayerId}`)
    const player = await Player.findById(PlayerId)
    if (!player) {
      return res.status(404).send(`Player id [${PlayerId}] not found`)
    }
    res.status(200).json(player)
  } catch (err) {
    console.error('Error retrieving player:', err)
    res.status(500).send(err.message || err)
  }
}

// Update player by ID
export const updatePlayerById = async (req, res) => {
  try {
    const updatedPlayerById = await Player.findOneAndUpdate(
      { _id: req.params.PlayerId },
      req.body,
      { new: true }
    )
    if (!updatedPlayerById) {
      return res.status(404).send('Player not found')
    }
    res.status(200).json(updatedPlayerById)
  } catch (err) {
    res.status(500).send(err.message || err)
  }
}

export const deletePlayerById = async (req, res) => {
  const { PlayerId } = req.params

  // Validate if the PlayerId is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(PlayerId)) {
    return res.status(400).send('Invalid PlayerId')
  }

  try {
    // Attempt to delete the player by ID
    const deletedPlayer = await Player.findByIdAndDelete(PlayerId)

    if (!deletedPlayer) {
      return res.status(404).send(`Player id [${PlayerId}] not found`)
    }

    // Successfully deleted the player
    res.status(200).send(`Player with id [${PlayerId}] successfully deleted`)
  } catch (err) {
    console.error('Error deleting player:', err)
    res.status(500).send(err.message || err)
  }
}
