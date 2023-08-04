//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c'

//variabel bisa menampung tipe data string (text), integet/number, bolean, array, object,

let nama = 'Fuzuma'; //string
let umur = 18; //number
let apakahBenar = true; //bolean
let uang = 30000.3 //number namun ada koma

//operator aritmatika 

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'modulus');

//disini kita belajar mengisi variabel

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika) //30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika) //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika) //0,5

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika) //200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika) //10

//string juga bisa ditambah namun stirng gak bisa dikurang dengan operator aritmatika 
let firstname = 'Sharul'
let lastname = 'Rahmanda'
let fullname = firstname + ' ' + lastname
console.log(fullname)
console.log(firstname + ' ' + lastname)
console.log(firstname - lastname) //NaN

//alur pembacaan code
//untuk membaca code kalian harus membaca nya dari kiri ke kanan, dan dari atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10

//pertanyaan kenapa false + 10 jawabannya tetap menjadi 10??? karena false = 0 true = 1;
console.log(true + 10); //11

//membaca eror
//eror itu jangan takut, justru takut itu ketika tidak ada namanya eror di pemograman
//karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak eror, itu membuat si programer radak
//muak buat mencari eror nya atau letak kesalahannya

//contoh eror 
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya';

// auto komentar bisa menekan ctrl + /

// tips nya adalah selalu teliti, dan kalau ada eror itu dibaca aja, dan belajar ngoding itu perlu kebiasaan
// karena ngoding itu habit