const mongoose = require('mongoose')
const crypto = require('crypto')
const droneSchema = new mongoose.Schema({
    drone_id:{
        type:String,
        default:crypto.randomBytes(4).toString('hex')
    },
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
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  })

const Drones = mongoose.model('Drones', droneSchema);
module.exports = Drones;
