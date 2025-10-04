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
exports.deleteTask=async(req,res)=>{
    const { id } = req.params;
    tasks.deleteTaskData(id).then((reslovedData)=>{
        console.log('controller fired',reslovedData)
        res.json()
    }).catch((err)=>{
        console.log('Error from controller',err)
    })
}


