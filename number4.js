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
