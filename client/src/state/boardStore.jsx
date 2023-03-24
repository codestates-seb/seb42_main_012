import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const boardStore = create(
  devtools(
    persist(
      set => ({
        boards: [],
        boardDetail: [],
        comments: [],

        setBoards: data => {
          set(() => ({ boards: data }));
        },
        setBoardDetail: data => {
          set(() => ({ boardDetail: data }));
        },
        setComments: data => {
          set(() => ({ comments: data }));
        },
      }),
      { name: 'store' },
    ),
  ),
);

export default boardStore;
