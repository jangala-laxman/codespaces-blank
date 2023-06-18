const express = require('express')
const {addMission, updateMission, deleteMission} = require('../controllers/mission_controllers')

const router = express.Router()

router.post('/:siteId/addMission', addMission)
router.patch('/:siteId/:missionId/updateMission', updateMission )
router.get('/:siteId/:missionId/deleteMission', deleteMission)

module.exports = router
