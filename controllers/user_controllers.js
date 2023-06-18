const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Drones = require('../models/drones')
const User = require('../models/user');
const Sites = require('../models/sites');

const signUp = async (req, res) => {
 try{
  const findUser = await User.findOne({ name: req.body.name });
  if (findUser) {
    res.json('user already exits with given name');
  }
  const hashpassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    name: req.body.name,
    password: hashpassword,
    drone: req.body.drone,
  });
  res.json({
    message: user,
  })
  }catch(err){
    res.json({errorCode:err.name,message:err.message})
  }
}

const signIn = async(req,res)=>{
  try{
  const user = await User.findOne({name:req.body.name})
  console.log(user)
  if(!user){
    res.json({
      message:`${user.name} not found`
    })
  }
  const compare = bcrypt.compare(req.body.password, user.password )
  if(compare){
    const token = jwt.sign({name:user.name,password:user.password}, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    })
    user.token = token;
    res.cookie("access_token", token, {
      httpOnly: true,
      expiresIn:1000*60*60*1     //1hour
    })
    .status(200)
    .json({ message: "Logged in successfully" });
  }else{
    res.json('Invalid credentials')
  }
}catch(err){
  res.json({errorCode:err.name,message:err.message})
}
  
}

const userData = async(req,res)=>{
  try{
    const user = await User.findById(req.params.userId).populate('drones')
    res.json(user)
  }catch(err){
    res.json({errorCode:err.name,message:err.message})
  }
}

const moveDroneToOtherSite = async(req,res)=>{
  try{
    const user = await User.findById(req.params.userId);
    const drone = await Drones.findById(req.params.droneId)
    const site = await Sites.findOne({site_name:req.body.site_name})

    if(!site){
      res.json(`${req.body.site_name} is not present `)
    }else{
      drone.updateOne({
        site_name:site.id
    })
    res.json(drone)
  }
  }catch(err){
    res.json({errorCode:err.name,message:err.message})
  }
}

module.exports = { signUp, signIn, userData, moveDroneToOtherSite }

