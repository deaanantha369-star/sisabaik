# Refleksi Proyek SisaBaik
Minggu 12

## 1. Nilai Bisnis
SisaBaik dikembangkan sebagai platform digital yang mempertemukan penyedia makanan berlebih dengan pembeli. Platform ini membantu penyedia menawarkan makanan yang masih layak konsumsi dan memberikan alternatif makanan dengan harga lebih terjangkau kepada pembeli.

## 2. Bukti Transaksi dan Pembayaran
Pengujian transaksi berbayar dilakukan melalui reservasi dua unit makanan dengan harga penawaran Rp7.000 per unit. Total transaksi sebesar Rp14.000. Pesanan diselesaikan setelah penyedia mengonfirmasi pengambilan dan pembayaran dicatat dalam aplikasi sebagai simulasi pembayaran tunai saat pengambilan.

Pengujian makanan gratis dilakukan melalui satu unit penawaran dengan harga Rp0. Setelah pesanan selesai, status pembayaran tercatat sebagai Gratis. Transaksi gratis tidak menambah pendapatan penyedia maupun pengeluaran pembeli.

## 3. Dampak pada Pembeli
Pada transaksi berbayar, pembeli memperoleh penghematan Rp26.000 dibandingkan harga normal. Pada transaksi gratis, pembeli memperoleh penghematan tambahan Rp20.000. Dengan demikian, kedua skenario menghasilkan total penghematan pembeli sebesar Rp46.000 dan tiga unit makanan tersalurkan.

## 4. Dampak pada Penyedia
Dashboard penyedia mencatat tambahan pendapatan Rp14.000 dari transaksi berbayar dan tiga unit makanan tersalurkan dari kedua skenario. Nilai normal makanan yang tersalurkan adalah Rp60.000 untuk transaksi berbayar dan Rp20.000 untuk transaksi gratis.

## 5. Keterbatasan Pengukuran
Penghematan yang ditampilkan merupakan selisih harga normal dengan harga penawaran, bukan pengukuran biaya produksi atau biaya operasional yang berhasil dihemat penyedia. Pengujian menggunakan data transaksi simulasi sehingga belum dapat dianggap sebagai bukti dampak ekonomi nyata di masyarakat.

## 6. Cakupan Akun dan Akses
Pengujian melibatkan akun pembeli dan penyedia. Pembatasan akses halaman penyedia telah diuji menggunakan akun pembeli dan aplikasi menampilkan halaman akses ditolak. Akun uji tambahan untuk dosen dapat dibuat melalui fitur pendaftaran. Kredensial demo, apabila diminta, disampaikan melalui kanal privat.

## 7. Keterbatasan Layanan
Aplikasi bergantung pada ketersediaan layanan hosting dan database cloud. Layanan gratis dapat memiliki batas sumber daya, waktu aktif, serta kemungkinan keterlambatan ketika layanan kembali aktif setelah tidak digunakan.

## 8. Refleksi dan Pengembangan
Pengembangan SisaBaik memberikan pengalaman dalam membangun aplikasi bisnis digital yang mengintegrasikan frontend, backend, database, autentikasi, pengelolaan penawaran, dan transaksi. Pengembangan selanjutnya dapat diarahkan pada penguatan pengujian aksesibilitas, responsivitas, performa, serta pengukuran dampak bisnis berdasarkan transaksi nyata.
