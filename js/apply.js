// dropdown
$(document).ready(function () {
    var u = new URL(document.location);
    var p = u.searchParams;
    var j = p.get("job");
    $("#inputJobDropdown").val(j);
});
// form finish
var s = document.getElementById('form-button');
var f = document.getElementById('apply-form');
var m = document.getElementById('finsihed-div');
$(document).ready(function () {
    m.style.display = 'none';
})
$("#apply-form").submit(function (e) {
    e.preventDefault();
})
function hideForm() {
    f.style.display = 'none';
    m.style.display = 'block';
}