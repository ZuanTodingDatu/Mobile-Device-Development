let people = ["Greg", "Mary", "Devon", "James"];

//1
for (let i= 0; i <people.length; i++) {
    console.log(people[i]);
}

//2 
people.forEach(function(value){
    console.log(value);
})

//3
people.shift();
console.log(people);

//4
people.pop();
console.log(people);

//5 
people.unshift("Matt");
console.log(people);

//6
people.push("Zuan Todindatu");
console.log(people);

//7
for (let i= 0; i <people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Marry") {
        break
    }
}

//8
let orang = people.slice(2);
console.log(orang);

//9 
people.splice(2, 1, "Elizabeth", "Artie")
console.log(people);

//10 
let withBob = people.slice();
console.log(withBob);

withBob.push("Bob");
console.log(withBob);