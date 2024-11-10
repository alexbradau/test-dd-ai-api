const openai = require('../config/openAiConfig')
const express = require('express')
const controller = new express.Router()

controller.post('/generateCode', async (req, res) => {
    try {
        console.log('Exposed endpoint...')
        res.send('Exposed endpoint...')
    } catch (e) {
        console.log(e)
    }
})

module.exports = controller
