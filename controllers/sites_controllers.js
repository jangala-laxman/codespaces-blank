const Sites = require('../models/sites')
const User= require('../models/user')

const addSite = async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
    const site = await Sites.findOne({site_name:req.body.site_name})
    if(site){
        res.json(`${site.site_name} has already been added`)
    }
    const newSite = await Sites.create({
        site_name:req.body.site_name,
        position:{
            latitude:req.body.latitude,
            longitude:req.body.longitude,
        }
    })
    await user.updateOne({$push:{sites:newSite}})
    console.log(user)
    res.json(newSite)
    }catch(err){
        res.json({errorCode:err.name,message:err.message})
    }
}

const updateSite = async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId);
        const site = await User.findByIdAndUpdate({site:req.params.siteId}, {
        site_name:req.body.site_name,
        position:{
            latitude:req.body.latitude,
            longitude:req.body.longitude,
        }
    })

    await user.updateOne({site:site.id})

    res.json({
        site:site,
        message:"updated successfully"
    })
    }catch(err){
        res.json({errorCode:err.name,message:err.message})
    }
}

const deleteSite = async(req,res)=>{
    try{
        const site = await Sites.findById(req.params.id);
        const user = await User.findOne({siteId:site.id})
        await user.updateOne({
            $pull:{siteId:site.id}
        })
        await site.removeOne()
    }catch(err){
        res.json({errorCode:err.name,message:err.message})
    }
}

const getAllDrones = async(req,res)=>{
   try{
    const site = await Sites.findById(req.params.siteId)
    res.send(site.drones)
   }catch(err){
    res.json({errorCode:err.name,message:err.message})
   }
}

const getAllMissions = async(req,res)=>{
  try{
    const site = await Sites.findById(req.params.siteId)
    console.log(site)
    res.json(site)
  }catch(err){
    res.json({errorCode:err.name,message:err.message})
  }
}


module.exports = {addSite, updateSite, deleteSite, getAllDrones, getAllMissions}