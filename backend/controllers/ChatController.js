const { generateMushuReply } = require('../utils/gemini');

const chat = async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Missing message in request body' });
  }
  try {
    const reply = await generateMushuReply(userMessage);
    res.json({ reply });
  } catch (error) {
    console.error('Gemini error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Mushu is having trouble replying 😢' });
  }
};

module.exports = { chat };
