# SisaBaik

SisaBaik adalah aplikasi bisnis digital yang mempertemukan penyedia makanan berlebih dengan pembeli. Aplikasi ini membantu penyedia menawarkan makanan yang masih layak konsumsi dengan harga lebih terjangkau sekaligus memberikan alternatif pembelian bagi masyarakat.

## 1. Teknologi

### Frontend
- Vue 3
- Vue Router 4
- Vite 8

### Backend
- Node.js 22+
- Express 5
- PostgreSQL
- node-postgres (pg)

### Keamanan dan pendukung
- JSON Web Token (JWT)
- bcryptjs
- Helmet
- express-rate-limit
- Sharp untuk pemrosesan gambar

## 2. Struktur Proyek

```text
SisaBaik/
├── docs/
│   └── minggu12/
└── sisabaik-api/
    ├── frontend/
    │   ├── public/
    │   └── src/
    ├── scripts/
    ├── src/
    └── server.js
```

## 3. Persyaratan

- Node.js versi 22 atau lebih baru.
- npm.
- PostgreSQL untuk pengembangan lokal.
- Konfigurasi lingkungan backend yang sesuai.

## 4. Instalasi dan Menjalankan Aplikasi

Masuk ke direktori backend:

```bash
cd sisabaik-api
npm install
npm --prefix frontend install
```

Pastikan konfigurasi lingkungan lokal tersedia dalam file `.env`. Jangan mengunggah file tersebut ke repositori.

Perintah pengembangan backend:

```bash
npm run dev
```

Perintah menjalankan aplikasi lokal melalui skrip:

```bash
npm run start:local
```

Perintah menjalankan server tanpa memuat file lingkungan secara otomatis:

```bash
npm start
```

Perintah build frontend untuk produksi:

```bash
npm run build
```

## 5. Deployment Publik

URL aplikasi:

https://sisabaik-oomp.onrender.com/

Pemeriksaan kesehatan layanan:

- `/healthz`
- `/api/health`

Aplikasi menggunakan layanan hosting Render dan database PostgreSQL cloud. Ketersediaan layanan bergantung pada kondisi penyedia hosting dan database.

## 6. Pendaftaran dan Peninjauan Akun

Pengguna dapat membuat akun melalui fitur Daftar pada aplikasi.

Akun pembeli digunakan untuk melihat penawaran dan melakukan pemesanan.

Akun penyedia digunakan untuk mengelola usaha, membuat penawaran makanan, mengelola stok, dan memproses pesanan.

Penyedia harus melalui proses peninjauan sebelum memperoleh akses sebagai penyedia terverifikasi.

Jalankan perintah berikut dari direktori sisabaik-api. Peninjauan dapat dilakukan melalui skrip backend:

```bash
npm run penyedia:verifikasi -- email@domain.com
```

Untuk menolak peninjauan:

```bash
npm run penyedia:verifikasi -- email@domain.com --tolak
```

Peninjauan database cloud menggunakan perintah khusus:

```bash
npm run penyedia:verifikasi:cloud -- email@domain.com
```

Perintah peninjauan mengubah status verifikasi akun pada database. Jalankan hanya oleh pengelola yang berwenang dan pastikan target database benar.

## 7. Alur Utama Aplikasi

1. Pengguna mendaftar sebagai pembeli atau penyedia.
2. Penyedia melengkapi informasi usaha dan menjalani peninjauan.
3. Penyedia terverifikasi membuat penawaran makanan.
4. Pembeli melihat penawaran dan melakukan pemesanan.
5. Penyedia menerima atau menolak pesanan sesuai kondisi.
6. Pesanan yang diterima dapat diproses hingga siap diambil.
7. Setelah pengambilan dan pembayaran dicatat, transaksi dapat diselesaikan.
8. Dashboard menampilkan ringkasan aktivitas transaksi.

## 8. Definisi Metrik Dashboard

### Metrik pembeli
- **Total belanja:** total transaksi yang telah tercatat lunas.
- **Penghematan pembeli:** selisih nilai normal makanan yang tersalurkan dengan total transaksi yang telah lunas.
- **Unit makanan diambil:** jumlah unit dari pesanan yang telah tersalurkan.

### Metrik penyedia
- **Pendapatan diterima:** total transaksi yang berstatus lunas.
- **Unit tersalurkan:** jumlah unit makanan dari pesanan yang telah tersalurkan.
- **Nilai normal tersalurkan:** nilai harga normal makanan yang telah tersalurkan.
- **Penghematan pembeli:** selisih nilai normal makanan dengan nilai transaksi lunas.
- **Penghematan biaya penjual:** belum dihitung oleh aplikasi.

Metrik penghematan pembeli bukan pengukuran biaya produksi atau biaya operasional yang berhasil dihemat penyedia.

## 9. Batasan Fitur

- Aplikasi belum memproses pembayaran melalui payment gateway.
- Pencatatan pembayaran dalam aplikasi bukan bukti transfer atau penerimaan uang secara otomatis.
- Penghematan biaya operasional penyedia belum dihitung.
- Pengujian transaksi yang didokumentasikan menggunakan data simulasi.
- Dampak ekonomi nyata belum dapat disimpulkan hanya dari transaksi pengujian.
- Ketersediaan aplikasi dipengaruhi batas sumber daya dan kebijakan layanan hosting gratis.
- Pengujian aksesibilitas, keyboard, responsivitas, dan performa menyeluruh masih perlu dilengkapi.

## 10. Langkah Pengujian

Dari direktori `sisabaik-api`, jalankan build frontend:

```bash
npm run build
```

Pemeriksaan deployment publik:

```bash
npm run deploy:test -- https://sisabaik-oomp.onrender.com
```

Pemeriksaan database lokal:

```bash
npm run db:check
```

Pengujian autentikasi lokal:

```bash
npm run auth:test
```

Pengujian alur transaksi lokal:

```bash
npm run workflow:test
```

Pengujian API:

```bash
npm run api:test:chapter7
```

Perintah pengujian database dan transaksi harus dijalankan sesuai konfigurasi lingkungan serta kondisi data pengujian. Jangan menjalankan skrip inisialisasi atau migrasi cloud sebagai bagian dari pengujian rutin tanpa memastikan target database.

## 11. Dokumentasi Minggu 12

Bukti pengujian, audit perubahan, log deployment, dan refleksi proyek tersedia pada:

```text
docs/minggu12/
├── audit/
├── hasil-pengujian/
├── log/
└── refleksi.md
```

Jangan menyimpan `.env`, `.env.cloud`, password, token, kredensial demo, atau dump database di repositori.
