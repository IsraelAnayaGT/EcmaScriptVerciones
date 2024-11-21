//Antes
function newUser(name, age, country){
    var name = name || "Israel";
    var age = age || 22;
    var country = country || "MX";
    console.log(name,age,country);
}

newUser();
newUser("Nalia", 20, "CO");

//Despues
function newAdmin(name="Raptor",age=100000, country="none"){
    console.log(name,age,country);
}
newAdmin()
newAdmin("AnaBanna",10,"MX");
