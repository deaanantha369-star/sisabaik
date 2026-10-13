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
