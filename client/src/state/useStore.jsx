import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => ({
      gyms: [],
      reviews: [],
      comments: [],
      boards: [],
      members: [],

      setGyms: data => {
        set(() => ({ gyms: data }));
      },
      setReviews: data => {
        set(() => ({ reviews: data }));
      },
      setComments: data => {
        set(() => ({ comments: data }));
      },
      setBoards: data => {
        set(() => ({ boards: data }));
      },
      setMembers: data => {
        set(() => ({ members: data }));
      },
    }),
    { name: 'store' },
  ),
);

export default useStore;
