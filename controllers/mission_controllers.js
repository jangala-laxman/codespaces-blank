const Sites = require('../models/sites')
const Missions = require('../models/mission')

const addMission = async(req,res)=>{
   try{
    const sites = await Sites.findById(req.params.siteId)
    const mission = await Missions.create({
        name:req.body.name,
        alt:req.body.alt,
        speed:req.body.speed,
        waypoints: {
            alt: req.body.alt,
            lat: req.body.lat,
            lng: req.body.lng,
        }
    })
    await sites.updateOne({$push:{missions:mission}})
    res.json(mission)

   }catch(err){
    res.json({errorCode:err.name,message:err.message})
   }
}

const updateMission = async(req,res)=>{
    try{
        const sites = await Sites.findById(req.params.siteId)
        const mission = await Missions.findByIdAndUpdate(req.params.missionId,{
            name:req.body.name,
            alt:req.body.alt,
            speed:req.body.speed,
            waypoints: {
                alt: req.body.alt,
                lat: req.body.lat,
                lng: req.body.lng,
            }
        })
        await sites.updateOne({missions:mission})
        res.json("updated successfully")
    }catch(err){
        res.json({errorCode:err.name,message:err.message})
    }
}

const deleteMission = async(req,res)=>{
    try{
        const site = await Sites.findById(req.params.siteId);
        console.log(site)
        const mission = await Missions.findByIdAndRemove(req.params.missionId)
        console.log(mission)
        await site.updateOne({
            $pull:{missions:mission}
        })
        
        res.json(mission)
    }catch(err){
        res.json({errorCode:err.name,message:err.message})
    }
}


module.exports = {addMission, updateMission, deleteMission}