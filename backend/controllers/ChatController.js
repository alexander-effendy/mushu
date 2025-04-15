const { generateMushuReply } = require('../utils/gemini');

const chatHistory = [];

const chat = async (req, res) => {
  const userMessage = req.body.message;
  const model = req.body.model;
  const length = req.body.chatHistoryLength;

  console.log(userMessage, model, length);
  if (length === 0) chatHistory.length = 0;
  console.log(chatHistory)

  // console.log('Alex: ' + userMessage);

  if (!userMessage) {
    return res.status(400).json({ error: 'Missing message in request body' });
  }
  try {
    const context = chatHistory.map(entry => `You: ${entry.message}\nMushu: ${entry.reply}`).join('\n');
    const prompt = `${context}\nYo  u: ${userMessage}`;
    const reply = await generateMushuReply(prompt, model);

    chatHistory.push({ 
      message: userMessage, 
      reply: reply, 
    });
    res.json({ reply });
  } catch (error) {
    console.error('Gemini error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Mushu is having trouble replying 😢' });
  }
};

module.exports = { chat };
