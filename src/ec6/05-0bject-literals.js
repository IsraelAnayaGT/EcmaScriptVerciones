//Object literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("EsotericTroll", 300, "MagicWorld", 1));