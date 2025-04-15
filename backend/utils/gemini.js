const axios = require('axios');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const { 
  mushu_personality_data, 
  mushu_personality_data_two,
  wise_personality_data,
  papa_personality_data,
  siao_po__personality_data,
  fridge_personality_data,
  samantha_personality_data } = require('../personality_data/mushu_personality_data');

const generateMushuReply = async (userMessage, model) => {
  if (!userMessage || userMessage.trim() === "") {
    return null;
  }

  // 🧠 Select the correct personality data
  let personality;
  switch (model) {
    case 'mushu':
      personality = mushu_personality_data;
      break;
    case 'papa':
      console.log('papa is the best')
      personality = papa_personality_data;
      break;
    case 'wise':
      personality = wise_personality_data;
      break;
    case 'celine':
      personality = siao_po__personality_data;
      break;
    case 'fridge':
      personality = fridge_personality_data;
      break;
    case 'samantha':
      personality = samantha_personality_data;
      break;
    default:
      personality = 'You are a friendly chatbot. Keep replies short.';
  }
  console.log('model used: ' + model);

  const endpoint = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{
      parts: [{ text: `${personality}. Alex: "${userMessage}"`}]
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
      // if (!reply.startsWith('Mushu:')) {
      //   reply = `Mushu: ${reply}`;
      // }
      reply.replace(/\b\w+:\s*/g, '')
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