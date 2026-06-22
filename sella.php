<?php
$pageTitle = "Kalkulator Analisis Keuangan";
include 'header.php';

?>

<div class="card">
    <h2>Kalkulator Bisnis Briket: Harga Pokok & Laba Rugi</h2>
    <p>
        Gunakan kalkulator ini untuk mendapatkan rincian biaya produksi, menentukan harga pokok, dan melihat potensi keuntungan usaha Anda. Total per bagian akan terhitung otomatis.
    </p>

    <form class="dynamic-calculator-form" action="sella.php#hasil-akhir" method="post" novalidate>
        
        <fieldset>
            <legend>1. Biaya Bahan Baku (per 1x Produksi)</legend>
            <div class="dynamic-rows-control">
                <label for="bahan-rows">Jumlah jenis bahan baku:</label>
                <div class="row-stepper">
                    <button type="button" class="row-stepper-btn" data-step="-1" data-target-input="bahan-rows" aria-label="Kurangi baris">&minus;</button>
                    <input type="number" id="bahan-rows" class="row-selector" data-target="bahan-baku-rows" min="1" max="100" value="1">
                    <button type="button" class="row-stepper-btn" data-step="1" data-target-input="bahan-rows" aria-label="Tambah baris">+</button>
                </div>
            </div>
            <div class="calc-table-wrapper">
            <table class="calc-table">
                <thead>
                    <tr>
                        <th>Nama Bahan</th>
                        <th class="text-center">Jumlah</th>
                        <th class="text-right">Harga Satuan (Rp)</th>
                        <th class="text-right">Sub-total (Rp)</th>
                    </tr>
                </thead>
                <tbody id="bahan-baku-rows" data-row-name="bahan_baku"></tbody>
                <tfoot>
                    <tr class="total-row">
                        <td colspan="3">Total Biaya Bahan Baku (1x Produksi)</td>
                        <td class="text-right" id="total-bahan-baku">Rp 0</td>
                        <input type="hidden" id="input-total-bahan-baku">
                    </tr>
                </tfoot>
            </table>
            </div>
        </fieldset>

        <fieldset>
            <legend>2. Biaya Tenaga Kerja Langsung (per 1x Produksi)</legend>
            <div class="dynamic-rows-control">
                <label for="tk-rows">Jumlah kelompok tenaga kerja:</label>
                <div class="row-stepper">
                    <button type="button" class="row-stepper-btn" data-step="-1" data-target-input="tk-rows" aria-label="Kurangi baris">&minus;</button>
                    <input type="number" id="tk-rows" class="row-selector" data-target="tenaga-kerja-rows" min="1" max="100" value="1">
                    <button type="button" class="row-stepper-btn" data-step="1" data-target-input="tk-rows" aria-label="Tambah baris">+</button>
                </div>
            </div>
            <div class="calc-table-wrapper">
            <table class="calc-table">
                <thead>
                    <tr>
                        <th>Posisi</th>
                        <th class="text-center">Jml Orang</th>
                        <th class="text-center">Jam Kerja</th>
                        <th class="text-right">Upah/Jam (Rp)</th>
                        <th class="text-right">Total Gaji/Hari (Rp)</th>
                    </tr>
                </thead>
                <tbody id="tenaga-kerja-rows" data-row-name="tenaga_kerja"></tbody>
                <tfoot>
                     <tr class="total-row">
                        <td colspan="4">Total Biaya Tenaga Kerja (1x Produksi)</td>
                        <td class="text-right" id="total-tenaga-kerja">Rp 0</td>
                        <input type="hidden" id="input-total-tenaga-kerja">
                    </tr>
                </tfoot>
            </table>
            </div>
        </fieldset>

        <fieldset>
            <legend>3. Biaya Penyusutan Alat (per Bulan)</legend>
            <div class="dynamic-rows-control">
                <label for="penyusutan-rows">Jumlah jenis alat yang disusutkan:</label>
                <div class="row-stepper">
                    <button type="button" class="row-stepper-btn" data-step="-1" data-target-input="penyusutan-rows" aria-label="Kurangi baris">&minus;</button>
                    <input type="number" id="penyusutan-rows" class="row-selector" data-target="penyusutan-rows-container" min="1" max="100" value="1">
                    <button type="button" class="row-stepper-btn" data-step="1" data-target-input="penyusutan-rows" aria-label="Tambah baris">+</button>
                </div>
            </div>
            <div class="calc-table-wrapper">
            <table class="calc-table">
                <thead>
                    <tr>
                        <th>Nama Alat</th>
                        <th class="text-center">Jumlah</th>
                        <th class="text-right">Harga Beli (Rp)</th>
                        <th class="text-center">Masa Pakai (Bulan)</th>
                        <th class="text-right">Biaya Penyusutan/Bulan (Rp)</th>
                    </tr>
                </thead>
                <tbody id="penyusutan-rows-container" data-row-name="penyusutan"></tbody>
                <tfoot>
                    <tr class="total-row">
                        <td colspan="4">Total Biaya Penyusutan per Bulan</td>
                        <td class="text-right" id="total-penyusutan">Rp 0</td>
                        <input type="hidden" id="input-total-penyusutan">
                    </tr>
                </tfoot>
            </table>
            </div>
        </fieldset>

        <fieldset>
            <legend>4. Biaya Overhead Produksi (per Bulan)</legend>
             <div class="dynamic-rows-control">
                <label for="overhead-rows">Jumlah jenis biaya overhead lain:</label>
                <div class="row-stepper">
                    <button type="button" class="row-stepper-btn" data-step="-1" data-target-input="overhead-rows" aria-label="Kurangi baris">&minus;</button>
                    <input type="number" id="overhead-rows" class="row-selector" data-target="overhead-rows-container" min="1" max="100" value="1">
                    <button type="button" class="row-stepper-btn" data-step="1" data-target-input="overhead-rows" aria-label="Tambah baris">+</button>
                </div>
            </div>
            <div class="calc-table-wrapper">
            <table class="calc-table">
                <thead>
                    <tr>
                        <th>Keterangan Biaya</th>
                        <th class="text-center">Jumlah</th>
                        <th class="text-right">Harga Satuan (Rp)</th>
                        <th class="text-right">Sub-total (Rp)</th>
                    </tr>
                </thead>
                <tbody id="overhead-rows-container" data-row-name="overhead"></tbody>
                <tfoot>
                    <tr class="summary-row">
                        <td colspan="3">Sub-total dari Biaya Penyusutan</td>
                        <td class="text-right" id="overhead-penyusutan-subtotal">Rp 0</td>
                    </tr>
                    <tr class="total-row">
                        <td colspan="3">Total Biaya Overhead</td>
                        <td class="text-right" id="total-overhead">Rp 0</td>
                        <input type="hidden" name="total_overhead" id="input-total-overhead">
                    </tr>
                </tfoot>
            </table>
            </div>
        </fieldset>

        <fieldset class="hpp-fieldset">
            <legend>5. Perhitungan Harga Pokok Produksi (HPP)</legend>
            <div class="form-row">
                 <div class="form-group">
                    <label for="produksi-per-bulan">Total Produksi per Bulan (kali)</label>
                    <input type="text" inputmode="numeric" class="input-rupiah hpp-input" id="produksi-per-bulan" value="3" placeholder="Contoh: 3">
                </div>
                <div class="form-group">
                    <label for="hasil-produksi-unit">Hasil Produksi per Proses (Unit)</label>
                    <input type="text" inputmode="numeric" class="input-rupiah hpp-input" id="hasil-produksi-unit" placeholder="Contoh: 1000">
                </div>
            </div>
            <table class="calc-table">
                <tbody id="hpp-summary">
                    <tr class="summary-row">
                        <td>Total Biaya Bahan Baku (per bulan)</td>
                        <td class="text-right" id="hpp-bahan-baku">Rp 0</td>
                    </tr>
                    <tr class="summary-row">
                        <td>Total Biaya Tenaga Kerja (per bulan)</td>
                        <td class="text-right" id="hpp-tenaga-kerja">Rp 0</td>
                    </tr>
                     <tr class="summary-row">
                        <td>Total Biaya Overhead (per bulan)</td>
                        <td class="text-right" id="hpp-overhead">Rp 0</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td>Total Harga Pokok Produksi (HPP) per Bulan</td>
                        <td class="text-right" id="total-hpp">Rp 0</td>
                        <input type="hidden" name="total_hpp" id="input-total-hpp">
                    </tr>
                </tfoot>
            </table>
        </fieldset>

        <fieldset>
            <legend>6. Analisis Harga & Keuntungan</legend>
            <div class="form-row">
                <div class="form-group">
                    <label for="harga-jual-unit">Harga Jual per Unit (Rp)</label>
                    <input type="text" inputmode="numeric" class="input-rupiah pricing-input" id="harga-jual-unit" placeholder="Contoh: 1.500">
                </div>
                <div class="form-group">
                    <label for="unit-per-kemasan">Jumlah Unit per Kemasan</label>
                    <input type="text" inputmode="numeric" class="input-rupiah pricing-input" id="unit-per-kemasan" placeholder="Contoh: 10">
                </div>
            </div>
            <table class="calc-table pricing-results">
                <tbody>
                    <tr>
                        <td>Jumlah Unit Produksi per Bulan</td>
                        <td class="text-right" id="unit-total-bulan">0</td>
                    </tr>
                    <tr>
                        <td>Harga Pokok Produksi per Unit</td>
                        <td class="text-right" id="hpp-per-unit-display">Rp 0</td>
                    </tr>
                    <tr>
                        <td>Harga Pokok per Kemasan</td>
                        <td class="text-right" id="hpp-per-kemasan">Rp 0</td>
                    </tr>
                    <tr>
                        <td>Harga Jual per Kemasan</td>
                        <td class="text-right" id="hargajual-per-kemasan">Rp 0</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="grand-total">
                        <td>Tingkat Keuntungan (Margin)</td>
                        <td class="text-right" id="tingkat-keuntungan">0%</td>
                    </tr>
                </tfoot>
            </table>
        </fieldset>
        
        <fieldset>
            <legend>7. Beban Pemasaran (per Bulan)</legend>
             <div class="form-row">
                <div class="form-group">
                    <label for="beban_pemasaran">Total Biaya Pemasaran (Rp)</label>
                    <input type="text" inputmode="numeric" class="input-rupiah" id="beban_pemasaran" name="beban_pemasaran" placeholder="Contoh: 250.000">
                </div>
            </div>
        </fieldset>
        
        <input type="hidden" name="total_pendapatan_hidden" id="input-total-pendapatan">
        <div class="form-actions">
            <input type="submit" value="Lihat Laporan Laba Rugi Akhir">
            <button type="button" id="show-history-btn" class="history-show-btn">Lihat Riwayat Perhitungan</button>
        </div>
    </form>

    <div id="popup-history" class="popup-overlay">
        <div class="popup-content popup-content-wide">
            <button id="close-history-btn" class="popup-close">&times;</button>
            <div class="history-header">
                <h2>Riwayat Perhitungan</h2>
                <div class="history-header-actions">
                    <button type="button" id="download-all-history-btn" class="history-download-btn">Download Semua (Excel)</button>
                    <button type="button" id="clear-history-btn" class="history-clear-btn">Hapus Semua</button>
                </div>
            </div>
            <p class="history-empty-text" id="history-empty-text">Belum ada riwayat perhitungan. Hasil kalkulasi Anda akan tersimpan otomatis di sini (maksimal 10 riwayat terakhir, terbaru di atas).</p>
            <div id="history-list" class="history-list"></div>
        </div>
    </div>

    <div id="popup-detail" class="popup-overlay">
        <div class="popup-content popup-content-wide">
            <button id="close-detail-btn" class="popup-close">&times;</button>
            <h2>Detail Perhitungan</h2>
            <div id="detail-body" class="detail-body"></div>
        </div>
    </div>

    <div id="popup-hasil" class="popup-overlay">
        <div class="popup-content">
            <button id="close-popup-btn" class="popup-close">&times;</button>
            <h2>Hasil Akhir: Laporan Laba Rugi</h2>
            
            <div class="result-section">
                <div class="result-item">
                    <span>Total Penjualan</span>
                    <span class="result-value income" id="popup-total-penjualan">Rp 0</span>
                </div>
                <div class="result-item">
                    <span>Total Harga Pokok Produksi (HPP)</span>
                    <span class="result-value" id="popup-total-hpp">Rp 0</span>
                </div>
                <hr>
                <div class="result-item total">
                    <span>Laba Rugi Kotor</span>
                    <span class="result-value" id="popup-laba-kotor">Rp 0</span>
                </div>
            </div>

            <div class="result-section">
                 <div class="result-item">
                    <span>Beban Pemasaran</span>
                    <span class="result-value" id="popup-beban-pemasaran">Rp 0</span>
                </div>
            </div>

            <div class="result-section summary">
                <h4>Laba / Rugi Bersih</h4>
                <div class="result-item">
                    <span class="result-value" id="popup-laba-bersih">Rp 0</span>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>