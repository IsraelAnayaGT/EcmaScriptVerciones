//Declarando
class User {};

//instancia de una clase
//const newUSer = new USer();

class user{
    //metodos
    saludo(){
        return 'Hello';
    }
};

const Azteca = new user();
console.log(Azteca.saludo());
const bebeloper = new user();
console.log(bebeloper.saludo());

//constructor

class user {
    //Constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    saludo(){
        return 'Hello';
    }
}

const Israel = new user();

//this 

class user{
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return "Hello";
    }
    saludo(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user("Ana");
console.log(ana.saludo())

//setters getters

class user {
    //constructor
    constructor(name, age){
    this.name = name;
    this.age = age
    }
    //metodos
    speak(){
        return "Hello";
    }
    saludo(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const Nalia = new user ("Oscar", 15);
console.log(Nalia.uAge);
console.log(Nalia.uAge = 20);
