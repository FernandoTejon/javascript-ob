var variable;
let variableLet_;

const constante = "Hola soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante);

var variable = "Hola soy una variable VAR";

for (var i =0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}

console.log(variable);

let variableLet = "Hola soy una variable LET";

for (var i =0; i < 3; i++) {
    let variableLet = "Soy la segunda variable LET"
}

console.log(variableLet);

console.log(typeof variable);