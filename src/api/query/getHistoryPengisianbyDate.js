import gql from "graphql-tag";

export const GET_HISTORY_PENGISIAN_BY_DATE = gql`
  query {
    Januari_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-01", lt: "2022-02" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Februari_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-02", lt: "2022-03" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Maret_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-03", lt: "2022-04" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Mei_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-05", lt: "2022-06" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Juni_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-06", lt: "2022-07" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Juli_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-07", lt: "2022-08" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Agustus_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-08", lt: "2022-09" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    September_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-09", lt: "2022-10" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Oktober_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-10", lt: "2022-11" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    November_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-11", lt: "2022-12" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Desember_2022: history_pengisian_groupby(
      where: { createdAt: { gte: "2022-12", lt: "2023-01" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Januari_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-01", lt: "2023-02" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Februari_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-02", lt: "2023-03" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Maret_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-03", lt: "2023-04" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    April_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-04", lt: "2023-05" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Mei_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-05", lt: "2023-06" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Juni_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-06", lt: "2023-07" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Juli_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-07", lt: "2023-08" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    Agustus_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-08", lt: "2023-09" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
    September_2023: history_pengisian_groupby(
      where: { createdAt: { gte: "2023-09", lt: "2023-10" } }
      _sum: { jumlah: true }
      by: kategori_pengisian
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
  }
`;
