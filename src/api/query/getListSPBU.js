import gql from "graphql-tag";

export const GET_LIST_SPBU = gql`
  query {
    subsidi: history_pengisian_groupby(
      by: spbu_id
      _sum: { jumlah: true }
      where: { kategori_pengisian: { equals: subsidi } }
    ) {
      spbu_id
      _sum {
        jumlah
      }
    }
    non_subsidi: history_pengisian_groupby(
      by: spbu_id
      _sum: { jumlah: true }
      where: { kategori_pengisian: { equals: non_subsidi } }
    ) {
      spbu_id
      _sum {
        jumlah
      }
    }
    spbu {
      name
      id
      alamat
    }
  }
`;
