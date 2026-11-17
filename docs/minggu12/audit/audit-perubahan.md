# Audit Perubahan SisaBaik
Minggu 12 — 17 November 2026

## 1. Dasar Pemeriksaan
- Branch: feature/fullstack-vue
- Commit dasar: a1037e8
- Perbandingan dilakukan antara working tree dan commit dasar.
- Perubahan lokal belum di-commit.

## 2. Audit Sebelum dan Sesudah

| File | Kondisi Sebelum (a1037e8) | Perubahan Sesudah |
|---|---|---|
| sisabaik-api/src/db/pool.js | Validasi variabel wajib, aturan SSL, dan batas koneksi sudah tersedia. Properti koneksi belum diteruskan secara eksplisit ke Pool. | Menambahkan host, port, database, user, dan password secara eksplisit pada konfigurasi Pool. |
| sisabaik-api/scripts/migrasi-aplikasi.js | Validasi tujuan database, batas transaksi SQL, advisory lock, pemeriksaan tabel dasar, dan pemeriksaan TLS sudah tersedia. | Mengubah pemeriksaan TLS dari query pg_stat_ssl menjadi pemeriksaan stream koneksi PostgreSQL. Perulangan eksekusi SQL juga dirapikan. |
| sisabaik-api/scripts/verifikasi-penyedia.js | Validasi email dan status, transaksi, penguncian baris, serta pembatasan database lokal/cloud sudah tersedia. | Memperbaiki pemisahan klausa query SQL, menggunakan koneksi khusus untuk pemeriksaan database dan TLS, serta merapikan penanganan transaksi dan validasi. |
| sisabaik-api/scripts/cek-penawaran-katalog.js | Belum tersedia pada commit dasar. | Menambahkan skrip pemeriksaan katalog menggunakan SELECT untuk melihat status penawaran, stok, masa berlaku, dan status akun penyedia. |

## 3. Ringkasan Perubahan
- Tiga file yang sudah ada mengalami perubahan.
- Satu skrip pemeriksaan katalog ditambahkan.
- Pengaturan koneksi database kini meneruskan properti koneksi secara eksplisit.
- Pemeriksaan TLS pada migrasi dan peninjauan penyedia menggunakan informasi koneksi PostgreSQL.
- Query peninjauan penyedia diperbaiki agar klausa SQL terpisah dengan benar.
- Skrip pemeriksaan katalog hanya membaca data dan tidak melakukan perubahan database.

## 4. Verifikasi yang Telah Dilakukan
- Pemeriksaan sintaks empat file JavaScript menggunakan node --check berhasil.
- Production build frontend berhasil dengan 55 modul ditransformasi.
- Migrasi cloud sebelumnya berhasil dijalankan.
- Koneksi database Neon berhasil diperiksa.
- Pengujian deployment publik ulang menghasilkan 10 dari 10 pemeriksaan lulus.
- Pengujian transaksi berbayar dan gratis menggunakan data simulasi berhasil.

## 5. Batasan Audit
- Perubahan lokal belum dianggap sebagai bagian dari deployment publik sebelum commit dan deployment diverifikasi.
- Pemeriksaan ini merupakan perbandingan kode terhadap commit dasar, bukan audit keamanan independen.
- Keberhasilan pemeriksaan sintaks dan build tidak menggantikan pengujian seluruh fungsi aplikasi.
