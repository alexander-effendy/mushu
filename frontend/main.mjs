import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY=AIzaSyD2-fu9YiNyN3oWtA9o0vN7MhsOpssM7jMls" });

async function main() {
  const result = await ai.models.generateContent({
    model: "gemini-pro",
    contents: "Hey Mushu, how are you today?"
  });

  const text = await result.response.text();
  console.log("💬 Mushu says:", text);
}

main();
