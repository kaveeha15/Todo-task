const sql=require('mysql2')
 const db=sql.createPool({
    host:'localhost',
    user:'kavisha',
    password:'kavisha15KN#*',
    database:'todo_app',
    port:3306,
    dateStrings:true
 })
 module.exports=db.promise()