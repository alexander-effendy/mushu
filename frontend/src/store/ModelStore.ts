import { create } from "zustand"

type ModelState = {
  selectedModel: string
  setSelectedModel: (model: string) => void
}

export const ModelStore = create<ModelState>((set) => ({
  selectedModel: "",
  setSelectedModel: (model) => set({ selectedModel: model }),
}))
