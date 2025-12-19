import { IUser } from "@/types/models/Users.model";
import { create } from "zustand";

interface useStoreUserProps{
    loginUser: IUser | null
    activeUser: IUser | null

    setLoginUser: () => void
    setActiveUser: () => void

}


export const useStoreUser = create((set) => ({
}))