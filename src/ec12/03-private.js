class user {
    //constructor
    constructor(name, age){
    this.name = name;
    this.age = age
    }
    //metodos
    #speak(){
        return "Hello";
    }
    saludo(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const Nalia = new user ("Oscar", 15);
console.log(Nalia.uAge);
console.log(Nalia.uAge = 20);
