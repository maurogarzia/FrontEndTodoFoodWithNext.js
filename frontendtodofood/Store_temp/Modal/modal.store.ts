import { create } from "zustand";

interface modalStoreProps{
    view: boolean,
    setView: (option: boolean) => void

    type: string,
    setType: (type: string) => void
}

export const modalStore = create<modalStoreProps>((set) => ({
    view: false,
    setView: (option) => set({view: option}),

    type: '',
    setType: (incommingType) => set({type: incommingType})
}))