document.addEventListener('DOMContentLoaded', function() {

    // ======================================================
    // BAGIAN 1: LOGIKA UMUM (MENU, SEARCH, ACCORDION, TABS)
    // ======================================================

    // Logika untuk Menu Burger (Mobile)
    const burgerIcon = document.getElementById('burger-icon');
    const navMenu = document.getElementById('nav-menu');
    if (burgerIcon && navMenu) {
        burgerIcon.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Logika untuk Fungsi Search Bar Interaktif
    const searchToggleButton = document.getElementById('search-toggle-btn');
    const searchDropdown = document.getElementById('search-dropdown');
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    if (searchToggleButton && searchDropdown && searchForm && searchInput) {
        searchToggleButton.addEventListener('click', function(event) {
            event.stopPropagation();
            searchDropdown.classList.toggle('active');
            if (searchDropdown.classList.contains('active')) {
                searchInput.focus();
            }
        });
        document.addEventListener('click', function(event) {
            if (!searchDropdown.contains(event.target) && !searchToggleButton.contains(event.target)) {
                searchDropdown.classList.remove('active');
            }
        });
        const navLinks = Array.from(document.querySelectorAll('#nav-menu ul a')).map(a => ({
            text: a.textContent.trim().toLowerCase(),
            href: a.getAttribute('href')
        }));
        const contentKeywords = { 'peluang': 'steven.php', 'bisnis': 'steven.php', 'modal': 'berlian.php', 'uang': 'berlian.php', 'hitung': 'sella.php', 'kalkulator': 'sella.php', 'jual': 'harry.php', 'pemasaran': 'harry.php', 'desain': 'samahe.php', 'produksi': 'samahe.php' };

        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchInput.value.toLowerCase().trim();
            if (!query) return;

            let target = null;
            const queryWords = query.split(/\s+/).filter(Boolean);

            // 1. Cocokkan dulu dengan nama menu di navbar (exact match)
            const exactNav = navLinks.find(link => link.text === query);
            if (exactNav) target = exactNav.href;

            // 2. Jika tidak ada exact match, cocokkan per kata utuh dengan nama menu navbar
            //    (pakai word boundary agar "uang" tidak ikut cocok ke "peluang")
            if (!target) {
                const partialNav = navLinks.find(link => {
                    const navWords = link.text.split(/\s+/).filter(Boolean);
                    return queryWords.some(qw => navWords.includes(qw)) ||
                           navWords.some(nw => queryWords.includes(nw));
                });
                if (partialNav) target = partialNav.href;
            }

            // 3. Jika masih belum ketemu, fallback ke kata kunci konten halaman
            if (!target) {
                for (const keyword in contentKeywords) {
                    if (query.includes(keyword)) { target = contentKeywords[keyword]; break; }
                }
            }

            if (target) {
                window.location.href = target;
            } else {
                alert('Materi tidak ditemukan.');
            }
        });
    }

    // Logika untuk Fungsi Akordeon (Dropdown)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }
    
    // Logika untuk Fungsi Tabs
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    if (tabLinks.length > 0 && tabContents.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', () => {
                const tabId = link.getAttribute('data-tab');
                tabLinks.forEach(item => item.classList.remove('active'));
                tabContents.forEach(item => item.classList.remove('active'));
                link.classList.add('active');
                const activeContent = document.getElementById(tabId);
                if (activeContent) activeContent.classList.add('active');
            });
        });
    }

        // ======================================================
        // SLIDER / CAROUSEL (galeri gambar rumah produksi)
        // ======================================================
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
            const slides = sliderContainer.querySelectorAll('.slide');
            const prevBtn = sliderContainer.querySelector('.prev-btn');
            const nextBtn = sliderContainer.querySelector('.next-btn');
            const dotsContainer = sliderContainer.querySelector('.pagination-dots');

            let currentIndex = 0;
            const totalSlides = slides.length;
            let autoplayInterval;
            const autoplayDelay = 4000;

            // Buat pagination dots hanya jika ada slide
            if (totalSlides > 0) {
                for (let i = 0; i < totalSlides; i++) {
                    const dot = document.createElement('span');
                    dot.classList.add('dot');
                    dot.addEventListener('click', () => stopAutoplayAndGoToSlide(i));
                    dotsContainer.appendChild(dot);
                }

                const dots = dotsContainer.querySelectorAll('.dot');

                function goToSlide(index) {
                    sliderWrapper.style.transform = 'translateX(' + (-index * 100) + '%)';
                    currentIndex = index;
                    updateDots();
                }

                function updateDots() {
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === currentIndex);
                    });
                }

                function nextSlide() {
                    const nextIndex = (currentIndex + 1) % totalSlides;
                    goToSlide(nextIndex);
                }

                function startAutoplay() {
                    autoplayInterval = setInterval(nextSlide, autoplayDelay);
                }

                function stopAutoplay() {
                    clearInterval(autoplayInterval);
                }

                function stopAutoplayAndGoToSlide(index) {
                    stopAutoplay();
                    goToSlide(index);
                    startAutoplay(); // Restart autoplay setelah interaksi manual
                }

                nextBtn.addEventListener('click', () => {
                    stopAutoplay();
                    nextSlide();
                    startAutoplay();
                });

                prevBtn.addEventListener('click', () => {
                    stopAutoplay();
                    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                    goToSlide(prevIndex);
                    startAutoplay();
                });

                // Inisialisasi slider dan mulai autoplay
                goToSlide(0);
                startAutoplay();

                // Hentikan autoplay saat mouse hover dan mulai lagi saat mouse keluar
                sliderContainer.addEventListener('mouseenter', stopAutoplay);
                sliderContainer.addEventListener('mouseleave', startAutoplay);
            }
        }

    // ======================================================
    // BAGIAN 2: KALKULATOR BISNIS BRIKET (HPP, harga, laba/rugi)
    // ======================================================
    const dynamicForm = document.querySelector('.dynamic-calculator-form');
    if (dynamicForm) {

        const formatRupiah = (angka) => new Intl.NumberFormat('id-ID').format(Math.round(angka) || 0);
        const parseRupiah = (rupiah) => parseFloat(String(rupiah).replace(/[^0-9]/g, '')) || 0;

        const recalculateAll = () => {
            // Mengambil nilai produksi bulanan dari input
            const produksiPerBulan = parseRupiah(document.getElementById('produksi-per-bulan')?.value) || 1;

            // 1. Hitung Total Biaya Bahan Baku
            let totalBahanBaku1x = 0;
            document.querySelectorAll('#bahan-baku-rows tr').forEach(row => {
                const jumlah = parseRupiah(row.cells[1].querySelector('input').value);
                const harga = parseRupiah(row.cells[2].querySelector('input').value);
                const subtotal = jumlah * harga;
                row.cells[3].textContent = `Rp ${formatRupiah(subtotal)}`;
                totalBahanBaku1x += subtotal;
            });
            document.getElementById('total-bahan-baku').textContent = `Rp ${formatRupiah(totalBahanBaku1x)}`;
            document.getElementById('input-total-bahan-baku').value = Math.round(totalBahanBaku1x);

            // 2. Hitung Total Tenaga Kerja
            let totalTk1x = 0;
            document.querySelectorAll('#tenaga-kerja-rows tr').forEach(row => {
                const jmlOrang = parseRupiah(row.cells[1].querySelector('input').value);
                const jamKerja = parseRupiah(row.cells[2].querySelector('input').value);
                const upahPerJam = parseRupiah(row.cells[3].querySelector('input').value);
                const subtotal = jmlOrang * jamKerja * upahPerJam;
                row.cells[4].textContent = `Rp ${formatRupiah(subtotal)}`;
                totalTk1x += subtotal;
            });
            document.getElementById('total-tenaga-kerja').textContent = `Rp ${formatRupiah(totalTk1x)}`;
            document.getElementById('input-total-tenaga-kerja').value = Math.round(totalTk1x);
            
            // 3. Hitung Total Penyusutan dan Overhead
            let totalPenyusutan = 0;
            document.querySelectorAll('#penyusutan-rows-container tr').forEach(row => {
                const jumlah = parseRupiah(row.cells[1].querySelector('input').value);
                const harga = parseRupiah(row.cells[2].querySelector('input').value);
                const masa = parseRupiah(row.cells[3].querySelector('input').value);
                const subtotal = masa > 0 ? (jumlah * harga) / masa : 0;
                row.cells[4].textContent = `Rp ${formatRupiah(subtotal)}`;
                totalPenyusutan += subtotal;
            });
            document.getElementById('total-penyusutan').textContent = `Rp ${formatRupiah(totalPenyusutan)}`;
            document.getElementById('input-total-penyusutan').value = Math.round(totalPenyusutan);

            let totalOverheadLain = 0;
            document.querySelectorAll('#overhead-rows-container tr').forEach(row => {
                 const subtotal = parseRupiah(row.cells[1].querySelector('input').value) * parseRupiah(row.cells[2].querySelector('input').value);
                row.cells[3].textContent = `Rp ${formatRupiah(subtotal)}`;
                totalOverheadLain += subtotal;
            });
            
            const finalOverheadTotal = totalOverheadLain + totalPenyusutan;
            document.getElementById('overhead-penyusutan-subtotal').textContent = `Rp ${formatRupiah(totalPenyusutan)}`;
            document.getElementById('total-overhead').textContent = `Rp ${formatRupiah(finalOverheadTotal)}`;
            document.getElementById('input-total-overhead').value = Math.round(finalOverheadTotal);
            
            // 4. Hitung dan tampilkan HPP Bulanan
            const hppBahanBakuBulanan = totalBahanBaku1x * produksiPerBulan;
            const hppTenagaKerjaBulanan = totalTk1x * produksiPerBulan;
            const totalHpp = hppBahanBakuBulanan + hppTenagaKerjaBulanan + finalOverheadTotal;

            document.getElementById('hpp-bahan-baku').textContent = `Rp ${formatRupiah(hppBahanBakuBulanan)}`;
            document.getElementById('hpp-tenaga-kerja').textContent = `Rp ${formatRupiah(hppTenagaKerjaBulanan)}`;
            document.getElementById('hpp-overhead').textContent = `Rp ${formatRupiah(finalOverheadTotal)}`;
            document.getElementById('total-hpp').textContent = `Rp ${formatRupiah(totalHpp)}`;
            document.getElementById('input-total-hpp').value = Math.round(totalHpp);

            // 5. Kalkulasi Harga & Keuntungan
            const hasilProduksiUnit = parseRupiah(document.getElementById('hasil-produksi-unit').value);
            const totalUnitBulanan = hasilProduksiUnit * produksiPerBulan;
            document.getElementById('unit-total-bulan').textContent = formatRupiah(totalUnitBulanan);
            
            const hppPerUnit = totalUnitBulanan > 0 ? totalHpp / totalUnitBulanan : 0;
            document.getElementById('hpp-per-unit-display').textContent = `Rp ${formatRupiah(hppPerUnit)}`;
            
            const hargaJualPerUnit = parseRupiah(document.getElementById('harga-jual-unit').value);
            const unitPerKemasan = parseRupiah(document.getElementById('unit-per-kemasan').value) || 1;

            const hppPerKemasan = hppPerUnit * unitPerKemasan;
            const hargaJualPerKemasan = hargaJualPerUnit * unitPerKemasan;
            
            // TINGKAT KEUNTUNGAN: rasio Harga Jual terhadap HPP (sesuai BRIKET(1).xlsx, sheet HPP!B7 = HargaJual/HPP)
            const marginKeuntungan = hppPerUnit > 0 ? (hargaJualPerUnit / hppPerUnit) * 100 : 0;
            
            document.getElementById('hpp-per-kemasan').textContent = `Rp ${formatRupiah(hppPerKemasan)}`;
            document.getElementById('hargajual-per-kemasan').textContent = `Rp ${formatRupiah(hargaJualPerKemasan)}`;
            document.getElementById('tingkat-keuntungan').textContent = `${marginKeuntungan.toFixed(2)}%`;
        };

        // Mengumpulkan seluruh baris+nilai dari satu tabel dinamis (bahan baku, tenaga kerja, dst)
        const collectDynamicRows = (containerId, columns) => {
            const rows = [];
            document.querySelectorAll(`#${containerId} tr`).forEach(row => {
                const entry = {};
                columns.forEach((col, idx) => {
                    const input = row.cells[idx]?.querySelector('input');
                    entry[col.key] = col.type === 'text' ? (input?.value || '') : parseRupiah(input?.value);
                });
                rows.push(entry);
            });
            return rows;
        };

        // Mengambil snapshot lengkap dari seluruh input form saat submit, untuk disimpan di riwayat
        const collectFormSnapshot = () => ({
            produksiPerBulan: parseRupiah(document.getElementById('produksi-per-bulan')?.value) || 1,
            hasilProduksiUnit: parseRupiah(document.getElementById('hasil-produksi-unit')?.value),
            hargaJualUnit: parseRupiah(document.getElementById('harga-jual-unit')?.value),
            unitPerKemasan: parseRupiah(document.getElementById('unit-per-kemasan')?.value) || 1,
            bebanPemasaran: parseRupiah(document.getElementById('beban_pemasaran')?.value),
            bahanBaku: collectDynamicRows('bahan-baku-rows', [
                { key: 'nama', type: 'text' }, { key: 'jumlah' }, { key: 'harga' }
            ]),
            tenagaKerja: collectDynamicRows('tenaga-kerja-rows', [
                { key: 'posisi', type: 'text' }, { key: 'jmlOrang' }, { key: 'jamKerja' }, { key: 'upahPerJam' }
            ]),
            penyusutan: collectDynamicRows('penyusutan-rows-container', [
                { key: 'namaAlat', type: 'text' }, { key: 'jumlah' }, { key: 'hargaBeli' }, { key: 'masaPakai' }
            ]),
            overhead: collectDynamicRows('overhead-rows-container', [
                { key: 'keterangan', type: 'text' }, { key: 'jumlah' }, { key: 'harga' }
            ]),
            hppPerUnit: parseRupiah(document.getElementById('hpp-per-unit-display')?.textContent),
            tingkatKeuntungan: document.getElementById('tingkat-keuntungan')?.textContent || '0%'
        });

        const createRow = (tbody) => {
            const tr = document.createElement('tr');
            const rowName = tbody.dataset.rowName;
            // data-label di setiap <td> dipakai murni untuk tampilan card-vertikal di mobile (CSS ::before),
            // tidak memengaruhi indeks row.cells[] yang dipakai recalculateAll()/collectDynamicRows()
            if (rowName === 'bahan_baku') {
                tr.innerHTML = `<td data-label="Nama Bahan"><input type="text" class="input-text" placeholder="Nama Bahan"></td><td class="text-center" data-label="Jumlah"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 10"></td><td class="text-right" data-label="Harga Satuan (Rp)"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 5.000"></td><td class="text-right subtotal" data-label="Sub-total (Rp)">Rp 0</td>`;
            } else if (rowName === 'tenaga_kerja') {
                tr.innerHTML = `<td data-label="Posisi"><input type="text" class="input-text" placeholder="Posisi Pekerja"></td><td class="text-center" data-label="Jml Orang"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 7"></td><td class="text-center" data-label="Jam Kerja"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 8"></td><td class="text-right" data-label="Upah/Jam (Rp)"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 10.000"></td><td class="text-right subtotal" data-label="Total Gaji/Hari (Rp)">Rp 0</td>`;
            } else if (rowName === 'penyusutan') {
                 tr.innerHTML = `<td data-label="Nama Alat"><input type="text" class="input-text" placeholder="Nama Alat"></td><td class="text-center" data-label="Jumlah"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 2"></td><td class="text-right" data-label="Harga Beli (Rp)"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 500.000"></td><td class="text-center" data-label="Masa Pakai (Bulan)"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 12"></td><td class="text-right subtotal" data-label="Biaya Penyusutan/Bulan (Rp)">Rp 0</td>`;
            } else if (rowName === 'overhead') {
                tr.innerHTML = `<td data-label="Keterangan Biaya"><input type="text" class="input-text" placeholder="Keterangan Biaya"></td><td class="text-center" data-label="Jumlah"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 30"></td><td class="text-right" data-label="Harga Satuan (Rp)"><input type="text" class="input-rupiah dynamic-input" inputmode="numeric" placeholder="Contoh: 15.000"></td><td class="text-right subtotal" data-label="Sub-total (Rp)">Rp 0</td>`;
            }
            tbody.appendChild(tr);
        };

        // --- POPUP HASIL AKHIR (laporan laba/rugi) ---
        const popup = document.getElementById('popup-hasil');
        const closePopupBtn = document.getElementById('close-popup-btn');

        const tampilkanHasil = (totalPenjualan, totalHpp, bebanPemasaran) => {
            const labaKotor = totalPenjualan - totalHpp;
            const labaBersih = labaKotor - bebanPemasaran;

            document.getElementById('popup-total-penjualan').textContent = `Rp ${formatRupiah(totalPenjualan)}`;
            document.getElementById('popup-total-hpp').textContent = `Rp ${formatRupiah(totalHpp)}`;
            document.getElementById('popup-laba-kotor').textContent = `Rp ${formatRupiah(labaKotor)}`;
            document.getElementById('popup-beban-pemasaran').textContent = `Rp ${formatRupiah(bebanPemasaran)}`;

            const labaBersihCell = document.getElementById('popup-laba-bersih');
            if (labaBersih >= 0) {
                labaBersihCell.textContent = `Rp ${formatRupiah(labaBersih)}`;
                labaBersihCell.className = 'result-value profit';
            } else {
                labaBersihCell.textContent = `(Rp ${formatRupiah(Math.abs(labaBersih))})`;
                labaBersihCell.className = 'result-value loss';
            }

            popup.classList.add('active');
            return labaBersih;
        };

        // --- LOGIKA RIWAYAT PERHITUNGAN (HISTORY, MAKS 10, FIFO) ---
        const HISTORY_KEY = 'sella_kalkulator_history';
        const HISTORY_MAX = 10;
        const historyList = document.getElementById('history-list');
        const historyEmptyText = document.getElementById('history-empty-text');
        const clearHistoryBtn = document.getElementById('clear-history-btn');

        const loadHistory = () => {
            try {
                const raw = localStorage.getItem(HISTORY_KEY);
                return raw ? JSON.parse(raw) : [];
            } catch {
                return [];
            }
        };

        const renderHistory = () => {
            const history = loadHistory();
            historyList.innerHTML = '';

            if (history.length === 0) {
                historyEmptyText.style.display = 'block';
                clearHistoryBtn.disabled = true;
                return;
            }
            historyEmptyText.style.display = 'none';
            clearHistoryBtn.disabled = false;

            // Tampilkan dari yang paling baru ke paling lama (DESC)
            const historyDesc = [...history].reverse();
            historyDesc.forEach((entry) => {
                const item = document.createElement('div');
                item.className = 'history-item';
                item.dataset.id = entry.id;

                const labaClass = entry.labaBersih >= 0 ? 'profit' : 'loss';
                const labaText = entry.labaBersih >= 0
                    ? `Rp ${formatRupiah(entry.labaBersih)}`
                    : `(Rp ${formatRupiah(Math.abs(entry.labaBersih))})`;

                item.innerHTML = `
                    <div class="history-item-info">
                        <span class="history-item-date">${entry.tanggal}</span>
                        <span class="history-item-summary">Penjualan Rp ${formatRupiah(entry.totalPenjualan)} &middot; HPP Rp ${formatRupiah(entry.totalHpp)}</span>
                    </div>
                    <div class="history-item-result">
                        <span class="history-laba ${labaClass}">${labaText}</span>
                        <button type="button" class="history-detail-btn" data-id="${entry.id}" aria-label="Lihat detail riwayat ini">Detail</button>
                        <button type="button" class="history-download-row-btn" data-id="${entry.id}" aria-label="Download riwayat ini sebagai Excel">&#11015;</button>
                        <button type="button" class="history-delete-btn" data-id="${entry.id}" aria-label="Hapus riwayat ini">&times;</button>
                    </div>
                `;
                historyList.appendChild(item);
            });
        };

        const saveHistoryEntry = (totalPenjualan, totalHpp, bebanPemasaran, labaBersih, snapshot) => {
            const history = loadHistory();
            history.push({
                id: Date.now(),
                tanggal: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
                totalPenjualan,
                totalHpp,
                bebanPemasaran,
                labaBersih,
                snapshot
            });
            while (history.length > HISTORY_MAX) {
                history.shift(); // hapus riwayat paling lama jika lebih dari 10
            }
            localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
            renderHistory();
        };

        // --- DOWNLOAD RIWAYAT KE EXCEL (.xlsx) MENGGUNAKAN SHEETJS ---
        // Menyusun satu entry riwayat menjadi baris-baris (array of array) untuk 1 sheet Excel,
        // berisi ringkasan + rincian lengkap semua input (bahan baku, TK, penyusutan, overhead).
        const buildEntrySheetRows = (entry) => {
            const snap = entry.snapshot;
            const rows = [];
            rows.push(['RINGKASAN PERHITUNGAN']);
            rows.push(['Tanggal', entry.tanggal]);
            rows.push(['Total Penjualan (Rp)', entry.totalPenjualan]);
            rows.push(['Total HPP (Rp)', entry.totalHpp]);
            rows.push(['Laba Kotor (Rp)', entry.totalPenjualan - entry.totalHpp]);
            rows.push(['Beban Pemasaran (Rp)', entry.bebanPemasaran]);
            rows.push(['Laba/Rugi Bersih (Rp)', entry.labaBersih]);

            if (!snap) {
                rows.push([]);
                rows.push(['(Rincian input tidak tersedia untuk riwayat ini)']);
                return rows;
            }

            rows.push([]);
            rows.push(['PARAMETER PRODUKSI & HARGA']);
            rows.push(['Total Produksi per Bulan (kali)', snap.produksiPerBulan]);
            rows.push(['Hasil Produksi per Proses (Unit)', snap.hasilProduksiUnit]);
            rows.push(['Harga Jual per Unit (Rp)', snap.hargaJualUnit]);
            rows.push(['Jumlah Unit per Kemasan', snap.unitPerKemasan]);
            rows.push(['HPP per Unit (Rp)', snap.hppPerUnit]);
            rows.push(['Tingkat Keuntungan (Margin)', snap.tingkatKeuntungan]);
            rows.push(['Beban Pemasaran per Bulan (Rp)', snap.bebanPemasaran]);

            rows.push([]);
            rows.push(['1. BIAYA BAHAN BAKU (per 1x Produksi)']);
            rows.push(['Nama Bahan', 'Jumlah', 'Harga Satuan (Rp)', 'Sub-total (Rp)']);
            snap.bahanBaku.forEach(r => rows.push([r.nama, r.jumlah, r.harga, r.jumlah * r.harga]));

            rows.push([]);
            rows.push(['2. BIAYA TENAGA KERJA LANGSUNG (per 1x Produksi)']);
            rows.push(['Posisi', 'Jml Orang', 'Jam Kerja', 'Upah/Jam (Rp)', 'Total Gaji (Rp)']);
            snap.tenagaKerja.forEach(r => rows.push([r.posisi, r.jmlOrang, r.jamKerja, r.upahPerJam, r.jmlOrang * r.jamKerja * r.upahPerJam]));

            rows.push([]);
            rows.push(['3. BIAYA PENYUSUTAN ALAT (per Bulan)']);
            rows.push(['Nama Alat', 'Jumlah', 'Harga Beli (Rp)', 'Masa Pakai (Bulan)', 'Penyusutan/Bulan (Rp)']);
            snap.penyusutan.forEach(r => rows.push([r.namaAlat, r.jumlah, r.hargaBeli, r.masaPakai, r.masaPakai > 0 ? (r.jumlah * r.hargaBeli) / r.masaPakai : 0]));

            rows.push([]);
            rows.push(['4. BIAYA OVERHEAD PRODUKSI (per Bulan)']);
            rows.push(['Keterangan', 'Jumlah', 'Harga Satuan (Rp)', 'Sub-total (Rp)']);
            snap.overhead.forEach(r => rows.push([r.keterangan, r.jumlah, r.harga, r.jumlah * r.harga]));

            return rows;
        };

        const makeSafeSheetName = (label) => label.replace(/[\\/?*\[\]:]/g, '-').substring(0, 31);

        const downloadWorkbook = (entries, fileName) => {
            if (typeof XLSX === 'undefined') {
                alert('Gagal memuat modul Excel. Periksa koneksi internet Anda dan coba lagi.');
                return;
            }
            const workbook = XLSX.utils.book_new();
            entries.forEach((entry, index) => {
                const sheetRows = buildEntrySheetRows(entry);
                const worksheet = XLSX.utils.aoa_to_sheet(sheetRows);
                worksheet['!cols'] = [{ wch: 32 }, { wch: 16 }, { wch: 18 }, { wch: 16 }, { wch: 18 }];
                const sheetLabel = entries.length > 1
                    ? makeSafeSheetName(`${index + 1}. ${entry.tanggal}`)
                    : makeSafeSheetName(entry.tanggal);
                XLSX.utils.book_append_sheet(workbook, worksheet, sheetLabel);
            });
            XLSX.writeFile(workbook, fileName);
        };

        const downloadSingleHistoryEntry = (entry) => {
            const tanggalFile = entry.tanggal.replace(/[^0-9A-Za-z]+/g, '-');
            downloadWorkbook([entry], `riwayat-perhitungan-${tanggalFile}.xlsx`);
        };

        const downloadAllHistory = () => {
            const history = loadHistory();
            if (history.length === 0) {
                alert('Belum ada riwayat perhitungan untuk diunduh.');
                return;
            }
            const historyDesc = [...history].reverse();
            downloadWorkbook(historyDesc, 'riwayat-perhitungan-semua.xlsx');
        };

        const popupHistory = document.getElementById('popup-history');
        const showHistoryBtn = document.getElementById('show-history-btn');
        const closeHistoryBtn = document.getElementById('close-history-btn');
        const downloadAllHistoryBtn = document.getElementById('download-all-history-btn');

        if (showHistoryBtn && popupHistory) {
            showHistoryBtn.addEventListener('click', () => {
                renderHistory();
                popupHistory.classList.add('active');
            });
        }
        if (closeHistoryBtn && popupHistory) {
            closeHistoryBtn.addEventListener('click', () => {
                popupHistory.classList.remove('active');
            });
        }
        if (popupHistory) {
            popupHistory.addEventListener('click', (event) => {
                if (event.target === popupHistory) {
                    popupHistory.classList.remove('active');
                }
            });
        }

        if (downloadAllHistoryBtn) {
            downloadAllHistoryBtn.addEventListener('click', downloadAllHistory);
        }

        // --- POPUP DETAIL RIWAYAT: menampilkan seluruh rincian input dari 1 entry ---
        const popupDetail = document.getElementById('popup-detail');
        const closeDetailBtn = document.getElementById('close-detail-btn');
        const detailBody = document.getElementById('detail-body');

        const buildDetailHtml = (entry) => {
            const snap = entry.snapshot;
            const labaClass = entry.labaBersih >= 0 ? 'profit' : 'loss';
            const rowsTable = (title, headers, rows, formatters) => {
                if (!rows || rows.length === 0) return `<h4>${title}</h4><p class="detail-empty">Tidak ada data.</p>`;
                const head = headers.map(h => `<th>${h}</th>`).join('');
                const body = rows.map(r => `<tr>${formatters(r).map(v => `<td>${v}</td>`).join('')}</tr>`).join('');
                return `<h4>${title}</h4><div class="detail-table-wrapper"><table class="calc-table detail-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
            };

            if (!snap) {
                return `<p class="detail-empty">Rincian input tidak tersedia untuk riwayat ini (riwayat dibuat sebelum fitur detail tersedia).</p>`;
            }

            return `
                <div class="detail-summary-grid">
                    <div><span>Tanggal</span><strong>${entry.tanggal}</strong></div>
                    <div><span>Total Penjualan</span><strong>Rp ${formatRupiah(entry.totalPenjualan)}</strong></div>
                    <div><span>Total HPP</span><strong>Rp ${formatRupiah(entry.totalHpp)}</strong></div>
                    <div><span>Laba Kotor</span><strong>Rp ${formatRupiah(entry.totalPenjualan - entry.totalHpp)}</strong></div>
                    <div><span>Beban Pemasaran</span><strong>Rp ${formatRupiah(entry.bebanPemasaran)}</strong></div>
                    <div><span>Laba/Rugi Bersih</span><strong class="${labaClass}">Rp ${formatRupiah(entry.labaBersih)}</strong></div>
                </div>
                <hr>
                <div class="detail-summary-grid">
                    <div><span>Produksi per Bulan</span><strong>${snap.produksiPerBulan}x</strong></div>
                    <div><span>Hasil per Proses</span><strong>${formatRupiah(snap.hasilProduksiUnit)} unit</strong></div>
                    <div><span>Harga Jual/Unit</span><strong>Rp ${formatRupiah(snap.hargaJualUnit)}</strong></div>
                    <div><span>Unit/Kemasan</span><strong>${formatRupiah(snap.unitPerKemasan)}</strong></div>
                    <div><span>HPP per Unit</span><strong>Rp ${formatRupiah(snap.hppPerUnit)}</strong></div>
                    <div><span>Tingkat Keuntungan</span><strong>${snap.tingkatKeuntungan}</strong></div>
                </div>
                ${rowsTable('1. Biaya Bahan Baku', ['Nama Bahan', 'Jumlah', 'Harga Satuan', 'Sub-total'], snap.bahanBaku,
                    r => [r.nama || '-', formatRupiah(r.jumlah), `Rp ${formatRupiah(r.harga)}`, `Rp ${formatRupiah(r.jumlah * r.harga)}`])}
                ${rowsTable('2. Biaya Tenaga Kerja Langsung', ['Posisi', 'Jml Orang', 'Jam Kerja', 'Upah/Jam', 'Total Gaji'], snap.tenagaKerja,
                    r => [r.posisi || '-', formatRupiah(r.jmlOrang), formatRupiah(r.jamKerja), `Rp ${formatRupiah(r.upahPerJam)}`, `Rp ${formatRupiah(r.jmlOrang * r.jamKerja * r.upahPerJam)}`])}
                ${rowsTable('3. Biaya Penyusutan Alat', ['Nama Alat', 'Jumlah', 'Harga Beli', 'Masa Pakai (bln)', 'Penyusutan/Bulan'], snap.penyusutan,
                    r => [r.namaAlat || '-', formatRupiah(r.jumlah), `Rp ${formatRupiah(r.hargaBeli)}`, formatRupiah(r.masaPakai), `Rp ${formatRupiah(r.masaPakai > 0 ? (r.jumlah * r.hargaBeli) / r.masaPakai : 0)}`])}
                ${rowsTable('4. Biaya Overhead Produksi', ['Keterangan', 'Jumlah', 'Harga Satuan', 'Sub-total'], snap.overhead,
                    r => [r.keterangan || '-', formatRupiah(r.jumlah), `Rp ${formatRupiah(r.harga)}`, `Rp ${formatRupiah(r.jumlah * r.harga)}`])}
            `;
        };

        const showHistoryDetail = (entry) => {
            if (!detailBody || !popupDetail) return;
            detailBody.innerHTML = buildDetailHtml(entry);
            popupDetail.classList.add('active');
        };

        if (closeDetailBtn && popupDetail) {
            closeDetailBtn.addEventListener('click', () => popupDetail.classList.remove('active'));
        }
        if (popupDetail) {
            popupDetail.addEventListener('click', (event) => {
                if (event.target === popupDetail) popupDetail.classList.remove('active');
            });
        }

        if (historyList) {
            historyList.addEventListener('click', (e) => {
                const detailBtn = e.target.closest('.history-detail-btn');
                if (detailBtn) {
                    const id = Number(detailBtn.dataset.id);
                    const entry = loadHistory().find(h => h.id === id);
                    if (entry) showHistoryDetail(entry);
                    return;
                }
                const downloadBtn = e.target.closest('.history-download-row-btn');
                if (downloadBtn) {
                    const id = Number(downloadBtn.dataset.id);
                    const entry = loadHistory().find(h => h.id === id);
                    if (entry) downloadSingleHistoryEntry(entry);
                    return;
                }
                const deleteBtn = e.target.closest('.history-delete-btn');
                if (deleteBtn) {
                    const id = Number(deleteBtn.dataset.id);
                    const history = loadHistory().filter(entry => entry.id !== id);
                    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
                    renderHistory();
                    return;
                }
                const item = e.target.closest('.history-item');
                if (item) {
                    const id = Number(item.dataset.id);
                    const entry = loadHistory().find(h => h.id === id);
                    if (entry) {
                        popupHistory.classList.remove('active');
                        tampilkanHasil(entry.totalPenjualan, entry.totalHpp, entry.bebanPemasaran);
                    }
                }
            });
        }

        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener('click', () => {
                localStorage.removeItem(HISTORY_KEY);
                renderHistory();
            });
        }

        dynamicForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah halaman reload

            // Ambil semua nilai yang sudah dihitung
            const totalHpp = parseRupiah(document.getElementById('input-total-hpp').value);
            const bebanPemasaran = parseRupiah(document.getElementById('beban_pemasaran').value);

            // PERHITUNGAN UNTUK TOTAL PENJUALAN
            const produksiPerBulan = parseRupiah(document.getElementById('produksi-per-bulan')?.value) || 1;
            const hasilProduksiUnit = parseRupiah(document.getElementById('hasil-produksi-unit').value);
            const hargaJualPerUnit = parseRupiah(document.getElementById('harga-jual-unit').value);
            const totalUnitBulanan = hasilProduksiUnit * produksiPerBulan;
            const totalPenjualan = totalUnitBulanan * hargaJualPerUnit;

            const labaBersih = tampilkanHasil(totalPenjualan, totalHpp, bebanPemasaran);
            saveHistoryEntry(totalPenjualan, totalHpp, bebanPemasaran, labaBersih, collectFormSnapshot());
        });

        if(closePopupBtn) {
            closePopupBtn.addEventListener('click', () => {
                popup.classList.remove('active');
            });
        }

        // Menutup pop-up saat klik di area gelap (backdrop), bukan di kontennya
        if(popup) {
            popup.addEventListener('click', (event) => {
                if (event.target === popup) {
                    popup.classList.remove('active');
                }
            });
        }
        
        const ROW_MIN = 1;
        const ROW_MAX = 100;

        // Menyesuaikan jumlah baris tabel dinamis tanpa menghapus data baris yang sudah diisi
        const syncRowCount = (selector) => {
            const tbody = document.getElementById(selector.dataset.target);
            if (!tbody) return;

            let count = parseInt(selector.value, 10);
            if (isNaN(count)) count = ROW_MIN;
            count = Math.min(ROW_MAX, Math.max(ROW_MIN, count));
            selector.value = count;

            const currentRows = tbody.querySelectorAll('tr').length;
            if (count > currentRows) {
                for (let i = currentRows; i < count; i++) createRow(tbody);
            } else if (count < currentRows) {
                for (let i = currentRows; i > count; i--) tbody.lastElementChild?.remove();
            }
            recalculateAll();
        };

        document.querySelectorAll('.row-selector').forEach(selector => {
            // 'change' (blur/Enter) baru men-sinkronkan & clamp nilai, supaya user bebas mengetik tanpa dipaksa setiap keystroke
            selector.addEventListener('change', () => syncRowCount(selector));
            selector.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') selector.blur();
            });
            syncRowCount(selector);
        });

        document.querySelectorAll('.row-stepper-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const input = document.getElementById(btn.dataset.targetInput);
                if (!input) return;
                const step = parseInt(btn.dataset.step, 10);
                const newValue = Math.min(ROW_MAX, Math.max(ROW_MIN, (parseInt(input.value, 10) || ROW_MIN) + step));
                input.value = newValue;
                syncRowCount(input);
            });
        });

        dynamicForm.addEventListener('input', (e) => {
            const target = e.target;
            if (target.classList.contains('input-rupiah')) {
                let val = target.value.replace(/[^0-9]/g, '');
                target.value = formatRupiah(val);
            }
            recalculateAll();
        });
        
        recalculateAll();
    }
});