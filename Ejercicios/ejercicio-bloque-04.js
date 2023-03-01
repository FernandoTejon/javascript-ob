let name = "Fernando";
let sname = "Tejón";
let estudiante = name.concat(" ", sname);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let number = estudiante.length;
let first_l_name = name.slice(0, 1);
let last_l_sname = sname.slice(sname.length-1, sname.length);
let noSpaces = estudiante.replace(/ /g, "");
let is = estudiante.includes(name);

// Comprobaciones
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(number);
console.log(first_l_name);
console.log(last_l_sname);
console.log(noSpaces);
console.log(is);
