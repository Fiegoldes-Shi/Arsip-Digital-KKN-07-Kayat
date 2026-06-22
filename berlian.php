<?php 
    $pageTitle = "Permodalan Usaha Briket";
    include 'header.php'; 

    // --- Data diperbarui sesuai gambar referensi terbaru ---
    // Bahan
    $bahan_kelapa_1x = 2500000;
    $bahan_tapioka_1x = 500000;
    $total_bahan_1x = $bahan_kelapa_1x + $bahan_tapioka_1x;
    $total_bahan_3x = 9000000;

    // Alat
    $alat_pembakaran = 900000;
    $alat_penggiling = 850000;
    $alat_nampan = 25000;
    $alat_sealer = 300000;
    $alat_pemotong = 550000;
    $total_alat = $alat_pembakaran + $alat_penggiling + $alat_nampan + $alat_sealer + $alat_pemotong;

    // Operasional
    $ops_gaji = 1320000;
    $ops_listrik = 300000;
    $ops_pemasaran = 250000;
    $ops_oli = 15000;
    $ops_kemasan = 450000;
    $total_operasional = $ops_gaji + $ops_listrik + $ops_pemasaran + $ops_oli + $ops_kemasan;

    // Grand Total
    $total_keseluruhan = $total_bahan_3x + $total_alat + $total_operasional;
?>

<div class="card">
    <h2>Permodalan dan Strategi Keuangan Usaha Briket</h2>

    <div class="intro-section">
        <p>
            Batok kelapa selama ini sering dianggap sebagai limbah yang tidak bernilai. Padahal, dengan inovasi dan pengolahan yang tepat, batok kelapa bisa diubah menjadi briket arang yang memiliki permintaan tinggi. Usaha briket tidak hanya membantu mengurangi limbah, tetapi juga membuka peluang bisnis baru yang dapat meningkatkan pendapatan masyarakat.
        </p>

        <h4>Potensi Pasar Briket Batok Kelapa</h4>
        <p>
            Briket kelapa banyak digunakan oleh rumah tangga sebagai bahan bakar alternatif yang lebih bersih dan ekonomis. Selain itu, briket kelapa juga diminati oleh beberapa negara, menjadikannya komoditas ekspor yang potensial.
        </p>

        <div class="key-points-box">
            <h4>Poin Penting</h4>
            <ul>
                <li>Usaha briket adalah peluang menjanjikan dengan modal terjangkau, bahan baku mudah didapat, dan pasar yang luas.</li>
                <li>Briket batok kelapa ramah lingkungan, bernilai ekonomi tinggi, dan memiliki daya bakar lama tanpa asap berlebih.</li>
                <li>Usaha ini dapat meningkatkan pendapatan masyarakat, menciptakan lapangan kerja, dan mendorong ekonomi lokal.</li>
                <li>Keberlanjutan bisnis bergantung pada perencanaan modal yang matang, pengelolaan efisien, dan pemasaran inovatif.</li>
            </ul>
        </div>
    </div>

    <div class="accordion-container">

        <div class="accordion-item">
            <button class="accordion-header">
                <span class="accordion-title">Rincian Estimasi Modal Usaha</span>
                <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content">
                <p>Lahan atau tempat usaha diperlukan untuk semua proses produksi. Berikut adalah rincian estimasi modal awal berdasarkan data terbaru:</p>
                
                <table class="rincian-tabel">
                    <caption>Estimasi Kebutuhan Modal Awal Produksi</caption>
                    <thead>
                        <tr>
                            <th>Keterangan</th>
                            <th class="text-center">Jumlah/Satuan</th>
                            <th class="text-right">Harga Satuan (Rp)</th>
                            <th class="text-right">Sub-total (Rp)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="sub-header">
                            <td colspan="4">Bahan (Perhitungan 1 Bulan = 3x Produksi)</td>
                        </tr>
                        <tr>
                            <td data-label="Keterangan">Batok Kelapa</td>
                            <td class="text-center" data-label="Jumlah/Satuan">500 kg</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)"><?= number_format(5000, 0, ',', '.') ?></td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($bahan_kelapa_1x, 0, ',', '.') ?></td>
                        </tr>
                        <tr>
                            <td data-label="Keterangan">Tepung Tapioka</td>
                            <td class="text-center" data-label="Jumlah/Satuan">50 kg</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)"><?= number_format(10000, 0, ',', '.') ?></td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($bahan_tapioka_1x, 0, ',', '.') ?></td>
                        </tr>
                        <tr class="total-row">
                            <td colspan="3">Total Bahan (untuk 1x produksi)</td>
                            <td class="text-right"><?= number_format($total_bahan_1x, 0, ',', '.') ?></td>
                        </tr>
                         <tr class="total-row">
                            <td colspan="3">Total Bahan (untuk 3x produksi / 1 bulan)</td>
                            <td class="text-right"><?= number_format($total_bahan_3x, 0, ',', '.') ?></td>
                        </tr>
                        
                        <tr class="sub-header">
                            <td colspan="4">Alat-alat (Investasi Awal)</td>
                        </tr>
                        <tr>
                            <td data-label="Keterangan">Mesin Pembakaran</td>
                            <td class="text-center" data-label="Jumlah/Satuan">2</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)"><?= number_format(450000, 0, ',', '.') ?></td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($alat_pembakaran, 0, ',', '.') ?></td>
                        </tr>
                         <tr>
                            <td data-label="Keterangan">Mesin Penggiling & Cetak</td>
                            <td class="text-center" data-label="Jumlah/Satuan">1</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)"><?= number_format(850000, 0, ',', '.') ?></td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($alat_penggiling, 0, ',', '.') ?></td>
                        </tr>
                         <tr>
                            <td data-label="Keterangan">Nampan Penjemuran</td>
                            <td class="text-center" data-label="Jumlah/Satuan">1</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)"><?= number_format(25000, 0, ',', '.') ?></td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($alat_nampan, 0, ',', '.') ?></td>
                        </tr>
                         <tr>
                            <td data-label="Keterangan">Alat Vacuum Sealer</td>
                            <td class="text-center" data-label="Jumlah/Satuan">1</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)"><?= number_format(300000, 0, ',', '.') ?></td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($alat_sealer, 0, ',', '.') ?></td>
                        </tr>
                         <tr>
                            <td data-label="Keterangan">Mesin Pemotong</td>
                            <td class="text-center" data-label="Jumlah/Satuan">1</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)"><?= number_format(550000, 0, ',', '.') ?></td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($alat_pemotong, 0, ',', '.') ?></td>
                        </tr>
                        <tr class="total-row">
                            <td colspan="3">Total Alat</td>
                            <td class="text-right"><?= number_format($total_alat, 0, ',', '.') ?></td>
                        </tr>

                        <tr class="sub-header">
                            <td colspan="4">Biaya Operasional (1 Bulan)</td>
                        </tr>
                        <tr>
                            <td data-label="Keterangan">Gaji karyawan</td>
                            <td class="text-center" data-label="Jumlah/Satuan">7 orang</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)">-</td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($ops_gaji, 0, ',', '.') ?></td>
                        </tr>
                        <tr>
                            <td data-label="Keterangan">Listrik, air</td>
                            <td class="text-center" data-label="Jumlah/Satuan">1 bulan</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)">-</td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($ops_listrik, 0, ',', '.') ?></td>
                        </tr>
                        <tr>
                            <td data-label="Keterangan">Pemasaran</td>
                            <td class="text-center" data-label="Jumlah/Satuan">1 bulan</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)">-</td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($ops_pemasaran, 0, ',', '.') ?></td>
                        </tr>
                        <tr>
                            <td data-label="Keterangan">Oli bekas</td>
                            <td class="text-center" data-label="Jumlah/Satuan">3 liter</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)">-</td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($ops_oli, 0, ',', '.') ?></td>
                        </tr>
                        <tr>
                            <td data-label="Keterangan">Kemasan</td>
                            <td class="text-center" data-label="Jumlah/Satuan">300 pcs</td>
                            <td class="text-right" data-label="Harga Satuan (Rp)">-</td>
                            <td class="text-right" data-label="Sub-total (Rp)"><?= number_format($ops_kemasan, 0, ',', '.') ?></td>
                        </tr>
                        <tr class="total-row">
                            <td colspan="3">Total Operasional Bulanan</td>
                            <td class="text-right"><?= number_format($total_operasional, 0, ',', '.') ?></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="grand-total">
                            <td colspan="3">TOTAL KESELURUHAN MODAL DALAM 1 BULAN AWAL</td>
                            <td class="text-right"><?= number_format($total_keseluruhan, 0, ',', '.') ?></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <div class="accordion-item">
            <button class="accordion-header">
                <span class="accordion-title">Sumber-sumber Permodalan</span>
                <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content">
                <ul>
                    <li><strong>Modal Pribadi:</strong> Berasal dari tabungan sendiri. Paling sederhana dan bebas bunga, namun terbatas.</li>
                    <li><strong>Koperasi:</strong> Bergabung dengan koperasi untuk akses modal yang lebih mudah dan murah.</li>
                    <li><strong>Investor:</strong> Diperoleh dari penanam dana dengan sistem bagi hasil.</li>
                    <li><strong>Pinjaman Bank:</strong> Sumber modal besar yang biasanya memerlukan jaminan dan bunga.</li>
                </ul>
            </div>
        </div>
        
        <div class="accordion-item">
            <button class="accordion-header">
                <span class="accordion-title">Tips Mengelola Modal</span>
                <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content">
                <ol>
                    <li><strong>Susun Anggaran Detail:</strong> Rencanakan kebutuhan investasi dan operasional agar penggunaan modal terkontrol.</li>
                    <li><strong>Prioritaskan Pengeluaran Utama:</strong> Utamakan pembelian mesin dan bahan baku.</li>
                    <li><strong>Kelola Stok Secara Efisien:</strong> Jaga pasokan bahan baku agar produksi tidak terhenti.</li>
                    <li><strong>Alokasikan Dana Cadangan:</strong> Siapkan dana untuk kebutuhan tak terduga seperti perbaikan mesin.</li>
                    <li><strong>Manfaatkan Kolaborasi:</strong> Bergabung dengan koperasi untuk menggabungkan modal dan mengurangi risiko.</li>
                </ol>
            </div>
        </div>

        <div class="accordion-item">
            <button class="accordion-header">
                <span class="accordion-title">Pentingnya Pencatatan Keuangan</span>
                <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content">
                <ul>
                    <li><strong>Memantau Arus Kas:</strong> Catat setiap pemasukan dan pengeluaran untuk memantau kondisi keuangan.</li>
                    <li><strong>Evaluasi Berkala:</strong> Lakukan evaluasi bulanan untuk mengetahui apakah usaha berjalan sesuai rencana.</li>
                    <li><strong>Dasar Pengambilan Keputusan:</strong> Gunakan hasil evaluasi untuk mengambil keputusan bisnis yang tepat.</li>
                    <li><strong>Syarat Pinjaman & Investasi:</strong> Pencatatan yang baik menunjukkan profesionalisme usaha.</li>
                </ul>
            </div>
        </div>

    </div>
</div>

<?php include 'footer.php'; ?>