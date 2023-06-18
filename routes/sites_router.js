const express = require('express')
const {addSite, updateSite, deleteSite, getAllDrones, getAllMissions} = require('../controllers/sites_controllers')

const router = express.Router()

router.post('/:userId/addSite', addSite)
router.post('/:userId/:siteId/updateSite', updateSite )
router.get('/:userId/:siteId/deleteSite', deleteSite)
router.get('/:siteId/getAllDrones', getAllDrones)
router.get('/:siteId/getAllMissions', getAllMissions)

module.exports = router