
function* iterater(array){
    for (let value of array){
        yield value;
    }
}

const it = iterater(["Anya","Sofia","Alicia","Natalia","Israel"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);