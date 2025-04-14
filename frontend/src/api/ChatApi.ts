import axios from "axios";

export const sendChatMessageAPI = async (message: string): Promise<string> => {
  const res = await axios.post("http://localhost:3000/chat", { message });
  return res.data.reply;
};
