import { create } from "zustand";

export const contentStore = create((set) => ({
    useContent: "movies",
    setContent: (type) => set({ useContent: type}),
}));