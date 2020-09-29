import express from 'express'
import config from './env'
import db from './app/db/dev/database'
import routers from './app/routes'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/todos', routers.todosRouter)

async function start() {
	try {
		await db.authenticate()
		console.log('Database successfully connected...')
		app.listen(config.port,
			() => console.log(`Server has been started on PORT ${config.port}...`))
	} catch(e) {
		console.log('Server error: ', e.message)
	}
}

start()
