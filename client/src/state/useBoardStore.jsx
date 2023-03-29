import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useBoardStore = create(
  devtools(
    persist(
      set => ({
        boards: [],
        boardDetail: [],
        comments: [],
        boardTabs: [],

        setBoards: data => {
          set(() => ({ boards: data }));
        },
        setBoardDetail: data => {
          set(() => ({ boardDetail: data }));
        },
        setComments: data => {
          set(() => ({ comments: data }));
        },
        setBoardTab: data => {
          set(() => ({ boardTabs: data }));
        },
      }),
      { name: 'store' },
    ),
  ),
);

export default useBoardStore;
