import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "@/views/LoginForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginForm,
    },
    {
      path: "/sekilas",
      name: "sekilas",
      component: () => import("@/views/SekilasView.vue"),
    },
    {
      path: "/bahan-bakar",
      name: "bahan-bakar",
      children: [
        {
          path: "",
          name: "pembelian",
          component: () => import("@/views/BahanBakar/PembelianView.vue"),
        },
        {
          path: "penggunaan",
          name: "penggunaan",
          component: () => import("@/views/BahanBakar/PenggunaanView.vue"),
        },
        {
          path: "pengajuan",
          name: "pengajuan",
          component: () => import("@/views/BahanBakar/PengajuanView.vue"),
        },
      ],
    },
    {
      path: "/lalu-lintas",
      name: "lalu-lintas",
      children: [
        {
          path: "kecelakaan",
          name: "kecelakaan",
          component: () => import("@/views/LaluLintas/KecelakaanView.vue"),
        },
        {
          path: "pelanggaran",
          name: "pelanggaran",
          component: () => import("@/views/LaluLintas/PelanggaranView.vue"),
        },
      ],
    },
  ],
});

export default router;
