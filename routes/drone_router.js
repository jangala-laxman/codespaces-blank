const express = require('express')
const {addDrone, updatedrone, deletedrone} = require('../controllers/drone_controllers')

const router = express.Router()

router.post('/:userId/addDrone', addDrone)
router.patch('/:userId/:droneId/updateDrone', updatedrone )
router.get('/:userId/:droneId/deleteDrone', deletedrone)

module.exports = router
