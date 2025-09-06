
let nombreCompleto = "Carlos Perez Gomez";

console.log("Cantidad de caracteres:", nombreCompleto.length);

console.log("¿Incluye 'Perez'? :", nombreCompleto.includes("Perez"));


let nombre2 = "Sofia Gutierrez";
let registros = nombreCompleto + " - " + nombre2;
console.log("Registros unidos:", registros);

let nombreModificado = nombreCompleto.replace("Carlos", "Juan");
console.log("Nombre modificado:", nombreModificado);


let partesNombre = nombreCompleto.split(" ");
console.log("Primer nombre:", partesNombre[0]);
console.log("Primer apellido:", partesNombre[1]);
console.log("Segundo apellido:", partesNombre[2]);

console.log("Nombre en mayúsculas:", nombreCompleto.toUpperCase());


let nombreConEspacios = "  " + nombreCompleto + "  ";
console.log("Antes trim:", `"${nombreConEspacios}"`);
console.log("Después trim:", `"${nombreConEspacios.trim()}"`);


let calificacion = Math.round(Math.random() * 100);
console.log("Calificación aleatoria:", calificacion);
