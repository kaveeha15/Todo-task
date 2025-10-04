const data=require('../models/dataModel')
const tasks=new data()

exports.postTasks=async(req,res)=>{
    const { title, description } = req.body
    tasks.postTaskData({title,description}).then((reslovedData)=>{
        console.log('controller fired',reslovedData)
        res.json(reslovedData)
    }).catch((err)=>{
        console.log('Error from controller',err)
    })
}
exports.getTasks=async(req,res)=>{
    tasks.getTaskData().then((reslovedData)=>{
        console.log('controller fired',reslovedData)
        res.json(reslovedData)
    }).catch((err)=>{
        console.log('Error from controller',err)
    })
}


