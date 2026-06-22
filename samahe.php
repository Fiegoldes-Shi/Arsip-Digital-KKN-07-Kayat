<?php 
    $pageTitle = "Desain Rumah Produksi";
    include 'header.php'; 
?>

<div class="card">
    <h2>Desain Rumah Produksi Olahan Briket Arang Kelapa</h2>

    <video controls autoplay muted loop>
        <source src="data/video.mp4" type="video/mp4">
        Browser Anda tidak mendukung tag video.
    </video>

    <div class="intro-section">
        <h4>Deskripsi Proyek</h4>
        <p>
            Dusun Kayat memiliki potensi alam yang sangat besar yaitu pohon kelapa, namun pemanfaatannya belum maksimal. Batok kelapa seringkali hanya dijual dengan nilai kecil. Program ini berupaya mengubah limbah batok kelapa menjadi briket arang berkualitas yang memiliki nilai jual lebih tinggi. Untuk mendukung proses tersebut, diperlukan sebuah rumah produksi yang menampung seluruh kegiatan pengolahan hingga produk siap dipasarkan.
        </p>
    </div>

    <h4>Desain Rumah Produksi</h4>
    <div class="slider-container">
        <div class="slider-wrapper">
            <div class="slide">
                <img src="data/rumah1.jpg" alt="rumah 1">
            </div>
            <div class="slide">
                <img src="data/rumah2.jpg" alt="rumah 2">
            </div>
            <div class="slide">
                <img src="data/rumah3.jpg" alt="rumah 3">
            </div>
            <div class="slide">
                <img src="data/rumah4.jpg" alt="rumah 4">
            </div>
        </div>
        <button class="slider-btn prev-btn" aria-label="Gambar Sebelumnya">&#10094;</button>
        <button class="slider-btn next-btn" aria-label="Gambar Berikutnya">&#10095;</button>
        <div class="pagination-dots"></div>
    </div>

    <hr class="calc-divider">

    <div class="accordion-container">

        <div class="accordion-item">
            <button class="accordion-header">
                <span class="accordion-title">Zonasi & Kebutuhan Ruang</span>
                <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content">
                <p>Pembagian area kerja dirancang untuk alur produksi yang efisien dan aman, memisahkan area basah dan kering.</p>
                <figure class="figure-container">
                    <img src="data/zonasi.jpg" alt="Visualisasi Zonasi Ruang">
                    <figcaption>Pembagian Zona Produksi</figcaption>
                </figure>
                <ul>
                    <li><strong>Zona Outdoor:</strong> Area untuk pembakaran tempurung kelapa dan pengeringan awal bahan.</li>
                    <li><strong>Zona Semi-outdoor:</strong> Digunakan sebagai area penghalusan arang dan sortir serbuk.</li>
                    <li><strong>Zona Indoor:</strong> Area bersih untuk pencampuran, pencetakan, pengemasan, dan penyimpanan produk.</li>
                </ul>
            </div>
        </div>

        <div class="accordion-item">
            <button class="accordion-header">
                <span class="accordion-title">Alur Aktivitas Produksi</span>
                <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content">
                <ol>
                    <li><strong>Pembakaran:</strong> Tempurung kelapa dibakar dalam drum untuk menjadi arang.</li>
                    <li><strong>Penghalusan:</strong> Arang dihaluskan menjadi serbuk.</li>
                    <li><strong>Pencampuran:</strong> Serbuk arang dicampur dengan perekat tapioka.</li>
                    <li><strong>Pencetakan:</strong> Adonan dipadatkan menggunakan mesin cetak.</li>
                    <li><strong>Pengeringan & Pengemasan:</strong> Briket dikeringkan lalu dikemas.</li>
                </ol>
            </div>
        </div>
        
        <div class="accordion-item">
            <button class="accordion-header">
                <span class="accordion-title">Gambar Kerja & Denah Ruangan</span>
                <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content">
                <p>Berikut adalah denah dan potongan bangunan sebagai acuan konstruksi.</p>
                <div class="gallery-container two-cols">
                    <figure class="figure-container">
                        <img src="data/denah.jpg" alt="Denah Lantai Rumah Produksi">
                        <figcaption>Denah Lantai</figcaption>
                    </figure>
                    <figure class="figure-container">
                        <img src="data/denah1.jpg" alt="Potongan Bangunan">
                        <figcaption>Gambar Potongan</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>

    <hr class="calc-divider">

    <h4>Rencana Anggaran Biaya (RAB) Konstruksi</h4>
    <p>Berikut adalah estimasi biaya yang diperlukan untuk pembangunan fisik rumah produksi. Harga bersifat estimasi dan dapat berubah sesuai kondisi pasar.</p>
    <table class="rab-table">
        <thead>
            <tr>
                <th>No</th>
                <th>Uraian Pekerjaan</th>
                <th>Volume</th>
                <th class="text-right">Harga Satuan (Rp)</th>
                <th class="text-right">Jumlah (Rp)</th>
            </tr>
        </thead>
        <tbody>
            <tr> <td data-label="No">1</td> <td data-label="Uraian Pekerjaan">Pekerjaan Persiapan</td> <td data-label="Volume">1 ls</td> <td class="text-right" data-label="Harga Satuan (Rp)">3,000,000</td> <td class="text-right" data-label="Jumlah (Rp)">3,000,000</td> </tr>
            <tr> <td data-label="No">2</td> <td data-label="Uraian Pekerjaan">Galian dan Pondasi</td> <td data-label="Volume">10 m³</td> <td class="text-right" data-label="Harga Satuan (Rp)">350,000</td> <td class="text-right" data-label="Jumlah (Rp)">3,500,000</td> </tr>
            <tr> <td data-label="No">3</td> <td data-label="Uraian Pekerjaan">Sloof dan Struktur Beton</td> <td data-label="Volume">3 m³</td> <td class="text-right" data-label="Harga Satuan (Rp)">1,500,000</td> <td class="text-right" data-label="Jumlah (Rp)">4,500,000</td> </tr>
            <tr> <td data-label="No">4</td> <td data-label="Uraian Pekerjaan">Dinding bata + plester + aci</td> <td data-label="Volume">90 m²</td> <td class="text-right" data-label="Harga Satuan (Rp)">120,000</td> <td class="text-right" data-label="Jumlah (Rp)">10,800,000</td> </tr>
            <tr> <td data-label="No">5</td> <td data-label="Uraian Pekerjaan">Lantai Keramik</td> <td data-label="Volume">42 m²</td> <td class="text-right" data-label="Harga Satuan (Rp)">120,000</td> <td class="text-right" data-label="Jumlah (Rp)">5,040,000</td> </tr>
            <tr> <td data-label="No">6</td> <td data-label="Uraian Pekerjaan">Plafon Gypsum</td> <td data-label="Volume">42 m²</td> <td class="text-right" data-label="Harga Satuan (Rp)">85,000</td> <td class="text-right" data-label="Jumlah (Rp)">3,570,000</td> </tr>
            <tr> <td data-label="No">7</td> <td data-label="Uraian Pekerjaan">Rangka Atap Kayu</td> <td data-label="Volume">42 m²</td> <td class="text-right" data-label="Harga Satuan (Rp)">200,000</td> <td class="text-right" data-label="Jumlah (Rp)">8,400,000</td> </tr>
            <tr> <td data-label="No">8</td> <td data-label="Uraian Pekerjaan">Penutup Atap Genteng Metal</td> <td data-label="Volume">42 m²</td> <td class="text-right" data-label="Harga Satuan (Rp)">90,000</td> <td class="text-right" data-label="Jumlah (Rp)">3,780,000</td> </tr>
            <tr> <td data-label="No">9</td> <td data-label="Uraian Pekerjaan">Pintu & Jendela</td> <td data-label="Volume">1 ls</td> <td class="text-right" data-label="Harga Satuan (Rp)">4,000,000</td> <td class="text-right" data-label="Jumlah (Rp)">4,000,000</td> </tr>
            <tr> <td data-label="No">10</td> <td data-label="Uraian Pekerjaan">Instalasi Listrik & Air</td> <td data-label="Volume">1 ls</td> <td class="text-right" data-label="Harga Satuan (Rp)">3,000,000</td> <td class="text-right" data-label="Jumlah (Rp)">3,000,000</td> </tr>
            <tr> <td data-label="No">11</td> <td data-label="Uraian Pekerjaan">Pengecatan</td> <td data-label="Volume">90 m²</td> <td class="text-right" data-label="Harga Satuan (Rp)">40,000</td> <td class="text-right" data-label="Jumlah (Rp)">3,600,000</td> </tr>
        </tbody>
        <tfoot>
            <tr class="grand-total">
                <td colspan="4">Total Biaya Konstruksi</td>
                <td class="text-right">53,190,000</td>
            </tr>
        </tfoot>
    </table>
    
</div>

<?php include 'footer.php'; ?>