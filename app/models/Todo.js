import Sequelize from 'sequelize'
import db from '../db/dev/database'

const Todo = db.define('todo', {
	title: {
		type: Sequelize.STRING
	}
})

Todo.sync().then(() => {
	console.log('Table Todo created')
})

export default Todo
