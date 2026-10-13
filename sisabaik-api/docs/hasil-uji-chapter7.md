# Hasil Pengujian Chapter 7 — SisaBaik API

## 1. Lingkungan Pengujian

- Aplikasi: SisaBaik API
- Teknologi: Node.js, Express, dan PostgreSQL
- Database: `sisabaik_dev`
- Branch Git: `feature/rest-postgresql`

## 2. Hasil Pengujian

| No. | Pengujian | Hasil |
|---|---|---|
| 1 | Pemeriksaan koneksi database menggunakan `npm run db:check -- 0` | Berhasil |
| 2 | Pemeriksaan endpoint `/api/health` | Berhasil |
| 3 | Pengujian konkurensi pemesanan saat stok terbatas | Berhasil; satu permintaan berhasil dan satu ditolak, dengan stok akhir 0 |

## 3. Bukti Persistensi dan Snapshot Harga

### 3.1 Data Penawaran Hasil Pengujian

Query yang digunakan:

```sql
SELECT id, nama, stok, status
FROM penawaran
WHERE nama LIKE 'Uji C7 %'
ORDER BY id DESC;
```

Hasil pengujian menunjukkan bahwa data penawaran hasil pengujian tersimpan di database PostgreSQL.

Penawaran dengan ID `21` memiliki:

- stok: `0`
- status: `habis`

Penawaran dengan ID `23` merupakan penawaran yang digunakan pada pengujian konkurensi dan dipertahankan sebagai bukti pengujian.

### 3.2 Data Pesanan dan Snapshot Harga

Query yang digunakan:

```sql
SELECT ps.id, ps.status, ps.total_transaksi,
       ps.nilai_stok_terselamatkan, p.nama,
       dp.kuantitas, dp.harga_penawaran_satuan, dp.subtotal
FROM pesanan ps
JOIN detail_pesanan dp ON dp.pesanan_id = ps.id
JOIN penawaran p ON p.id = dp.penawaran_id
WHERE p.nama LIKE 'Uji C7 %'
ORDER BY ps.id DESC, p.id;
```

Hasil pengujian menunjukkan:

- pesanan ID `5`
- status `menunggu-konfirmasi`
- total transaksi `10000`
- nilai stok terselamatkan `20000`
- kuantitas `2`
- harga penawaran satuan `5000`
- subtotal `10000`

Setelah harga penawaran diubah menjadi `8000`, detail pesanan lama tetap menyimpan harga satuan `5000` dan total transaksi tetap `10000`.

Hal ini menunjukkan bahwa harga pada detail pesanan disimpan sebagai snapshot pada saat transaksi.

### 3.3 Persistensi Setelah Restart Server

Server dihentikan dan dijalankan kembali menggunakan:

```bash
npm run dev
```

Setelah server aktif kembali, endpoint berikut diuji:

```text
GET /api/pesanan/5
```

Data pesanan ID `5` tetap dapat diakses dengan data yang sama. Hal ini menunjukkan bahwa data transaksi tetap tersimpan setelah server direstart dan tidak bergantung pada memory aplikasi.

### 3.4 Rollback Transaksi

Pengujian dilakukan menggunakan penawaran dengan stok `2` dan permintaan kuantitas `3`.

Hasil:

```text
409 Conflict
```

Setelah request gagal, stok penawaran tetap `2` dan status tetap `aktif`. Tidak terdapat pesanan baru akibat request yang gagal.

Hasil tersebut menunjukkan bahwa perubahan dalam transaksi dibatalkan ketika validasi stok gagal.

## 4. Pengujian DELETE dengan Riwayat

Penghapusan penawaran yang telah memiliki riwayat pesanan diuji menggunakan:

```js
fetch("/api/penawaran/21", {
  method: "DELETE"
}).then(async (r) => {
  console.log(
    r.status,
    r.status === 204 ? "No Content" : await r.json()
  );
});
```

Hasil:

```text
409 Conflict
```

Setelah penghapusan ditolak, pesanan ID `5` tetap dapat diakses melalui:

```text
GET /api/pesanan/5
```

Data header dan detail pesanan tetap tersedia.

## 5. Kesimpulan

Berdasarkan pengujian yang telah dilakukan, koneksi database, pemeriksaan kesehatan aplikasi, dan pengujian konkurensi pemesanan telah berhasil dijalankan sesuai hasil yang tercatat.

Dokumentasi endpoint tersedia pada `docs/API.md`.
