var i = 0;
var a = 'Vacancies';
var s = 75;
window.onload = function t() {
  if (i < a.length) {
    document.getElementById("title-v").innerHTML += a.charAt(i);
    i++;
    setTimeout(t, s);
  }
}