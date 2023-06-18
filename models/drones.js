const mongoose = require('mongoose')
const droneSchema = new mongoose.Schema({
    
    drone_type:{
        type:String
    },
    make_name:{
        type:String
    },
    name:{
        type:String
    },
    sites:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"sites"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const Drones = mongoose.model('Drones', droneSchema);
module.exports = Drones;
