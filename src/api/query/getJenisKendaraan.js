import gql from "graphql-tag";

export const GET_JENIS_KENDARAAN = gql`
  query {
    history_pengisian_groupby(by: jenis_kendaraan, _sum: { jumlah: true }) {
      jenis_kendaraan
      _sum {
        jumlah
      }
    }
  }
`;
