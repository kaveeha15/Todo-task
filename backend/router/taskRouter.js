const taskController=require('../controllers/taskController')
const express=require('express')
const router=express.Router()


router.route('/postTasks').post(taskController.postTasks)


module.exports=router