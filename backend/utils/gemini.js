const axios = require('axios');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const generateMushuReply = async (userMessage) => {
  if (!userMessage || userMessage.trim() === "") {
    return null;
  }
  const endpoint = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{
      parts: [{ text: `You are a kind and supportive friend names Mushu. The user says: "${userMessage}"`}]
    }]
  };
  const header = {
    'Content-Type': 'application/json'
  };
  let reply = null;
  try {
    const response = await axios.post(endpoint, payload, { header });
    reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
  } catch (error) {
    const message =
    error?.response?.data?.error?.message || error.message || "Unknown Gemini error";
    throw new Error(message);
  }
  return reply || 'Mushu is a bit quiet right now...';
};

module.exports = { generateMushuReply };