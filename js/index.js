function toggleAwesomeBurger() {
  this.classList.toggle('awesome-burger-closed');
}

var awesomeBurgerHtml = "<div class='awesome-burger-top'></div>"
+ "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='64px' "
+ "height='64px' viewBox='0 0 64 64' enable-background='new 0 0 64 64' xml:space='preserve'>"
+ "<path class='awesome-burger-circle' fill='none' stroke-width='4' stroke-miterlimit='10' d='M16,32h32c0,0,11.723-0.306,10.75-11 "
+ "c-0.25-2.75-1.644-4.971-2.869-7.151C50.728,7.08,42.767,2.569,33.733,2.054C33.159,2.033,32.599,2,32,2C15.432,2,2,15.432,2,32 "
+ "c0,16.566,13.432,30,30,30c16.566,0,30-13.434,30-30C62,15.5,48.5,2,32,2S1.875,15.5,1.875,32'/>"
+ "</svg>"
+ "<div class='awesome-burger-bottom'></div>";

var awesomeBurgers = document.getElementsByClassName('awesome-burger');
for(var i = 0; i < awesomeBurgers.length; i++) {
  awesomeBurgers[i].innerHTML = awesomeBurgerHtml;
  awesomeBurgers[i].onclick = toggleAwesomeBurger;
}
