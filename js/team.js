var i = 0;
var a = 'Meet Our Team';
var s = 75;
window.onload = function t() {
  if (i < a.length) {
    document.getElementById("title-team").innerHTML += a.charAt(i);
    i++;
    setTimeout(t, s);
  }
}