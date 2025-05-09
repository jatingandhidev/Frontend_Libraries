import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  increaseCountAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set((state) => ({ count: state.count + 1 }))
  },
  resetCount: () => set({ count: 0 }),
}))

export default useStore
