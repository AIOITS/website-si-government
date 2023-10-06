<template>
  <div class="overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left text-primary-gray dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">No</th>
          <th scope="col" class="px-6 py-3">SPBU</th>
          <th scope="col" class="px-6 py-3">Alamat</th>
          <th scope="col" class="px-6 py-3">Pembelian Subsidi (KL)</th>
          <th scope="col" class="px-6 py-3">Pembelian Non-Subsidi (KL)</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b"
          :class="
            index % 2 == 1
              ? 'bg-gray-50 dark:bg-gray-700'
              : 'bg-secondary-green'
          "
          v-for="(item, index) in data"
          :key="index"
        >
          <th
            scope="row"
            class="px-6 py-3 font-medium text-primary-gray whitespace-nowrap dark:text-white"
          >
            {{ item.id }}
          </th>
          <td class="px-6 py-3">{{ item.name }}</td>
          <td class="px-6 py-3">{{ item.alamat }}</td>
          <td class="px-6 py-3">{{ item.subsidi.toFixed(2) }}</td>
          <td class="px-6 py-3">{{ item.non_subsidi.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
