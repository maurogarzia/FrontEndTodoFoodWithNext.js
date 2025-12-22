import { create } from "zustand";

interface EntityStore<T>{
    activeEntity: T | null,
    setActiveEntity: (entity: T | null) => void,
    clearActiveEntity: () => void
}

export function createEntityStore<T> () {
    return create<EntityStore<T>>((set) => ({
        activeEntity: null,
        setActiveEntity: (entity) => set({activeEntity : entity}),
        clearActiveEntity: () => set({activeEntity: null})
    }))
}