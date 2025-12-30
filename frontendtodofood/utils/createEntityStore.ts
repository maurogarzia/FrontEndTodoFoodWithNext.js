import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EntityStore<T>{
    
    activeEntity: T | null,
    
    setActiveEntity: (entity: T | null) => void,
    
}

export function createEntityStore<T> (storeKey?: string) {
    return create<EntityStore<T>>()(
        storeKey
        ? persist(
            (set) => ({
                activeEntity: null,
                setActiveEntity: (entity) => set({activeEntity: entity})
            }),
            {
                name: storeKey,
                partialize: (state) => ({
                    activeEntity: state.activeEntity
                })
            }
        )
        : 
        (set) => ({
            activeEntity: null,
            setActiveEntity: (entity) => set({activeEntity: entity})
        })
    )
        
        
}