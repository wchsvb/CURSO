// tipos de manejode de variables

// let y const
let name = "victor manuel ";
let lastName = "lorenzana Guzman";

const fullName = name + " " + lastName;

console.log(fullName);

//boleneans

let x= true
let y= false

//objetos
const persona = {
    firstName: "victor manuel",lastName: "lorenzana guzman", age: 28};
 console.log(persona.firstName);  

 // arreglos
 const frutas = ["manzana", "platano", "cereza", "fresa"];
 console.log(frutas[1]);

 //date objeect
 const hoy = new Date();
 console.log(hoy);

 let age2 = 20;
 let text2= (age) >= 18 ? "mayor de edad" : "menor de edad";
 console.log(text2);
// funciones
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
let temp = toCelsius(77);
console.log(temp);

