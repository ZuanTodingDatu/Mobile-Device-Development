//Asynchronous JS

// 1. Parallel
// console.log("Proses 1");
// setTimeout(() => {
//   console.log("Proses 2");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 3000);
// console.log("Proses 4");

//2. Concurent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// Promise
let condition = true;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//2 Cara menggunakan Promise
//1. then - catch - finally
// newPromise
//   .then((result) => `${result}!!!`)
//   .then((result2) => console.log(result2))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Pasti akan dijalankan"));
//2. Async - Await

// const getData = async () => {
//   let result = await newPromise;
//   console.log(result);
// };

// getData();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const getJSONPlaceholder = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  console.log(json);
};

getJSONPlaceholder();