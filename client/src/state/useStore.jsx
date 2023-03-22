import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => ({
      gyms: [],
      reviews: [],
      boards: [],
      comments: [],
      members: [],

      setGyms: data => {
        set(() => ({ gyms: data }));
      },
      setReviews: data => {
        set(() => ({ reviews: data }));
      },

      setBoards: data => {
        set(() => ({ boards: data }));
      },
      setComments: data => {
        set(() => ({ comments: data }));
      },

      setMembers: data => {
        set(() => ({ members: data }));
      },
    }),
    { name: 'store' },
  ),
);

export default useStore;
