//mengimport variabel dari file mdl.js
// import { user } from "./mdl.js";

// console.log(user);

// mengimport objek dari file mdl.js
// import { person } from "./mdl.js";
// console.log(person);

// mengimport fariabel, objek, dan functio sekaligus dari file mdl.js
// import { user, person, sayHi } from "./mdl.js";

// console.log(user);
// console.log(person);
// sayHi(person.nama);

// mengimport fariabel, fungsi, dan objek dari file mdl.js
// ketika mengimport kita harus menggunakan nama baru atau nama yang tela kita ganti tadi
// import { nama, people, katakanhi } from "./mdl.js";
// console.log(nama);
// console.log(people);
// katakanhi(people.nama);

// kita juga bisa merubah nama fariabel, objek, dan function di import yaitu import as
// import {user as nama, person as people, sayHi as katakanhi} from "./mdl.js"

// console.log(nama);
// console.log(people);
// katakanhi(people.nama);

// mengimport function yang telah di seting default tadi
import sayHi from "./mdl.js";
sayHi("Alan");