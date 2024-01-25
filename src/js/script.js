function setActive(activePage) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.classList.remove('active');
  });

  const activeLink = document.querySelector(`[onclick="setActive('${activePage}')"]`);
  activeLink.classList.add('active');
}

var navbar = document.querySelector("nav");

window.addEventListener("scroll", function() {
if (window.pageYOffset > 0) {
  navbar.classList.add("fixed-top");
} else {
  navbar.classList.remove("fixed-top");
}
});

// Fungsi untuk menangani klik menu navigasi
function smoothScroll(target) {
  const element = document.getElementById(target);
  const offset = 60; // Sesuaikan dengan tinggi navbar jika ada padding-top atau margin-top
  
  if (element) {
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
  }
}

// Mengambil semua elemen dengan kelas 'nav-link' dan menambahkan event listener
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah perilaku default dari link
      
      const targetId = this.getAttribute('href').substring(1); // Mengambil id target dari atribut href
      
      // Memanggil fungsi smoothScroll dengan id target sebagai parameter
      smoothScroll(targetId);
  });
});


