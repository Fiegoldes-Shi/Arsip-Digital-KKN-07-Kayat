<?php
    if (!isset($pageTitle)) {
        $pageTitle = "Arsip Digital KKN 7 UKDW";
    }
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?> - Arsip Digital KKN 7</title>
    <link rel="stylesheet" href="style.css?v=<?php echo filemtime(__DIR__ . '/style.css'); ?>">
    <link rel="stylesheet" href="style-responsive.css?v=<?php echo filemtime(__DIR__ . '/style-responsive.css'); ?>">
    <link rel="icon" href="data/ukdw.png" type="image/png">
</head>
<body>
    <header>
        <div class="container header-container">
            <div class="logo-area">
                <img src="data/kayat 07.png" alt="KKN 07 Kayat">
                <div class="logo-text">
                    <h1>Arsip Digital</h1>
                    <p>KKN 07 Kayat</p>
                </div>
            </div>
            
            <nav id="nav-menu">
                <ul>
                    <li><a href="index.php">Beranda</a></li>
                    <li><a href="steven.php">Peluang Bisnis</a></li>
                    <li><a href="berlian.php">Modal Bisnis</a></li>
                    <li><a href="sella.php">Analisis Keuangan</a></li>
                    <li><a href="harry.php">Pemasaran Digital</a></li>
                    <li><a href="samahe.php">Rumah Produksi</a></li>
                </ul>
            </nav>

            <div class="header-right">
                <button id="search-toggle-btn" class="search-icon-btn" aria-label="Buka pencarian">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                <div class="burger-icon" id="burger-icon">&#9776;</div>
            </div>
        </div>

        <div id="search-dropdown" class="search-dropdown-layer">
            <div class="container">
                <form id="search-form" role="search">
                    <input type="search" id="search-input" placeholder="Telusuri Arsip Digital..." aria-label="Cari materi di situs ini">
                </form>
            </div>
        </div>
    </header>

    <main>
        <div class="container">