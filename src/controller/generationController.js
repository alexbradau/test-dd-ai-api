const openai = require("../config/openAiConfig");
const express = require("express");
const controller = new express.Router();


controller.post("/generateCode", async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are a coding assistant that generates java classes from their associated test classes. Return the response in a json format with the prose under its own variables and the actual outputted code under its own variable. Do not include line breaker '\n' in output code.",
        },
        {
          role: "user",
          content:
            "Generate a java class from the following test class and download it as a java class: \n" +
            req.body,
        },
      ],
    });
    var output = JSON.parse(completion.choices[0].message.content);

    res.send(output);
  } catch (e) {
    console.log(e);
  }
});

module.exports = controller;
