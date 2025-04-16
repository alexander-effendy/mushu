import { create } from "zustand"

type GeneralState = {
  mode: string
  setMode: (status: string) => void
}

export const GeneralStore = create<GeneralState>((set) => ({
  mode: localStorage.getItem('mode') || 'dark',
  setMode: (status) => {
    localStorage.setItem('mode', status);
    set({ mode: status })
  }
}))
