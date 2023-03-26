import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useMyStore = create(
  persist(
    set => ({
      myElements: [],
      myBoards: [],
      myComments: [],
      myReviews: [],
      myGymsBookmarks: [],
      myBoardsBookmarks: [],

      setMyElements: data => set({ myElements: data }),

      setMyBoards: data => set({ myBoards: data }),

      setMyComments: data => set({ myComments: data }),

      setMyReviews: data => set({ myReviews: data }),

      setMyGymsBookmarks: data => set({ myGymsBookmarks: data }),

      setBoardsBookmarks: data => set({ myBoardsBookmarks: data }),
    }),
    { name: 'store' },
  ),
);

export default useMyStore;
