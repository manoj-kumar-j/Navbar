const togglemenu = document.getElementsByClassName('toggle-menu')[0]
const navbarmenu = document.getElementsByClassName('nav-menu')[0]

togglemenu.addEventListener('click', () => {
  navbarmenu.classList.toggle('active')
})


window.addEventListener('scroll', () => {
  var navbar = document.querySelector('.navbar');
  if(window.scrollY > 0) {
    navbar.style.backgroundColor = '#2980b9';
  } else {
    navbar.style.backgroundColor = '#3498db';
  }
});