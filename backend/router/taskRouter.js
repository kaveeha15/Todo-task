const taskController=require('../controllers/taskController')
const express=require('express')
const router=express.Router()
router.route('/postTasks').post(taskController.postTasks)
router.route('/postTasks').post(taskController.postTasks)
router.route('/deleteTask/:id').delete(taskController.deleteTask);
module.exports=router