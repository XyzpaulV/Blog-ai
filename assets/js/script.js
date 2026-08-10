/* =========================================================
   AI Trends ID - Script Interaksi
   ========================================================= */

// Toggle menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Tutup menu ketika salah satu link diklik
    mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Handler form kontak
const formKontak = document.getElementById('form-kontak');
const pesanBerhasil = document.getElementById('pesan-berhasil');
if (formKontak && pesanBerhasil) {
    formKontak.addEventListener('submit', function (e) {
        e.preventDefault();
        pesanBerhasil.classList.remove('hidden');
        formKontak.reset();
        setTimeout(function () {
            pesanBerhasil.classList.add('hidden');
        }, 5000);
    });
}

// Tahun otomatis di footer
const tahun = document.getElementById('tahun');
if (tahun) {
    tahun.textContent = new Date().getFullYear();
}

// Tanggal publikasi artikel otomatis (contoh penggunaan)
const tanggalPublikasi = document.querySelectorAll('[data-tanggal]');
tanggalPublikasi.forEach(function (el) {
    const tanggal = new Date(el.getAttribute('data-tanggal'));
    if (!isNaN(tanggal.getTime())) {
        const opsi = { day: 'numeric', month: 'long', year: 'numeric' };
        el.textContent = tanggal.toLocaleDateString('id-ID', opsi);
    }
});
