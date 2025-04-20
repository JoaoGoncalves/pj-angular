
let obj = {
    name: 'Joao',
    lastName: 'Goncalves',
    address: {
        city: 'lisbon',
    },
};

let {name, address:{city:cidade}} = obj;

console.log(obj.name);
console.log(name);
console.log(obj.address.city);
//console.log(city);
console.log(cidade);



/* 
console.log(apelido);
console.log(obj.address.city);
console.log(cidade); */
