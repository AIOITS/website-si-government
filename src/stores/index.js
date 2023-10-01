import { defineStore } from "pinia";
import { useQuery } from "@vue/apollo-composable";
import { GET_HISTORY_PENGISIAN_BY_GROUP } from "../api/query/getHistoryPengisianbyGroup";
import { computed, ref, reactive } from "vue";
import apolloClient from "../plugins/apollo";
import { GET_HISTORY_PENGISIAN_BY_DATE } from "../api/query/getHistoryPengisianbyDate";
import { useUtils } from "./utils";
import { GET_JENIS_KENDARAAN } from "../api/query/getJenisKendaraan";
import { GET_JENIS_BAHAN_BAKAR } from "../api/query/getJenisBahanBakar";
import { GET_LIST_SPBU } from "../api/query/getListSPBU";

export const useApp = defineStore({
  id: "app",
  state: () => ({
    loading: false,
    sidebar: false,
    is_profile: false,
    history_pengisian_by_group: [],
    bahan_bakar: {
      subsidi: 0,
      non_subsidi: 0,
      total: 0,
    },
    history_pengisian_by_date: {
      labels: [],
      subsidi: [],
      non_subsidi: [],
      // datasets: [],
    },
    jenis_kendaraan: {
      labels: [],
      data: [],
      total: 0,
    },
    jenis_bahan_bakar: {
      name: [],
      jumlah: [],
      total: 0,
    },
    list_spbu: [],
  }),
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    toggleProfile() {
      this.is_profile = !this.is_profile;
    },
    async useHistoryPengisianByGroup() {
      this.loading = true;
      this.history_pengisian_by_group = [];
      try {
        const result = await apolloClient.query({
          query: GET_HISTORY_PENGISIAN_BY_GROUP,
        });
        this.history_pengisian_by_group = result.data.history_pengisian_groupby;
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
        this.getJumlahBahanBakar;
      }
    },
    async useHistoryPengisianByDate() {
      const UTILS = useUtils();
      this.loading = true;
      try {
        const result = await apolloClient.query({
          query: GET_HISTORY_PENGISIAN_BY_DATE,
        });
        const data = result.data;
        const output = {
          labels: [],
          subsidi: [],
          non_subsidi: [],
        };

        for (const month in data) {
          this.history_pengisian_by_date.labels.push(
            UTILS.deleteUnderscore(month),
          );
          const monthData = data[month];
          let subsidiTotal = 0;
          let nonSubsidiTotal = 0;

          for (const item of monthData) {
            if (item.kategori_pengisian === "subsidi") {
              subsidiTotal += item._sum.jumlah;
            } else if (item.kategori_pengisian === "non_subsidi") {
              nonSubsidiTotal += item._sum.jumlah;
            }
          }

          this.history_pengisian_by_date.subsidi.push(subsidiTotal);
          this.history_pengisian_by_date.non_subsidi.push(nonSubsidiTotal);
        }

        // this.history_pengisian_by_date.labels = output.labels;
        // this.history_pengisian_by_date.subsidi = output.subsidi;
        // this.history_pengisian_by_date.non_subsidi = output.non_subsidi;
        // this.history_pengisian_by_date.datasets = [
        //   {
        //     label: 'Subsidi',
        //     data: output.subsidi,
        //     backgroundColor: '#d5a419',
        //   },
        //   {
        //     label: 'Non Subsidi',
        //     data: output.non_subsidi,
        //     backgroundColor: '#00b595',
        //   },
        // ];
        // console.log(this.history_pengisian_by_date);
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
        // this.getHistoryPengisianByDate;
      }
    },
    async useJenisKendaraan() {
      this.loading = true;
      try {
        const result = await apolloClient.query({
          query: GET_JENIS_KENDARAAN,
        });
        const data = result.data.history_pengisian_groupby;

        const extractedData = data.map((item) => ({
          label: item.jenis_kendaraan,
          data: item._sum.jumlah,
        }));
        const transformedData = {
          labels: extractedData.map((item) => item.label),
          data: extractedData.map((item) => item.data),
          total: extractedData.reduce((a, b) => a + b.data, 0),
        };

        this.jenis_kendaraan = transformedData;
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async useJenisBahanBakar() {
      this.loading = true;
      try {
        const result = await apolloClient.query({
          query: GET_JENIS_BAHAN_BAKAR,
        });
        const data_history_pengisian = result.data.jumlah_bbm;
        const data_bbm = result.data.jenis_bbm;

        const bbmMapping = {};

        data_bbm.forEach((item) => {
          bbmMapping[item.id] = item.name;
        });

        const historyPengisianWithNames = data_history_pengisian.map(
          (item) => ({
            name: bbmMapping[item.bbm_id],
            jumlah: item._sum.jumlah,
          }),
        );

        this.jenis_bahan_bakar.name = historyPengisianWithNames.map(
          (item) => item.name,
        );
        this.jenis_bahan_bakar.jumlah = historyPengisianWithNames.map(
          (item) => item.jumlah,
        );
        this.jenis_bahan_bakar.total = historyPengisianWithNames.reduce(
          (a, b) => a + b.jumlah,
          0,
        );

        console.log(this.jenis_bahan_bakar);
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async useListSPBU() {
      this.loading = true;
      try {
        const result = await apolloClient.query({
          query: GET_LIST_SPBU,
        });
        const obj_data_spbu = result.data;
        console.log(obj_data_spbu);

        const data_spbu = obj_data_spbu.spbu.map((spbu) => {
          const subsidiData = obj_data_spbu.subsidi.find(
            (item) => item.spbu_id == spbu.id,
          );
          const nonSubsidiData = obj_data_spbu.non_subsidi.find(
            (item) => item.spbu_id == spbu.id,
          );

          return {
            ...spbu,
            subsidi: subsidiData ? subsidiData._sum.jumlah : 0,
            non_subsidi: nonSubsidiData ? nonSubsidiData._sum.jumlah : 0,
          };
        });

        this.list_spbu = data_spbu;
      } catch (error) {
        console.log(error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getJumlahBahanBakar() {
      if (this.history_pengisian_by_group.length > 0) {
        this.history_pengisian_by_group.forEach((item) => {
          if (item.kategori_pengisian === "subsidi") {
            this.bahan_bakar.subsidi = item._sum.jumlah;
          } else if (item.kategori_pengisian === "non_subsidi") {
            this.bahan_bakar.non_subsidi = item._sum.jumlah;
          }
        });
        this.bahan_bakar.total =
          this.bahan_bakar.subsidi + this.bahan_bakar.non_subsidi;
      }
    },
    getHistoryPengisianByDate() {
      if (this.history_pengisian_by_date !== undefined) {
        this.history_pengisian_by_date.forEach((item) => {
          console.log(item);
        });
      }
    },
    getTotalJenisKendaraan() {
      if (this.jenis_kendaraan.data.length > 0) {
        return this.jenis_kendaraan.data.reduce((a, b) => a + b, 0);
      }
    },
  },
});
