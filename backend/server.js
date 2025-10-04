const express=require('express')
const cors=require('cors')
const taskRouter=require('./router/taskRouter')

const app=express()
app.use(cors())
app.use(express.json())
app.use('/task', taskRouter);

app.listen(5000,()=>{
    console.log('Server running on 5000')
})