import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  token: string | null;
  isAuth: boolean;
  loading: boolean;
  error: number;
};

type Action = {
  setToken: (token: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (isError: number) => void;
};

const useAuthStore = create(
  persist<State & Action>(
    (set) => ({
      token: null,
      isAuth: false,
      setToken: (token: string) => set(() => ({ token, isAuth: !!token })),
      loading: false,
      setLoading: (isLoading) => set(() => ({ loading: isLoading })),
      error: 0,
      setError: (isError) => set(() => ({ error: isError }))
    }),
    {
      name: 'auth'
    }
  )
);

export default useAuthStore;
