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
