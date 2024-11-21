 //Var alcanze global
 var lastName = "David"; //Declaramos variable
 lastName = "Oscar"; //Reasignamos su valor
 console.log(lastName); // Resultado = Oscar

 //Let alcanze de bloque
let fruit = "Apple"; // Declaramos variable
fruit = "Kiwi"; //Reasignamos su valor
console.log(fruit); //Resultado = Kiwi

//Const alcanze de bloque
const animal = "Lobo"; //Declaramos variable
animal = "Oso"; //Reasignamos su valor
console.log(animal); //Resultado = Error porque con const no es posible reasignar

const fruits = () => {
    if(true){
        var fruit1 = "Apple"; //Function scope
        let fruit2 = "kiwi"; //Block scope
        const fruit3 = "Banna";//Block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();
