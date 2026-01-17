import { ICart } from "../../types/models/Cart.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICartStore {
    elements: ICart[],

    addElement: (newElement: ICart) => void,
    removeElement: (id: string) => void
    emptyCart: () => void
}


export const cartStore = create<ICartStore>()(
    persist(
        (set) => ({
            elements: [],

            addElement: (newElement: ICart) => set((state) => ({
                elements: [...state.elements, newElement]
            })),

            removeElement: (id) => set((state) => ({
                elements: state.elements.filter((element) => element.id !== id)
            })),

            emptyCart: () => set({elements: []})
        }),
        {
            name: 'cart',
            partialize: (state) => ({
                elements: state.elements
            })
        }
    )
)