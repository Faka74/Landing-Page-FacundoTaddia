window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar-fixed');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('revert');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('revert');
  }
});

const barra = document.getElementById("barra")
const ulDesplegable = document.getElementById("ulDesplegable")
const uldesplegablequerie = document.getElementById("uldesplegablequerie")

barra.addEventListener('click', () => {
  uldesplegablequerie.classList.toggle('desplegado')
})

const barracierre = document.getElementById('barracierre')
barracierre.addEventListener(("click"), () => {
  uldesplegablequerie.classList.remove("desplegado");
})