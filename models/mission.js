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
  // {
  //   timestamps: {
  //     createdAt: {
  //       created_at: {
  //         $date: { type: Date },
  //       },
  //     },
  //     updatedAt: {
  //       updated_at: {
  //         $date: { type: Date },
  //       },
  //     },
  //   },
  // }
);

const Mission = mongoose.model('Missions', missionSchema);
module.exports = Mission;
