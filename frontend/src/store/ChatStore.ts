import { create } from "zustand"

type ChatMessage = {
  from: "user" | "bot"
  text: string
}

type ChatState = {
  hasSentFirstMessage: boolean
  setHasSentFirstMessage: (status: boolean) => void

  chatHistory: ChatMessage[]
  setChatHistory: (history: ChatMessage[]) => void
  appendToChatHistory: (msg: ChatMessage) => void
}


export const ChatStore = create<ChatState>((set) => ({
  hasSentFirstMessage: false,
  setHasSentFirstMessage: (status) => set({ hasSentFirstMessage: status }),

  chatHistory: [],
  setChatHistory: (history) => set({ chatHistory: history }),
  
  appendToChatHistory: (newMessage: ChatMessage) =>
    set((state) => ({ chatHistory: [...state.chatHistory, newMessage] })),
}))
