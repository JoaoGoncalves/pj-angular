// function declaration
dizerOla('Joao');

function dizerOla(nome){ // hoisting
    console.log("ola ", nome);
};



// function expression
//ola('Jose');

let ola = function(nome){ // nao existe Hoisting
    console.log("ola ", nome);
};

ola('Jose');


console.log(nome);
//var nome = 'joao';
let nome = 'joao';

/* var nome;
console.log(nome);
nome = 'joao'; */









