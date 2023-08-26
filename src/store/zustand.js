import { create } from "zustand";

//state menjadi global jadi bisa dipakai dimanapun
const useStore = create((set) => ({
    //gblobal states yg akan digunakan
  revenue: 0,
  items: [],
  setItems: (data) => set(() => ({items: data})),
  setRevenue: (data) => set((state) => ({revenue: state.revenue + data}) )
}));

export default useStore;
