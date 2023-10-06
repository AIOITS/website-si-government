import gql from "graphql-tag";

export const GET_HISTORY_PENGISIAN_BY_GROUP = gql`
  query {
    history_pengisian_groupby: history_pengisian_groupby(
      by: kategori_pengisian
      _sum: { jumlah: true }
    ) {
      kategori_pengisian
      _sum {
        jumlah
      }
    }
  }
`;
