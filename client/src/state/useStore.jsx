import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => ({
      gyms: [],
      reviews: [],

      setGyms: data => {
        set(() => ({ gyms: data }));
      },
      setReviews: data => {
        set(() => ({ reviews: data }));
      },
    }),
    { name: 'store' },
  ),
);

export default useStore;
