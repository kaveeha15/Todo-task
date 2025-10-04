const db = require('../config/database')

class Task {
  async postTaskData(body) {
    const { title, description } = body
    const query = 'INSERT INTO task (title, description) VALUES (?, ?)';
    const res = await db.execute(query, [title, description]).then((resolve) => {
        console.log('Resolved At Model', resolve)
        return resolve
      })
      .catch((err) => {
        console.log('Error At Model', err)
        throw new Error('Error Occurred at DB')
    });
    return res
  }

}

module.exports = Task