# SisaBaik

SisaBaik adalah proyek pada mata kuliah Pengembangan Web yang dirancang untuk membantu penyedia memulihkan nilai stok makanan berlebih melalui penjualan dengan harga khusus atau penyaluran, sekaligus membantu masyarakat memperoleh makanan yang lebih terjangkau dan mengurangi limbah pangan.

## Chapter 7 — REST API

Pada Chapter 7, SisaBaik dikembangkan menjadi REST API yang terhubung dengan PostgreSQL.

API menyediakan pengelolaan data penawaran dan pesanan, validasi request, pagination, filter, transaksi database, rollback, persistensi data, snapshot harga, serta pengujian konkurensi pada stok.

## Prasyarat

Sebelum menjalankan aplikasi, pastikan:

- Node.js versi 22 atau lebih baru sudah terpasang.
- PostgreSQL sudah aktif.
- Database `sisabaik_dev` dari Chapter 6 sudah tersedia.
- Konfigurasi database lokal tersedia pada file `.env`.

File `.env` digunakan untuk konfigurasi lokal dan tidak dimasukkan ke dalam repository.

Contoh konfigurasi tersedia pada:

```text
.env.example

PORT=3000
PGHOST=localhost
PGPORT=5432
PGDATABASE=sisabaik_dev
PGUSER=postgres
PGPASSWORD=GANTI_DENGAN_PASSWORD_LOKAL
## Chapter 9 - Membangun Antarmuka dengan Vue

Pada Chapter 9, SisaBaik dikembangkan dengan antarmuka berbasis Vue 3 menggunakan Composition API dan Single File Components (SFC).

### Menjalankan Frontend

Masuk ke folder frontend:

    cd frontend

Install dependency:

    npm install

Atau menggunakan dependency yang terkunci:

    npm ci

Jalankan development server:

    npm run dev

Frontend dapat diakses melalui:

    http://127.0.0.1:5173/

### Production Build dan Preview

Untuk melakukan production build:

    npm run build

Hasil build berada pada folder frontend/dist.

Untuk menjalankan hasil production build:

    npm run preview

Preview dapat diakses melalui:

    http://127.0.0.1:4173/

### Implementasi Antarmuka

Chapter 9 menggunakan Vue 3 dengan Composition API. Implementasi menggunakan ref untuk state, computed untuk data turunan dan perhitungan, props untuk mengirim data dari parent ke child component, serta emits untuk mengirim perubahan dari child component ke parent.

Antarmuka dibagi menjadi beberapa Single File Components, termasuk kartu penawaran, filter penawaran, form penawaran, ikon, dan komponen utama aplikasi.

### Data Latihan

Data penawaran pada Chapter 9 menggunakan fixture atau data latihan yang disimpan di dalam aplikasi (in-memory). Data pada chapter ini tidak mengambil data dari API atau PostgreSQL.

Penambahan penawaran hanya tersimpan selama aplikasi berjalan. Ketika halaman di-refresh, data kembali ke kondisi awal.

### Asset

Logo dan ilustrasi kategori makanan menggunakan asset SVG lokal yang berada pada folder frontend/src/assets.

### Catatan Integrasi

Chapter 9 berfokus pada pembangunan antarmuka Vue dan belum melakukan pemanggilan API backend. Integrasi dengan REST API dari chapter sebelumnya dapat dilakukan pada tahap pengembangan berikutnya.
