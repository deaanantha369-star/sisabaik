
# SisaBaik

SisaBaik adalah aplikasi yang membantu penyedia menawarkan stok makanan berlebih dengan harga khusus atau secara gratis, sekaligus membantu masyarakat memperoleh makanan yang lebih terjangkau dan mengurangi limbah pangan.

## Persyaratan Sistem

- Node.js versi `^22.18.0` atau `>=24.12.0`.
- PostgreSQL aktif.
- Database `sisabaik_dev` tersedia.
- File `.env` pada direktori root proyek telah dikonfigurasi.
- Dependency backend dan frontend telah terpasang.

File `.env` hanya digunakan untuk konfigurasi lokal dan tidak boleh dimasukkan ke repository.

## Chapter 7 – REST API

Backend menggunakan Express 5 dan PostgreSQL untuk mengelola penawaran serta pesanan. API mendukung validasi request, pagination, filter, transaksi database, rollback, persistensi data, snapshot harga, dan pengujian konkurensi stok.

## Chapter 9 – Antarmuka Vue

Frontend menggunakan Vue 3 Composition API dan Single File Components (SFC). Komponen meliputi kartu penawaran, filter, formulir penawaran, ikon, dan komponen antarmuka lainnya.

Pada Chapter 9, data penawaran masih menggunakan fixture atau data latihan. Chapter 10 mengintegrasikan antarmuka dengan REST API dan PostgreSQL.

## Chapter 10 – Integrasi Full Stack

### Teknologi

- Backend: Node.js dan Express 5.
- Frontend: Vue 3.5.43.
- Routing: Vue Router 4.6.4.
- Build tool: Vite 8.3.3.
- Database: PostgreSQL.
- Pengolahan foto: Sharp.

### Instalasi Dependency

Dari direktori root:

```bash
npm ci
```

Kemudian pasang dependency frontend:

```bash
npm --prefix frontend ci
```

### Konfigurasi API dan Proxy

Frontend menggunakan prefix `/api` untuk mengakses backend. Pada development dan preview, Vite meneruskan request `/api` ke `http://127.0.0.1:3000` tanpa mengubah path.

Endpoint pemeriksaan kesehatan:

```text
http://127.0.0.1:3000/api/health
```

Saat frontend menggunakan Vite:

```text
http://127.0.0.1:5173/api/health
```

Saat frontend menggunakan Preview:

```text
http://127.0.0.1:4173/api/health
```

### Menjalankan Mode Development

Terminal pertama, dari root proyek:

```bash
npm run dev
```

Terminal kedua:

```bash
npm --prefix frontend run dev
```

Frontend dapat diakses melalui:

```text
http://127.0.0.1:5173/
```

### Production Build dan Preview

Dari root proyek:

```bash
npm run build
```

Atau dari folder frontend:

```bash
npm run build
npm run preview
```

Preview dapat diakses melalui:

```text
http://127.0.0.1:4173/
```

### Build Lokal Satu Origin

Setelah proses development backend dihentikan, jalankan dari root proyek:

```bash
npm run build
npm run start:local
```

Aplikasi hasil build dan API disajikan melalui:

```text
http://127.0.0.1:3000/
```

Jangan menjalankan `npm run dev` dan `npm run start:local` secara bersamaan pada port 3000.

### Pendaftaran dan Verifikasi Penyedia

Pengguna dapat mendaftar sebagai pembeli atau penyedia melalui halaman pendaftaran. Penyedia baru memiliki status menunggu verifikasi.

Verifikasi usaha hanya dilakukan oleh operator atau pihak yang berwenang. Setelah verifikasi, penyedia dapat memeriksa status akun dan mengakses fitur pengelolaan penawaran.

Jangan mengubah status verifikasi secara manual melalui frontend.

### Pengelolaan Penawaran dan Foto

Penyedia dapat membuat, melihat, dan mengubah penawaran sesuai hak aksesnya.

- Foto yang didukung adalah PNG, JPEG, dan WebP dengan ukuran maksimal 2 MiB.
- Foto diproses oleh server menggunakan Sharp dan dikonversi ke WebP.
- Penawaran tanpa foto menggunakan ilustrasi kategori.
- Perubahan penawaran menggunakan nomor versi untuk mencegah perubahan berdasarkan data yang sudah usang.
- Konflik versi dapat menghasilkan respons `409 OFFER_CHANGED`.

### Alur Pesanan dan Stok

Pembeli mengirim pesanan menggunakan ID penawaran dan kuantitas. Server menghitung harga dan total transaksi berdasarkan data yang tersimpan, bukan berdasarkan total yang dikirim oleh frontend.

Reservasi pesanan mengurangi stok melalui transaksi database. Pembatalan atau penolakan yang diperbolehkan akan memulihkan stok satu kali.

Alur pesanan meliputi:

1. Pembeli membuat pesanan.
2. Penyedia menerima pesanan.
3. Penyedia menandai pesanan siap diambil.
4. Penyedia mencatat serah terima dan pembayaran.
5. Pesanan diselesaikan sesuai status transaksi.

Pembayaran dilakukan di tempat dan belum menggunakan payment gateway.

### Dashboard dan Metrik

Dashboard pembeli dan penyedia menggunakan data agregat dari backend.

Metrik dibedakan berdasarkan peristiwa transaksi yang benar. Reservasi belum dihitung sebagai pendapatan atau transaksi selesai.

Metrik mencakup belanja pembeli, penghematan pembeli, unit makanan, pendapatan penyedia, nilai normal makanan yang tersalurkan, dan selisih harga penawaran.

Penghematan biaya penjual belum dihitung karena data biaya produksi belum tersedia.

### Pengujian Alur Transaksi

Dari root proyek, jalankan:

```bash
npm run workflow:test
```

Script menggunakan akun dan penawaran fixture tersendiri untuk memeriksa alur transaksi, foto, kepemilikan, perubahan status, pembatalan, pembayaran, dan dashboard.

Pengujian ini dirancang menggunakan fixture dan membersihkan data uji miliknya. Hasil aktual harus dicatat setelah pengujian dijalankan.

### Batasan Implementasi

Beberapa fitur yang belum tersedia:

- Sesi autentikasi disimpan di memori dan hilang ketika halaman di-refresh.
- Belum tersedia payment gateway.
- Belum tersedia reset kata sandi dan verifikasi email.
- Belum tersedia idempotency key.
- Belum tersedia pembaruan data secara realtime.
- Penghematan biaya penjual belum dihitung.

## Hasil Pemeriksaan Lokal

Pemeriksaan yang telah dilakukan:

- Migrasi database berhasil.
- Backend berhasil terhubung ke PostgreSQL.
- Frontend berhasil menjalankan production build.
- Vite Proxy berhasil meneruskan request ke backend.
- Preview berhasil dijalankan pada port 4173.
- Endpoint `/api/health` mengembalikan status `ok` dan database `connected`.
- Route privat mengarahkan pengguna yang belum login ke halaman Login.
- Halaman Akses Ditolak menampilkan pesan sesuai konfigurasi.
- Perubahan integrasi disimpan pada branch `feature/fullstack-vue`.

Pengujian login, pendaftaran, transaksi menggunakan akun pengguna, dan `workflow:test` belum dinyatakan lulus karena belum dilakukan.

## Git

Branch pengembangan:

```text
feature/fullstack-vue
```

Commit integrasi Chapter 10:

```text
0355435
```

Repository:

https://github.com/deaanantha369-star/sisabaik
