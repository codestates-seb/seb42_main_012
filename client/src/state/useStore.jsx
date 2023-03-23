import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => ({
      gyms: [],
      gymDetail: [],
      reviews: [],
      boards: [],
      comments: [],
      members: [],
      myLocation: { Ma: 0, La: 0 },

      setGyms: data => {
        set(() => ({ gyms: data }));
      },

      setGymsDetail: data => {
        set(() => ({ gymDetail: data }));
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

      setMyLocation: data => {
        set(() => ({ myLocation: data }));
      },
    }),
    { name: 'store' },
  ),
);

export default useStore;
