var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  ID: {
    type: String,
   // required: 'Kindly enter the name of the task'
  },
  Description: {
    type: String,
    required: 'Kindly enter the name of the task'
    //default: Date.now
  }
 // status: {
    //type: [{
    //  type: String,
    //  enum: ['pending', 'ongoing', 'completed']
   // }],
   // default: ['pending']
  //}
});

module.exports = mongoose.model('TO-DO', TaskSchema);
