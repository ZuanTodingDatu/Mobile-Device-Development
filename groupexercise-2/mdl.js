// // mengeexport variabel
// export let user = "Alan";

// // mengexport objek
//  export let person = {
//     nama: "Alan",
//     umur: 20,
//     alamat: "Toraja",
// };
// mengexport variabel, objek, function sekaligus
let user = "Alan";

let person = {
    nama: "Alan",
    umur: 20,
    alamat: "Toraja",
};

function sayHi(user) {
    console.log(`Hii nama saya, ${user}!`); 
}

// export {user, person, sayHi};

// export as: kita menganti nama variabel, fungsi atau objek yang akan kita export
// export {user as nama, person as people, sayHi as katakanhi};

// export {user, person, sayHi};

// export default digunakan untuk membuat sala satu variabel menjadi data utama bisa juga digunakan ketika hanya ada satu variabel di faile tersebut
export default sayHi;


