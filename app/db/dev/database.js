import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export default new Sequelize('todos', 'postgres', 'root', {
	host: 'localhost',
	dialect: 'postgres',
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
})
