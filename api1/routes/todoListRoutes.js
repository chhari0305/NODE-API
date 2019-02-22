module.exports = function(app) {
    var todoList = require('../controller/todoListController');
  
    // todoList Routes
    app.route('/to-do')
      .get(todoList.get_to_do)
      .post(todoList.create_to_do);
  
  
   // app.route('/tasks/:taskId')
      //.get(todoList.read_a_task)
     // .put(todoList.update_a_task)
    //  .delete(todoList.delete_a_task);
  };