const axios = require('axios');
require('dotenv').config();


module.exports = {
  advice: async (req, res) => {
    const {message} = req.body

const prompt = {
  model: "gpt-3.5-turbo",
  
  temperature: 0.7,
  max_tokens: 300,
  messages: [
    { role: "system", content: "You are a helpful assistant who helps people with their mental stressors." },
    { role: "user", content: `${message}` },
  ],
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.ENCODED_KEY}`,
};


    console.log(req.body);
    try {
      const openaiResponse = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        prompt,
        { headers }
      );
      console.log(openaiResponse.data);
      res.send(openaiResponse.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(error.response?.status || 500).send({ error: "Internal Server Error" });
    }
  },
};
