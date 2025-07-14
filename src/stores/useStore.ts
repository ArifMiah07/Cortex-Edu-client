import {create} from 'zustand';


export interface IUser {
    name: string;
    email: string; 
}

export interface IUserState {
    user: IUser | null;
    setUser: (user : IUser | null)=> void;
}

const useUserStore = create<IUserState>((set)=> ({
    user: null,
    setUser: (user)=> set({user}),
}))


export default useUserStore