//Array
/*let john = ["john", "doe", 35, true, [80, 90, 100]];
john[2] = 40;
console.log(john[john.length -1]);
console.log(john.join("*"));

john.pop();
console.log(john);

john.push("selamat pagi");
console.log(john);

john.shift();
john.unshift("selamat pagi");
console.log(john);*/

//object

/*let john = {
    firstName = "John",
    lasrtName = "doe",
    age = 35,
    isMarried = true,
    grade = [80, 90, 100]

    }*/

let student = [
   {
       fullname: "John",
       age: 25,
       address: "manado",
   },
   {
       fullname: "bob",
       age: 24,
       address: "minut"
   },
   {
       fullname:"jane",
       age: 23,
       address: "minahasa",
   }

]

// student.forEach(function (value) {
//     console.log(value.fullname);
// });

// let studentNames = student.map(function(value){
//     return value.fullname;
// })

// console.log(studentNames);

// let filterstudent = student.filter(function(value){
//     return value.fullname === "bob";
// });
// console.log(filterstudent);

let filterstudent = student.filter(function(value){
    return value.age >= 24;
});
console.log(filterstudent);

