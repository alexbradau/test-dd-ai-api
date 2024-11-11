const openai = require('../config/openAiConfig')
const express = require('express')
const controller = new express.Router()

controller.post('/generateCode', async (req, res) => {
    try {
        console.log(req.body)
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a coding assistant that generates java classes from their associated test classes." },
                {
                    role: "user",
                    content: "Generate a java class from the following test class and download it as a java class: \n" + req.body,
                },
            ],
        });
        res.send(completion.choices)
    } catch (e) {
        console.log(e)
    }
})

module.exports = controller
