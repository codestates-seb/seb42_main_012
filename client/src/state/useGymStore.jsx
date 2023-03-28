import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useGymStore = create(
  persist(
    set => ({
      gyms: [],
      gymsDetail: [],
      reviews: [],
      reviewsList: [],

      myLocation: { Ma: 0, La: 0 },

      setMyLocation: data => set({ myLocation: data }),

      setGyms: data => set({ gyms: data }),

      setGymsDetail: data => set({ gymsDetail: data }),

      setReviews: data => set({ reviews: data }),

      setReviewsList: data => set({ reviewsList: data }),
    }),
    { name: 'store' },
  ),
);

export default useGymStore;
