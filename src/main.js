//lodash é utilizado através do _
const _ = require("lodash");


let words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

//Funções para obter elementos de uma array:

let primeiroElemento = _.first(words);
let ultimoElemento = _.last(words);

console.log(`Primeiro elemento: ${primeiroElemento}`);
console.log(`Ultimo elemento: ${ultimoElemento}`);

let terceiroElemento =_.nth(words, 2);
console.log(`Terceiro elemento: ${terceiroElemento}`);

//Funções para manipular arrays:

let novaArray = _.slice(words, 2, 6);
console.log(`Nova array: ${novaArray}`);

//Funções para delay:
function message()
{
    console.log("Esperei 1000 ms");
}
_.delay(message, 1000);


//Funções para determinar tipos:
let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

vals.forEach( (e) => {

    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }

});

//Filter (Similar Where Linq)


let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let pos_nums = _.filter(nums, (e) => e > 0);
console.log('Números mairo que zero:');
console.log(pos_nums);

//Trim
let word = '   falcon   ';

let trimmed = _.trim(word);
console.log(word );
console.log(trimmed );

//Para descobrir mais funções ler documentação
//https://zetcode.com/javascript/lodash/