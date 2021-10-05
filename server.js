const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models')

// Routers
const registeredRouter = require('./routes/Registered')
app.use('/registered', registeredRouter)

db.sequelize.sync().then(() => {
	const port = process.env.PORT || 5000
	app.listen(port, () => {
		console.log(`Running on port ${port}...`)
	})
})
