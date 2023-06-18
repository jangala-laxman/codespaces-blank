const Sites = require('../models/sites')
const Drones = require('../models/drones')
const User = require('../models/user')
const addDrone = async(req,res)=>{
    try{
        const drone = await Drones.create({
            drone_type:req.body.drone_type,
            make_name:req.body.make_name,
            name:req.body.name,
        })
        await Sites.findByIdAndUpdate(req.params.siteId,{
            $push:{ drones:drone}
        })
        console.log(drone._id)

        await User.findByIdAndUpdate(req.params.userId, {
            $push:{ drones:drone}
        })

        res.json(drone)
    }catch(err){
        res.json({errorCode:err.name,message:err.message})
}
}

const updatedrone = async(req,res)=>{
    // const sites = await Sites.findById(req.params.siteId)
    try{
        const user = await User.findById(req.params.userId)
        console.log(user.name)
        const drones = await Drones.findByIdAndUpdate(req.params.droneId,{
            drone_type:req.body.drone_type,
            make_name:req.body.make_name,
            name:req.body.name,
        })
        console.log(drones)
        await user.updateOne({drones:drones._id})
        await Sites.findByIdAndUpdate(req.params.siteId,{
            $set:{ drones:drones}
        })
        console.log(user)
        res.json(drones)
    }catch(err){
        res.json({errorCode:err.name,message:err.message})
    }
}

const deletedrone = async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId);
        const drone = await Drones.findByIdAndRemove(req.params.droneId)
        console.log(drone)
        await user.updateOne({
            $pull:{drones:drone._id}
        })
        console.log(user)
        res.json(drone)
    }catch(err){
        res.json({errorCode:err.name,message:err.message})
}
}


module.exports = {addDrone, updatedrone, deletedrone}