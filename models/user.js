const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:true
    },
    password: {
      type: String,
      required:true
    },
    drones: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Drones'
    }],
    sites:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"sites"
    }],
    token: { type: String },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
