import axios from "axios";

export const sendChatMessageAPI = async (message: string, model: string, chatHistoryLength: number): Promise<string> => {
  const res = await axios.post("http://localhost:3000/chat", { message, model, chatHistoryLength });
  return res.data.reply;
};
