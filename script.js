// 1. Tema gelap/terang (disimpan di browser)
const root = document.documentElement;
const tombolTema = document.getElementById("tema");
if (localStorage.getItem("tema") === "gelap") root.dataset.tema = "gelap";
tombolTema.addEventListener("click", () => {
  const gelap = root.dataset.tema === "gelap";
  root.dataset.tema = gelap ? "terang" : "gelap";
  localStorage.setItem("tema", root.dataset.tema);
});

// 2. Efek mengetik di hero
const kata = ["website responsif.", "aplikasi sederhana.", "proyek di GitHub."];
const target = document.getElementById("ketik");
let k = 0, h = 0, hapus = false;
function ketik() {
  const teks = kata[k];
  target.textContent = teks.slice(0, h);
  if (!hapus && h === teks.length) { hapus = true; return setTimeout(ketik, 1400); }
  if (hapus && h === 0) { hapus = false; k = (k + 1) % kata.length; }
  h += hapus ? -1 : 1;
  setTimeout(ketik, hapus ? 40 : 90);
}
ketik();

// 3. Bar skill terisi saat terlihat di layar
const daftarSkill = document.querySelector(".skills");
new IntersectionObserver(([e], obs) => {
  if (e.isIntersecting) { daftarSkill.classList.add("tampil"); obs.disconnect(); }
}, { threshold: 0.4 }).observe(daftarSkill);

// 4. Tombol unduh CV: buka dialog cetak, pilih "Simpan sebagai PDF"
document.getElementById("cetak").addEventListener("click", () => window.print());