// function menuju login
function toLogin() {
  window.location.href = "./test.html";
}

window.onload = function () {
  // Mengganti riwayat halaman sebelumnya
  history.replaceState(null, "", window.location.href);
  history.pushState(null, "", window.location.href);

  // Cegah navigasi "back" di browser
  window.onpopstate = function () {
    history.go(1);
  };
};
