import dotenv from 'dotenv'

dotenv.config()

export default {
	databaseConfig: {
		password: '',
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		user: process.env.DB_USER
	},
	secret: process.env.SECRET,
	port: process.env.PORT || 5000,
	environment: process.env.NODE_ENV,
}
