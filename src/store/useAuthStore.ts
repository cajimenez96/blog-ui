import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  token: string | null;
  isAuth: boolean;
};

type Action = {
  setToken: (token: string) => void;
};

const useAuthStore = create(
  persist<State & Action>(
    (set) => ({
      token: null,
      isAuth: false,
      setToken: (token: string) =>
        set(() => ({
          token,
          isAuth: !!token
        }))
    }),
    {
      name: 'auth'
    }
  )
);

export default useAuthStore;
