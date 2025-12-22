import { create } from "zustand";

interface modalStoreProps{
    view: boolean,
    setView: (option: boolean) => void
}


export const modalStore = create<modalStoreProps>((set) => ({
    view: false,

    setView: (option) => set({view: option})
}))