<script setup>
import { nextTick, ref } from "vue";
import { formKosong, validasiForm } from "../lib/form-penawaran.js";

const emit = defineEmits(["simpan"]);
const form = ref(formKosong());
const errors = ref({});
const ringkasan = ref(null);

async function simpan() {
  const hasil = validasiForm(form.value);
  errors.value = hasil.errors;

  if (!hasil.data) {
    await nextTick();
    ringkasan.value?.focus();
    return;
  }

  emit("simpan", hasil.data);
  form.value = formKosong();
  errors.value = {};
}
</script>

<template>
  <form class="form-penawaran" @submit.prevent="simpan">
    <div
      ref="ringkasan"
      tabindex="-1"
      aria-live="polite"
      class="form-penawaran__ringkasan"
    >
      <p v-if="Object.keys(errors).length">
        Periksa kembali data penawaran.
      </p>
    </div>

    <label>
      Nama penawaran
      <input v-model="form.nama" type="text" />
      <small v-if="errors.nama">{{ errors.nama }}</small>
    </label>

    <label>
      Kategori
      <select v-model="form.kategori">
        <option value="roti">Roti</option>
        <option value="makanan-siap-saji">Makanan siap saji</option>
        <option value="bahan-segar">Bahan segar</option>
      </select>
      <small v-if="errors.kategori">{{ errors.kategori }}</small>
    </label>

    <label>
      Harga normal
      <input v-model="form.hargaNormal" type="number" min="1" />
      <small v-if="errors.hargaNormal">{{ errors.hargaNormal }}</small>
    </label>

    <label>
      Harga penawaran
      <input v-model="form.hargaPenawaran" type="number" min="0" />
      <small v-if="errors.hargaPenawaran">
        {{ errors.hargaPenawaran }}
      </small>
    </label>

    <label>
      Stok
      <input v-model="form.stok" type="number" min="0" />
      <small v-if="errors.stok">{{ errors.stok }}</small>
    </label>

    <label>
      Satuan
      <select v-model="form.satuan">
        <option value="paket">Paket</option>
        <option value="porsi">Porsi</option>
      </select>
      <small v-if="errors.satuan">{{ errors.satuan }}</small>
    </label>

    <label>
      Status
      <select v-model="form.status">
        <option value="draft">Draft</option>
        <option value="aktif">Aktif</option>
      </select>
      <small v-if="errors.status">{{ errors.status }}</small>
    </label>

    <label>
      Berakhir pada
      <input v-model="form.berakhirPada" type="datetime-local" />
      <small v-if="errors.berakhirPada">
        {{ errors.berakhirPada }}
      </small>
    </label>

    <button type="submit">Simpan penawaran</button>
  </form>
</template>
