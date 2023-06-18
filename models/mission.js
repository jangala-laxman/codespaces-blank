const mongoose = require('mongoose');
const missionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    alt: {
      type: String,
    },
    speed: {
      type: String,
    },
    waypoints: {
      alt: String,
      lat: String,
      lng: String,
    },
    sites:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Sites'
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Mission = mongoose.model('Missions', missionSchema);
module.exports = Mission;
