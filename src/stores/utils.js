import { defineStore } from "pinia";

export const useUtils = defineStore({
  id: "utils",
  state: () => ({}),
  actions: {
    deleteUnderscore(input) {
      // Membagi input menjadi dua bagian berdasarkan tanda garis bawah
      const parts = input.split("_");

      // Membaca bulan dan tahun dari bagian pertama dan kedua
      const bulan = parts[0];
      const tahun = parts[1];

      // Menggabungkan bulan dan tahun dengan spasi di antara keduanya
      const formatted = `${bulan} ${tahun}`;

      return formatted;
    },
  },
});
