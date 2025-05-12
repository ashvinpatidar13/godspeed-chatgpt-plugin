
const axios = require('axios');

module.exports = async (req, res) => {
  const query = req.body.query;
  if (!query) {
    return res.status(400).json({ error: 'Missing query in request body' });
  }

  try {
    console.log("lets go....");
    
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: query ,max_tokens: 256 }],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
      }
    });
    res.json({ answer: response.data.choices[0].message.content });
  } catch (error) {
    console.log(error.response.statusText);
    res.status(500).json({ error: error.response.statusText});
  }
};
