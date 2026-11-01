# Hasil Uji Chapter 9 - Membangun Antarmuka dengan Vue

## Informasi Pengujian

- Tester: Dea Anantha Putri
- Branch: feature/vue-components
- Node.js: v24.22.2
- npm: 11.19.1
- Frontend: Vue 3
- Development server: http://127.0.0.1:5173/
- Production preview: http://127.0.0.1:4173/

## Hasil Pengujian

### 1. Tampilan Awal Buyer

Hasil aktual:
- 3 kartu penawaran tampil.
- Total stok 15 unit.
- Terdapat 2 penyedia.
- Penawaran dengan harga Rp0 ditampilkan sebagai Gratis.
- Penawaran tidak aktif, stok habis, dan penawaran yang sudah melewati waktu tidak ditampilkan.

Status: Berhasil.

### 2. Pencarian Penawaran

Pencarian dengan kata `LAPAU` menghasilkan 2 kartu dari Lapau Uni Rina.

Pencarian dengan kata yang tidak ditemukan menghasilkan empty state.

Status: Berhasil.

### 3. Filter Kategori

Filter kategori roti menghasilkan 1 penawaran, yaitu Paket Roti Sore, dengan stok 6 paket.

Status: Berhasil.

### 4. Pemilihan Penawaran

Paket Roti Sore dapat dipilih dan informasi pilihan diperbarui.

Pemilihan penawaran tidak mengurangi stok.

Status: Berhasil.

### 5. Mode Provider

Pada mode provider Lapau Uni Rina:
- 3 kartu milik penyedia tampil.
- 2 penawaran tersedia.
- Total stok penawaran yang tersedia adalah 9 unit.
- Data draft tetap dapat ditampilkan pada daftar milik penyedia.

Status: Berhasil.

### 6. Validasi Form

Form kosong menampilkan ringkasan kesalahan dan tidak menambahkan data baru.

Harga penawaran yang lebih besar daripada harga normal ditolak.

Harga penawaran Rp0 diterima sebagai penawaran gratis.

Status: Berhasil.

### 7. Penambahan Penawaran

Penambahan penawaran valid berhasil masuk ke daftar provider.

Pada pengujian aktual digunakan:
- Nama: Roti Uji Harga
- Harga normal: Rp10.000
- Harga penawaran: Rp0
- Stok: 2
- Status: Aktif

Setelah penambahan:
- Penawaran tersedia provider menjadi 3.
- Total stok tersedia menjadi 11 unit.
- Penawaran baru ditampilkan dengan label Gratis.

Status: Berhasil.

### 8. Data In-Memory

Setelah halaman di-refresh, penawaran baru tidak lagi tersedia.

Daftar kembali menjadi:
- 3 kartu.
- 15 unit.
- 2 penyedia.

Hal ini menunjukkan data penambahan pada Chapter 9 masih disimpan di state aplikasi dan belum dipersistensikan ke database.

Status: Berhasil.

### 9. Responsive Layout

Pengujian dilakukan pada ukuran:
- 375 x 812
- 768 x 1024
- 1280 x 800

Tampilan tetap dapat digunakan pada ukuran mobile, tablet, dan desktop tanpa masalah horizontal scroll yang terlihat.

Status: Berhasil.

### 10. Keyboard Accessibility

Navigasi menggunakan tombol Tab dapat mencapai elemen interaktif.

Fitur "Lewati ke konten" dapat digunakan untuk melewati bagian awal halaman.

Status: Berhasil.

### 11. Production Build

Perintah berikut berhasil dijalankan dari folder frontend:

    npm run build

Hasil build:
- 25 modules transformed.
- `dist/index.html` berhasil dibuat.
- Asset SVG berhasil dibuat.
- File CSS dan JavaScript berhasil dibuat.
- Build selesai tanpa error.

Status: Berhasil.

### 12. Production Preview

Perintah berikut berhasil dijalankan dari folder frontend:

    npm run preview

Halaman production preview pada:

    http://127.0.0.1:4173/

dapat dibuka dan tampil normal.

Status: Berhasil.

## Alur Props dan Emits

Data penawaran dikirim dari komponen parent ke child menggunakan props.

Komponen kartu menerima data penawaran, waktu saat ini, dan status apakah kartu dapat dipilih.

Komponen filter menerima nilai pencarian, kategori, dan daftar kategori. Perubahan filter dikirim kembali ke parent menggunakan emits.

Form penawaran menggunakan emits untuk mengirim data penawaran yang telah lolos validasi kepada parent.

## Perhitungan Ringkasan Buyer dan Provider

Pada mode buyer, ringkasan dihitung berdasarkan penawaran yang tersedia, yaitu penawaran dengan status aktif, stok lebih dari nol, dan waktu berakhir yang masih berada di masa depan.

Hasil pengujian buyer awal adalah 3 kartu, 15 unit, dan 2 penyedia.

Pada mode provider Lapau Uni Rina, terdapat 3 penawaran milik penyedia, dengan 2 penawaran tersedia dan total 9 unit stok tersedia.

## Catatan

Chapter 9 menggunakan data fixture atau in-memory sehingga data baru tidak bertahan setelah halaman di-refresh.

Tidak ada password, token, JWT, hash, atau credential yang dicantumkan dalam dokumen ini.

Dokumen ini mencatat hasil pengujian aktual yang dilakukan selama pengembangan Chapter 9.
