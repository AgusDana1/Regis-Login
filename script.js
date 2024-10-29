// function button login agaar bisa diklik dan pindah halaman
function login() {
  window.location.href = "../index.html";
}

// agar setelah login tidak bisa bulak balik
window.onload = function () {
  // Mengganti riwayat halaman sebelumnya
  history.replaceState(null, "", window.location.href);
  history.pushState(null, "", window.location.href);

  // Cegah navigasi "back" di browser
  window.onpopstate = function () {
    history.go(1);
  };
};
