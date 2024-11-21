// arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring

let user= {username: "Oscar", age: 34};
let {username, age} = user;
console.log(username,user.age);

// Spred operatos operador de propagación

let person={name: "nalia", age: 23};
let country = "MX";

let data = {...person, country};
console.log(data);

//rest parametro

function sum(num, ...values){
console.log(values);
console.log(num + values[0]);
return num + values[0];
}

sum(1,1,2,3);