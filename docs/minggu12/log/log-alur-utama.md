# Log Alur Utama SisaBaik
Minggu 12 — 17 November 2026

Dokumen ini merupakan ringkasan aktivitas endpoint yang telah teramati.
Identitas pengguna, ID transaksi, alamat IP, token, dan isi permintaan
tidak dicantumkan.

| Alur | Endpoint | Status |
|---|---|---:|
| Login | POST /api/auth/login | 200 |
| Melihat katalog | GET /api/penawaran | 200 |
| Melihat foto penawaran | GET /api/penawaran/[id]/foto | 200 |
| Membuat penawaran | POST /api/penawaran | 201 |
| Melihat penawaran milik penyedia | GET /api/penawaran/milik-saya | 200 |
| Membuat pesanan | POST /api/pesanan | 201 |
| Melihat daftar pesanan | GET /api/pesanan | 200 |
| Melihat detail pesanan | GET /api/pesanan/[id] | 200 |
| Memproses tindakan pesanan | POST /api/pesanan/[id]/aksi | 200 |
| Melihat dashboard | GET /api/dashboard | 200 |

## Catatan
- ID pada endpoint dinamis ditulis sebagai placeholder.
- Tidak ada token, password, email, alamat IP, atau isi permintaan yang dicantumkan.
- Status HTTP berasal dari aktivitas yang telah teramati.
- Dokumen ini merupakan ringkasan log, bukan ekspor log server mentah.
- Log pendaftaran dan perubahan penawaran tidak tersedia sebagai bukti terpisah.
