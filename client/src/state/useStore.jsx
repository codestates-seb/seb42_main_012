import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      set => ({
        // Board
        boards: [],
        comments: [],

        setBoards: data => {
          set(() => ({ boards: data }));
        },
        setComments: data => {
          set(() => ({ comments: data }));
        },

        // Member
        members: [],

        setMembers: data => {
          set(() => ({ members: data }));
        },

        // Member Location
        myLocation: { Ma: 0, La: 0 },

        setMyLocation: data => {
          set(() => ({ myLocation: data }));
        },

        // My
        myElements: [],
        myBoards: [],
        myComments: [],
        myReviews: [],
        myGymsBookmarks: [],
        myBoardsBookmarks: [],

        setMyElements: data => {
          set(() => ({ myElements: data }));
        },

        setMyBoards: data => {
          set(() => ({ myBoards: data }));
        },

        setMyComments: data => {
          set(() => ({ myComments: data }));
        },

        setMyReviews: data => {
          set(() => ({ myReviews: data }));
        },

        setMyGymsBookmarks: data => {
          set(() => ({ myGymsBookmarks: data }));
        },

        setBoardsBookmarks: data => {
          set(() => ({ myBoardsBookmarks: data }));
        },

        // login
        isLoggedIn: false,

        setIsLoggedIn: data => {
          set(() => ({ isLoggedIn: data }));
        },
      }),
      { name: 'store' },
    ),
  ),
);

export default useStore;
