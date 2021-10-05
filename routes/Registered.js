const express = require('express')
const router = express.Router()
const { Registered } = require('../models')

router.get('/', async (req, res) => {
	try {
		const registeredUsers = await Registered.findAll()
		res.json(registeredUsers)
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res) => {
	const registeredUser = req.body
	await Registered.create(registeredUser)
	res.json(registeredUser)
})

module.exports = router
