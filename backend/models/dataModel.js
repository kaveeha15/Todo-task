const db = require('../config/database')

class Task {
  async postTaskData(body) {
    const { title, description } = body
    const query = 'INSERT INTO task (title, description) VALUES (?, ?)'
    const res = await db.execute(query, [title, description]).then((resolve) => {
        console.log('Resolved At Model', resolve)
        return resolve
      })
      .catch((err) => {
        console.log('Error At Model', err)
        throw new Error('Error Occurred at DB')
    })
    return res
  }
   async getTaskData() {
    const res = await db.execute('SELECT * FROM task ORDER BY id DESC LIMIT 5').then((data) => data[0])
      .catch((err) => {
        throw new Error(err.message)
      })
    return res
   }
   async deleteTaskData(id) {
    const result = await db.execute('DELETE FROM task WHERE id = ?', [id]).then((resolve) => resolve)
      .catch((err) => {
        console.log('Error At Model', err)
        throw new Error('Error Occurred at DB')
      })
    return result
  }

}

module.exports = Task