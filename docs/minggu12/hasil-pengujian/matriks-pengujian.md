# Matriks Pengujian SisaBaik
Minggu 12

## A. Pengujian Aktual

| No. | Pengujian | Hasil Aktual | Status |
|---|---|---|---|
| 1 | Health check API publik | Database connected | Lulus |
| 2 | Halaman frontend publik | HTML Vue berhasil dimuat | Lulus |
| 3 | Aset JavaScript dan CSS | Berhasil dimuat | Lulus |
| 4 | Endpoint API tidak dikenal | Menghasilkan 404 | Lulus |
| 5 | Endpoint autentikasi tanpa token | Menghasilkan 401 | Lulus |
| 6 | Endpoint dashboard tanpa token | Menghasilkan 401 | Lulus |
| 7 | Endpoint pesanan tanpa token | Menghasilkan 401 | Lulus |
| 8 | Akses file .env publik | Menghasilkan 404 | Lulus |
| 9 | Akses server.js publik | Menghasilkan 404 | Lulus |
| 10 | Pemeriksaan database cloud | Terhubung ke neondb | Lulus |
| 11 | Production build frontend | 55 modul berhasil ditransformasi | Lulus |
| 12 | Transaksi berbayar | 2 unit selesai, total Rp14.000 | Lulus |
| 13 | Transaksi gratis | 1 unit selesai, total Rp0 | Lulus |
| 14 | Dashboard pembeli dan penyedia | Perubahan metrik sesuai transaksi | Lulus |
| 15 | Pembatasan rute frontend berdasarkan peran | Akun pembeli ditolak dari halaman penyedia | Lulus |

## B. Pengujian yang Belum Memiliki Bukti Formal

| No. | Pengujian | Status |
|---|---|---|
| 1 | Audit keyboard seluruh halaman | Belum diuji formal |
| 2 | Audit aksesibilitas | Belum diuji formal |
| 3 | Pengujian responsivitas seluruh halaman | Belum diuji formal |
| 4 | Pengukuran performa sebelum dan sesudah | Belum diukur |
| 5 | Pengukuran performa cloud secara terpisah | Belum diukur |

## C. Catatan Pengujian

- Deployment test publik menghasilkan 10 dari 10 pemeriksaan lulus.
- Pengujian akses berdasarkan peran membuktikan pembatasan rute frontend.
- Pengujian transaksi menggunakan data simulasi.
- Pembayaran yang dicatat dalam aplikasi tidak membuktikan penerimaan uang sungguhan.
- Penghematan pembeli dihitung dari selisih harga normal dan harga penawaran.
- Penghematan biaya operasional penyedia belum dihitung.
- Pengujian yang belum dilakukan tidak dinyatakan lulus.

## D. Pengujian Ulang Deployment (17 November 2026)
- Percobaan pertama gagal pada /healthz dengan HTTP 503.
- Pemeriksaan manual berikutnya menunjukkan /healthz dan /api/health mengembalikan HTTP 200.
- Pengujian ulang menghasilkan 10 dari 10 pemeriksaan lulus.
- Hasil lengkap tersimpan pada log/deployment-test.txt.
- Skrip menyatakan tidak ada data yang ditulis.
