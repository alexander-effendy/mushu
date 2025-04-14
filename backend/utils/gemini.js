const axios = require('axios');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const { 
  mushu_personality_data, 
  mushu_personality_data_two,
  wise_personality_data } = require('../personality_data/mushu_personality_data');

const generateMushuReply = async (userMessage) => {
  if (!userMessage || userMessage.trim() === "") {
    return null;
  }
  const endpoint = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{
      parts: [{ text: `${mushu_personality_data}. Alex: "${userMessage}"`}]
    }]
  };
  const header = {
    'Content-Type': 'application/json'
  };
  let reply = null;
  try {
    const response = await axios.post(endpoint, payload, { header });
    reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    // console.log(reply)
    // 🧹 Clean up leading/trailing quotes or newlines
    if (reply) {
      reply = reply.trim();
      if (reply.startsWith('"') && reply.endsWith('"')) {
        reply = reply.slice(1, -1);
      }
      if (!reply.startsWith('Mushu:')) {
        reply = `Mushu: ${reply}`;
      }
    }
  } catch (error) {
    const message =
    error?.response?.data?.error?.message || error.message || "Unknown Gemini error";
    throw new Error(message);
  }
  // console.log(reply)
  // console.log()
  return reply || 'Mushu is a bit quiet right now...';
};

module.exports = { generateMushuReply };