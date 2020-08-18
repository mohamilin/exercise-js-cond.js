/*
CHALLENGE 1: 
Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
        Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru

*/

// SOLVE :


let division = "marketing";

if(division == "HR" ) {
    console.log("Rekrutmen untuk calon pegawai baru");
} else if(division == "marketing") {
    console.log("Memasarkan Produk");
} else if(division == "manager") {
    console.log("Mengatur Team");
} else if(division == "front-end") {
    console.log("Mengembangkan aplikasi");
} else {
    console.log("Menerima Laporan dari seluruh bagian")
}

/*
CHALLENGE
2. Buat conditional untuk membandingkan 2 buah nilai.
    Tampilkan apakah salah satu nilai misal a lebih besar dari b,
    a lebih kecil dari b, dan a sama dengan b.

*/

//SOLVE

let numOne = 1;
let numTwo = 2;

if(numOne > numTwo) {
    console.log(numOne + " lebih besar dari " + numTwo);
} else if (numOne === numTwo) {
    console.log(numOne + " sama dengan " + numTwo);
} else {
    console.log(numOne + " lebih kecil dari " + numTwo)
}

/*

3. Gunakan switch case untuk mengetahui nama hari berdasarkan angka.
    Hari minggu dimulai dari angka 1 dan seterusnya

*/

//SOLVE

let day = "minggu";

switch (day) {
  case "minggu":
    console.log("1");
    break;
  case "senin":
    console.log("2");
    break;
  case "selasa":
    console.log("3");
    break;
  case "rabu":
    console.log("4");
    break;
  case "kamis":
    console.log("5");
    break;
  case "jum'at":
    console.log("6");
    break;
  case "sabtu":
    console.log("7");
    break;
  default:
    console.log("data tidak sesuai");
}

/*

4. Gunakan switch case untuk membuat sebuah game sederhana.
    UP -> Karakter berjalan keatas
    RIGHT -> Karakter berjalan kekanan
    BOTTOM -> Karakter berjalan kebawah
    LEFT -> Karakter berjalan kekiri

*/

//SOLVE
switch (prompt("Pilih Karakter Anda !")) {
  case "UP":
    alert("Karakter berjalan keatas");
    break;
  case "RIGHT":
    alert("Karakter berjalan kekanan");
    break;
  case "BOTTOM":
    alert("Karakter berjalan kebawah");
    break;
  case "LEFT":
    alert("Karakter berjalan kekiri");
    break;
  default:
    alert("Karakter tidak terdeteksi");
}
