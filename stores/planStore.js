import { create } from 'zustand';

const usePlanStore = create((set) => ({
  plan: null,
  date: new Date(),
  planLoading: false,

  setPlan: (plan) => set((state) => ({ plan })),
  setDate: (date) => set((state) => ({ date })),
  setPlanLoading: (planLoading) => set((state) => ({ planLoading })),
}));

export default usePlanStore;
