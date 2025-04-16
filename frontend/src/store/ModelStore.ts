import { create } from "zustand"

type ModelState = {
  selectedModel: string
  setSelectedModel: (model: string) => void
}

export const ModelStore = create<ModelState>((set) => ({
  selectedModel: localStorage.getItem('model') || "celine",
  setSelectedModel: (model) => {
    localStorage.setItem('model', model);
    set({ selectedModel: model })
  },
}))