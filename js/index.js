function toggleAwesomeBurger() {
  this.classList.toggle('awesome-burger-closed');
}

var awesomeBurgers = document.getElementsByClassName('awesome-burger');
for(var i = 0; i < awesomeBurgers.length; i++) {
  awesomeBurgers[i].onclick = toggleAwesomeBurger;
}
