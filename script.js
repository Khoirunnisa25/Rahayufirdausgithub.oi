function openShape(shapeName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(shapeName).style.display = "block";
}

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  //Fungsi Reset
  function resetForm() {
    document.getElementById("nilai_uang").value = "";
    document.getElementById("hasil").value = "";
    document.getElementById("tinggiBadan").value = "";
    document.getElementById("hasil2").value = "";
}

//membaca nilai uang (rupiah) dalam kelipatan 25
function hitungUang() {
    var nilai_uang = document.getElementById("nilai_uang").value;
    var p1000 = Math.floor(nilai_uang / 1000);
    var sisa_nilai_uang = nilai_uang % 1000;
    var p500 = Math.floor(sisa_nilai_uang / 500);
    sisa_nilai_uang = sisa_nilai_uang % 500;
    var p100 = Math.floor(sisa_nilai_uang / 100);
    sisa_nilai_uang = sisa_nilai_uang % 100;
    var p50 = Math.floor(sisa_nilai_uang / 50);
    sisa_nilai_uang = sisa_nilai_uang % 50;
    var p25 = Math.floor(sisa_nilai_uang / 25);
    sisa_nilai_uang = sisa_nilai_uang % 25;
    var hasil = p1000 + " buah pecahan Rp.1000\n" + p500 + " buah pecahan Rp.500\n" + p100 + " buah pecahan Rp.100\n" + p50 + " buah pecahan Rp.50\n" + p25 + " buah pecahan Rp.25";
    document.getElementById("hasil").value = hasil;
}

//Function Berat Badan Ideal
function hitungBerat() {
    var tinggi = document.getElementById("tinggiBadan").value;
    var beratIdeal = (tinggi - 100) - ((tinggi - 100)*0.1);

    document.getElementById("hasil2").value = "Berat badan ideal adalah "+ beratIdeal.toFixed(2)+" kg.";
}