<script setup>
import Ikon from "./Ikon.vue";

defineProps({
  pencarian: {
    type: String,
    default: "",
  },
  kategori: {
    type: String,
    default: "",
  },
  daftarKategori: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits([
  "ubah-pencarian",
  "ubah-kategori",
  "reset",
]);
</script>

<template>
  <div class="filter-penawaran">
    <label>
      Cari penawaran
      <input
        type="search"
        :value="pencarian"
        placeholder="Cari nama makanan atau penyedia"
        @input="emit('ubah-pencarian', $event.target.value)"
      />
    </label>

    <label>
      Kategori
      <select
        :value="kategori"
        @change="emit('ubah-kategori', $event.target.value)"
      >
        <option value="">Semua kategori</option>
        <option
          v-for="item in daftarKategori"
          :key="item"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </label>

    <button type="button" @click="emit('reset')">
      <Ikon nama="reset" />
      Reset
    </button>
  </div>
</template>
