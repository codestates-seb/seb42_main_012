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

      setGyms: data => set({ gyms: data }),

      setGymsDetail: data => set({ gymsDetail: data }),

      setReviews: data => set({ reviews: data }),

      setReviewsList: data => set({ reviewsList: data }),

      setMyLocation: data => set({ myLocation: data }),
    }),
    { name: 'store' },
  ),
);

export default useGymStore;
