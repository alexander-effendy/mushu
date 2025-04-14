import { create } from "zustand"

type ModelState = {
  hasSentFirstMessage: boolean
  setHasSentFirstMessage: (status: boolean) => void
}

export const ChatStore = create<ModelState>((set) => ({
  hasSentFirstMessage: false,
  setHasSentFirstMessage: (status) => set({ hasSentFirstMessage: status }),
}));
