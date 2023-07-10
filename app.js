window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-fixed');
  
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('revert');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('revert');
    }
  });