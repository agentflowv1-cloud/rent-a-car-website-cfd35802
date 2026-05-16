import create from 'zustand';
interface AuthState {
  isLoggedIn: boolean;
  username: string;
  login: (data: any) => void;
  register: (data: any) => void;
  logout: () => void;
}
const useAuthStore = create<AuthState>()((set) => ({
  isLoggedIn: false,
  username: '',
  login: (data) => set({ isLoggedIn: true, username: data.username }),
  register: (data) => set({ isLoggedIn: true, username: data.username }),
  logout: () => set({ isLoggedIn: false, username: '' })
}));
export { useAuthStore };