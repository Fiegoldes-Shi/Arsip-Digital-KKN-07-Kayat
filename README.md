# Arsip Digital KKN Kelompok 7 UKDW

![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/Lisensi-Akademik-lightgrey?style=flat)

Situs web arsip & edukasi digital untuk program **Kuliah Kerja Nyata (KKN) Kelompok 7 Universitas Kristen Duta Wacana (UKDW)**, yang dilaksanakan di Dusun Kayat, Kelurahan Poko, Kecamatan Pringkuku, Kabupaten Pacitan.

Tema utama program ini adalah **sosialisasi dan pendampingan usaha briket arang dari batok kelapa** — mengubah limbah batok kelapa yang melimpah di daerah tersebut menjadi produk briket arang bernilai jual tinggi, sebagai sumber penghasilan baru bagi warga dusun.

## Daftar Isi

- [Tentang Project](#tentang-project)
- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Direktori](#struktur-direktori)
- [Cara Menjalankan](#cara-menjalankan)
- [Halaman Situs](#halaman-situs)
- [Catatan Teknis](#catatan-teknis)
- [Tim Penyusun](#tim-penyusun)
- [Lisensi](#lisensi)

## Tentang Project

Situs ini dibangun sebagai media dokumentasi dan edukasi digital atas seluruh rangkaian program kerja KKN, mulai dari sosialisasi peluang bisnis, perencanaan modal, analisis keuangan, strategi pemasaran digital, hingga desain rumah produksi briket arang batok kelapa.

Dibangun **tanpa framework** (vanilla PHP, HTML, CSS, dan JavaScript), dengan satu dependency eksternal yaitu [SheetJS](https://github.com/SheetJS/sheetjs) (dimuat via CDN) untuk fitur ekspor data ke Excel.

## Fitur Utama

- **Halaman informasi & edukasi** — materi sosialisasi peluang bisnis, strategi permodalan, dan panduan pemasaran digital (Shopee & TikTok Shop) yang disusun dalam komponen akordeon dan tab interaktif.
- **Kalkulator bisnis interaktif** — menghitung Harga Pokok Produksi (HPP), harga jual, margin keuntungan, hingga laporan laba/rugi briket secara real-time, dengan baris input dinamis (1–100 baris) untuk bahan baku, tenaga kerja, penyusutan alat, dan biaya overhead.
- **Riwayat perhitungan** — menyimpan hingga 10 hasil kalkulasi terakhir secara otomatis di browser, lengkap dengan rincian detail setiap input.
- **Ekspor ke Excel** — mengunduh hasil kalkulasi (satu entri atau seluruh riwayat sekaligus, dengan sheet terpisah per entri) dalam format `.xlsx`.
- **Galeri & slider** — dokumentasi visual desain rumah produksi dan denah ruangan.
- **Desain responsif ala iOS/Apple** — tampilan menyesuaikan otomatis antara desktop, tablet, dan mobile, termasuk navigasi, tabel, dan popup yang dioptimalkan untuk masing-masing ukuran layar.
- **Pencarian materi** — kotak pencarian sederhana yang mengarahkan pengunjung ke halaman terkait berdasarkan kata kunci.

## Teknologi yang Digunakan

| Teknologi | Keterangan |
|---|---|
| PHP | Templating halaman & komponen `header`/`footer` yang dapat digunakan kembali |
| HTML5 & CSS3 | Struktur dan styling, dipisah antara tampilan desktop (`style.css`) dan responsif (`style-responsive.css`) |
| JavaScript (Vanilla) | Seluruh logika interaktif — akordeon, tab, slider, kalkulator, dan riwayat |
| [SheetJS](https://github.com/SheetJS/sheetjs) | Ekspor data kalkulator ke file Excel (`.xlsx`) |
| `localStorage` | Penyimpanan riwayat perhitungan kalkulator di sisi browser |

## Struktur Direktori

```
KKN Kelompok 7/
├── index.php             # Halaman Beranda
├── steven.php            # Halaman "Peluang Bisnis"
├── berlian.php           # Halaman "Modal Bisnis"
├── sella.php             # Halaman "Analisis Keuangan" (Kalkulator Interaktif)
├── harry.php             # Halaman "Pemasaran Digital"
├── samahe.php            # Halaman "Rumah Produksi"
├── header.php            # Komponen header & navigasi
├── footer.php            # Komponen footer & pemanggilan script
├── style.css             # Styling tampilan desktop
├── style-responsive.css  # Styling tampilan tablet & mobile
├── script.js             # Seluruh logika interaktif
└── data/                 # Aset gambar, video, dan logo
```

## Cara Menjalankan

Project ini murni PHP tanpa proses build, sehingga dapat dijalankan dengan server PHP standar.

1. Pastikan PHP sudah terpasang (disarankan PHP 8.x), bisa lewat [XAMPP](https://www.apachefriends.org/) atau langsung dari [php.net](https://www.php.net/).
2. Clone repository ini:
   ```bash
   git clone https://github.com/Fiegoldes-Shi/Arsip-Digital-KKN-07-Kayat.git
   cd Arsip-Digital-KKN-07-Kayat
   ```
3. Jalankan server PHP bawaan dari direktori project:
   ```bash
   php -S localhost:8000
   ```
4. Buka `http://localhost:8000` di browser.

> Koneksi internet diperlukan untuk fitur ekspor Excel di halaman kalkulator, karena library SheetJS dimuat dari CDN.

## Halaman Situs

| Halaman | File | Deskripsi |
|---|---|---|
| Beranda | `index.php` | Pengantar program, potensi bisnis briket, dan perbandingan metode produksi |
| Peluang Bisnis | `steven.php` | Value bisnis, potensi pasar, dan struktur tim usaha |
| Modal Bisnis | `berlian.php` | Estimasi kebutuhan modal awal dan sumber-sumber permodalan |
| Analisis Keuangan | `sella.php` | Kalkulator interaktif HPP, harga jual, dan laba/rugi |
| Pemasaran Digital | `harry.php` | Strategi pemasaran online melalui Shopee dan TikTok Shop |
| Rumah Produksi | `samahe.php` | Desain bangunan, zonasi ruang, dan Rencana Anggaran Biaya (RAB) |

## Catatan Teknis

- Seluruh perhitungan kalkulator berjalan **sepenuhnya di sisi klien (browser)** — tidak ada data yang dikirim atau disimpan di server.
- Riwayat perhitungan tersimpan secara lokal per-browser (`localStorage`) dan tidak tersinkron antar perangkat.
- Sebagian angka finansial (modal usaha, RAB konstruksi) bersifat estimasi yang ditetapkan sebagai contoh acuan dalam materi sosialisasi program.

## Tim Penyusun

Disusun oleh mahasiswa KKN Kelompok 7 Universitas Kristen Duta Wacana, penempatan Dusun Kayat, Kelurahan Poko, Kecamatan Pringkuku, Kabupaten Pacitan — Tahun 2025.

## Lisensi

Project ini dibuat untuk kebutuhan dokumentasi dan edukasi program KKN, dan dapat digunakan kembali untuk kebutuhan akademik serupa dengan tetap mencantumkan atribusi kepada tim penyusun.
