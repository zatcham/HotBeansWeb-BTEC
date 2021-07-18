var i = 0;
var a = 'Current Courses';
var s = 75;
window.onload = function t() {
  if (i < a.length) {
    document.getElementById("title-c").innerHTML += a.charAt(i);
    i++;
    setTimeout(t, s);
  }
}