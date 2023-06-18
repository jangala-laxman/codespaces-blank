const mongoose = require('mongoose');
const siteSchema = new mongoose.Schema(
  {
    site_name: {
      type: String,
      required:true
    },
    position: {
      latitude: {
        type: String,
      },
      longitude: {
        type: String,
      },
    },
    missions:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"missions"
    }],
    drones:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"drones"
    }],
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    }
  },
  {
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
  }
);

const Site = mongoose.model('Sites', siteSchema);
module.exports = Site;
