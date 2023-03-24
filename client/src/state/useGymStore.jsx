import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useGymStore = create(
  persist(
    set => ({
      gyms: [],
      gymsDetail: [],
      reviews: [],

      setGyms: data => set({ gyms: data }),

      setGymsDetail: data => set({ gymsDetail: data }),

      setReviews: data => set({ reviews: data }),
    }),
    { name: 'store' },
  ),
);

export default useGymStore;
