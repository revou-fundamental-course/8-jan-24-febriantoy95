function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function HitungLuas() {
  const a=document.getElementById("Sisi0").value;
  const b=a * a;
  document.getElementById("Sisi6").innerHTML=("Sisi Persegi = "+ (a));
  document.getElementById("Luas0").innerHTML=("Luas Persegi = " + (b));
}
function LuasReset() {
  document.getElementById("Sisi0").value="";
  document.getElementById("Sisi6").innerHTML="";
  document.getElementById("Luas0").innerHTML="";
}
function HitungKeliling() {
  var p=document.getElementById("Sisi1").value;
  var r=p * 4;
  document.getElementById("Sisi7").innerHTML=("Sisi Persegi = "+ (p));
  document.getElementById("Keliling0").innerHTML=("Luas Persegi = " + (r));
}
function KelReset() {
  document.getElementById("Sisi1").value="";
  document.getElementById("Sisi7").innerHTML="";
  document.getElementById("Keliling0").innerHTML="";
}