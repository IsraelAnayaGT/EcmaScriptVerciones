const regext = /\b(Apple)+\b/g;

const fruit = "Apple, Banna, Kiwi, Oranje, Apple, etc, etc, etc";

for(const match of fruit.matchAll(regext)){
    console.log(match);
}