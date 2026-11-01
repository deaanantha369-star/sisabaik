<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import FilterPenawaran from "./components/FilterPenawaran.vue";
import KartuPenawaran from "./components/KartuPenawaran.vue";
import FormPenawaran from "./components/FormPenawaran.vue";
import Ikon from "./components/Ikon.vue";
import logo from "./assets/brand-mark.svg";
import makanan from "./assets/food-bowl.svg";
import roti from "./assets/food-bread.svg";
import { buatDataLatihan, penyediaLatihan }
  from "./data/penawaran-latihan.js";
import { formatRupiah, tersedia } from "./lib/tampilan.js";

const penawaran = ref(buatDataLatihan());
const modeTampilan = ref("pembeli");
const pencarian = ref("");
const kategori = ref("");
const pesan = ref("");
const pilihanId = ref(null);
const waktuSekarang = ref(Date.now());
const konten = ref(null);
const ringkasanPilihan = ref(null);
let timer;
let idBerikutnya = 7;

onMounted(() => {
  timer = setInterval(() => {
    waktuSekarang.value = Date.now();
  }, 1000);
});

onUnmounted(() => clearInterval(timer));

const penawaranTersedia = computed(() =>
  penawaran.value.filter((p) => tersedia(p, waktuSekarang.value)),
);

const daftarKategori = computed(() =>
  [...new Set(penawaranTersedia.value.map((p) => p.kategori))].sort(),
);

const katalog = computed(() => {
  const q = pencarian.value.trim().toLowerCase();

  return penawaranTersedia.value.filter((p) =>
    (!kategori.value || p.kategori === kategori.value) &&
    `${p.nama} ${p.penyedia}`.toLowerCase().includes(q),
  );
});

const milikRina = computed(() =>
  penawaran.value.filter((p) => p.penyediaId === penyediaLatihan.id),
);

const milikTersedia = computed(() =>
  milikRina.value.filter((p) => tersedia(p, waktuSekarang.value)),
);

const pilihan = computed(() =>
  penawaranTersedia.value.find((p) => p.id === pilihanId.value) ?? null,
);

const jumlahUnit = computed(() =>
  penawaranTersedia.value.reduce((jumlah, p) => jumlah + p.stok, 0),
);

const jumlahUnitMilik = computed(() =>
  milikTersedia.value.reduce((jumlah, p) => jumlah + p.stok, 0),
);

const jumlahPenyedia = computed(() =>
  new Set(penawaranTersedia.value.map((p) => p.penyediaId)).size,
);

function resetFilter() {
  pencarian.value = "";
  kategori.value = "";
}

function ubahMode(nilai) {
  modeTampilan.value = nilai;
  pesan.value = "";
}

async function pilihPenawaran(id) {
  if (!penawaranTersedia.value.some((p) => p.id === id)) return;

  pilihanId.value = id;
  pesan.value = "Pilihan Anda diperbarui.";

  await nextTick();
  ringkasanPilihan.value?.focus();
}

function tambahPenawaran(data) {
  penawaran.value.unshift({
    ...data,
    id: String(idBerikutnya++),
    penyediaId: penyediaLatihan.id,
    penyedia: penyediaLatihan.nama,
    dibuatPada: new Date().toISOString(),
  });

  pesan.value = "Penawaran ditambahkan ke daftar Anda.";
}
</script>

<template>
  <a
    class="lewati"
    href="#konten"
    @click.prevent="konten?.focus()"
  >
    Lewati ke konten
  </a>

  <header class="site-header">
    <div class="container header-inner">
      <a
        class="brand"
        href="#konten"
        @click="ubahMode('pembeli')"
      >
        <img :src="logo" width="42" height="42" alt="" />

        <span>
          Sisa<span class="brand-accent">Baik</span>
          <small>kesempatan kedua, kebaikan baru</small>
        </span>
      </a>

      <div class="mode-control">
        <label for="mode">Tampilan</label>

        <select
          id="mode"
          v-model="modeTampilan"
          @change="pesan = ''"
        >
          <option value="pembeli">Pembeli</option>
          <option value="penyedia">Penyedia Rina</option>
        </select>
      </div>
    </div>
  </header>

  <main
    id="konten"
    ref="konten"
    tabindex="-1"
  >
    <p
      v-if="pesan"
      class="container session-message"
      role="status"
      aria-live="polite"
    >
      <Ikon nama="cek" />{{ pesan }}
    </p>

    <template v-if="modeTampilan === 'pembeli'">
      <section
        class="hero"
        aria-labelledby="judul-utama"
      >
        <div class="container hero-layout">
          <div class="hero-copy">
            <p class="eyebrow">
              <span class="eyebrow-dot"></span>
              Setiap porsi punya kesempatan kedua
            </p>

            <h1 id="judul-utama">
              Makanan enak.<br />
              <span>Harga lebih ramah.</span><br />
              Dampak lebih baik.
            </h1>

            <p class="hero-lead">
              Temukan makanan berlebih yang masih layak konsumsi.
              Nikmati harga khusus atau penawaran gratis,
              sambil memberi nilai baru pada stok yang tersedia.
            </p>

            <div class="button-group">
              <a class="button" href="#katalog">
                Jelajahi makanan
                <Ikon nama="panah" />
              </a>

              <button
                type="button"
                class="button-secondary"
                @click="ubahMode('penyedia')"
              >
                Saya punya usaha
                <Ikon nama="toko" />
              </button>
            </div>

            <div class="hero-values">
              <span>
                <Ikon nama="daun" />
                Lebih sedikit terbuang
              </span>

              <span>
                <Ikon nama="tas" />
                Lebih banyak manfaat
              </span>
            </div>
          </div>

          <div class="hero-art">
            <div class="hero-orbit"></div>

            <img
              class="hero-food"
              :src="makanan"
              width="640"
              height="420"
              alt="Ilustrasi sepiring makanan dengan nasi dan sayuran"
              fetchpriority="high"
            />

            <div class="hero-art-note">
              <span class="icon-tile">
                <Ikon nama="daun" />
              </span>

              <div>
                <strong>Masih layak. Masih bernilai.</strong>
                <small>Kesempatan baik dimulai dari sini.</small>
              </div>
            </div>

            <img
              class="hero-bread"
              :src="roti"
              width="640"
              height="420"
              alt="Ilustrasi roti di atas papan kayu"
            />

            <span class="hero-art-label">
              Ilustrasi menu
            </span>
          </div>
        </div>
      </section>

      <section
        id="katalog"
        class="section container"
        aria-labelledby="judul-katalog"
      >
        <div class="section-heading">
          <div>
            <p class="eyebrow">Kebaikan tersedia hari ini</p>

            <h2 id="judul-katalog">
              Temukan makanan pilihan Anda
            </h2>

            <p class="muted">
              Pilih sesuai kebutuhan.
            </p>
          </div>

          <div class="section-stats">
            <span>{{ katalog.length }} penawaran</span>
            <span>{{ jumlahUnit }} unit</span>
            <span>{{ jumlahPenyedia }} penyedia</span>
          </div>
        </div>

        <FilterPenawaran
          :pencarian="pencarian"
          :kategori="kategori"
          :daftar-kategori="daftarKategori"
          @ubah-pencarian="pencarian = $event"
          @ubah-kategori="kategori = $event"
          @reset="resetFilter"
        />

        <div
          v-if="katalog.length"
          class="offer-grid"
        >
          <KartuPenawaran
            v-for="item in katalog"
            :key="item.id"
            :penawaran="item"
            :waktu-sekarang="waktuSekarang"
            :boleh-pilih="true"
            @pilih="pilihPenawaran"
          />
        </div>

        <div
          v-else
          class="empty-state"
        >
          <h3>Tidak ada penawaran yang cocok</h3>
          <p>
            Coba ubah kata pencarian atau reset filter.
          </p>
        </div>

        <div
          v-if="pilihan"
          ref="ringkasanPilihan"
          tabindex="-1"
          class="selection-summary"
        >
          <strong>Pilihan Anda</strong>
          <span>{{ pilihan.nama }}</span>
          <span>{{ formatRupiah(pilihan.hargaPenawaran) }}</span>
        </div>
      </section>
    </template>

    <template v-else>
      <section class="section container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Ruang penyedia</p>

            <h1>
              Kelola penawaran {{ penyediaLatihan.nama }}
            </h1>

            <p class="muted">
              Tambahkan penawaran latihan menggunakan formulir.
            </p>
          </div>

          <div class="section-stats">
            <span>{{ milikTersedia.length }} tersedia</span>
            <span>{{ jumlahUnitMilik }} unit</span>
          </div>
        </div>

        <div class="provider-layout">
          <div>
            <h2>Penawaran Anda</h2>

            <div
              v-if="milikRina.length"
              class="offer-grid"
            >
              <KartuPenawaran
                v-for="item in milikRina"
                :key="item.id"
                :penawaran="item"
                :waktu-sekarang="waktuSekarang"
              />
            </div>

            <p v-else class="empty-state">
              Belum ada penawaran.
            </p>
          </div>

          <div>
            <h2>Tambah penawaran</h2>

            <FormPenawaran @simpan="tambahPenawaran" />
          </div>
        </div>
      </section>
    </template>
  </main>
</template>
