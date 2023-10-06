import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "@/views/LoginForm.vue";
import jwt_decode from "jwt-decode";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode_token = jwt_decode(token);
    const exp = decode_token.exp;
    const date = new Date();
    const now = Math.floor(date.getTime() / 1000);
    if (exp < now) {
      localStorage.removeItem("token");
      return false;
    }
  }
  return !!token;
};

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
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next({ force: true, name: "login" });
        }
      },
    },
    {
      path: "/bahan-bakar",
      name: "bahan-bakar",
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next({ force: true, name: "login" });
        }
      },
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
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next({ force: true, name: "login" });
        }
      },
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
