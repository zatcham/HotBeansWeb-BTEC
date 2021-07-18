var i = 0;
var a = 'Welcome to Hot Beans Web!';
var s = 75;
window.onload = function () {
  setTimeout(function t() {
    if (i < a.length) {
      document.getElementById("title-home").innerHTML += a.charAt(i);
      i++;
      setTimeout(t, s);
    }
  }, 1300);
}