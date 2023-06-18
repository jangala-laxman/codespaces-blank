const express = require('express')
const {addDrone, updatedrone, deletedrone} = require('../controllers/drone_controllers')

const router = express.Router()

router.post('/:userId/:siteId/addDrone', addDrone)
router.patch('/:userId/:siteId/:droneId/updateDrone', updatedrone )
router.get('/:userId/:siteId/:droneId/deleteDrone', deletedrone)

module.exports = router
