var mongoose = require('mongoose'),
  Task = mongoose.model('TO-DO');

exports.get_to_do = function(req, res)
 {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  } );
};




exports.create_to_do = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


//exports.read_a_task = function(req, res) {
  //Task.findById(req.params.taskId, function(err, task) {
   // if (err)
      //res.send(err);
    //res.json(task);
  //});
// };


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};