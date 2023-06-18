const express = require('express')
const {signUp, signIn, userData, moveDroneToOtherSite} = require('../controllers/user_controllers')

const router = express.Router()

router.post('/signUp', signUp)
router.post('/signIn', signIn)
router.get('/:userId', userData )

router.patch('/:userId/:droneId/moveDroneToOtherSite', moveDroneToOtherSite)

module.exports = router;