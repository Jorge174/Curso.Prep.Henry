// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 15;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return 'Hola ' + str;
}
console.log(devolverString('Mundo'));
//Imprimo una segunda solo para practicar!
var curso = 'Henry';
var imprime = devolverString(curso);
console.log(imprime + ", Buen dia!. voy a continuar estudiando!");
//Imprimo una Tercera solo para practicar!
console.log(devolverString('Henry') + ", Buen dia!. voy a continuar estudiando!");


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}
console.log(suma(3,8));


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y;
}
var restando = resta(8,3);
console.log(restando);


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;  
}
multiplica(5, 8);


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}
divide(8,4);


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  return x === y;
}
var igualdad = sonIguales(5,2);
console.log(igualdad);
var igualdad = sonIguales(5,5);
console.log(igualdad);


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length;
}
var cadena = tienenMismaLongitud('Caracas', 'Lima');
console.log(cadena);
var cadena = tienenMismaLongitud('Madrid', 'Berlin');
console.log(cadena);


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90;
}
var numero1 = menosQueNoventa(80);
var numero2 = menosQueNoventa(280);
console.log(numero1);
console.log(numero2);


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50;
}
var numero3 = mayorQueCincuenta(80);
var numero4 = mayorQueCincuenta(28);
console.log(numero3);
console.log(numero4);


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
var x = 21;
var y = 5;
console.log('El resto entre '+ x +' y '+ y +' es: ' + obtenerResto(x,y));


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}
var numero = 20;
console.log(esPar(numero));


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 1){
    return true;
  }
  else {
    return false;
  }
}
var numero = 15
console.log(esImpar(numero));


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
}
var numero = 3;
console.log(elevarAlCuadrado(numero));


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3);
}
var numero3 = 3;
console.log(elevarAlCubo(numero3));


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return num ** exponent;
}
var base = 2;
var exponente = 5;
console.log(elevar(base, exponente));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num/3);
}
var numero = 5
console.log(redondearNumero(numero))


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}
console.log(redondearHaciaArriba(7.0006))


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()
}
console.log(numeroRandom());


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0){
    return 'Es Positivo'
  }
  else if (numero < 0) {
    return 'Es Negativo'
  }
  else {
    return false
  }
}
var numero = 5
console.log(esPositivo(numero));


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str +'!'
}
console.log(agregarSimboloExclamacion('Hola Mundo'));



function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return 'Tu nombre es ' + nombre +' y mi apellido es '+ apellido;
}
var primerNombre = prompt('Cual es tu primer nombre?: ');
var primerApellido = prompt('Cual es tu primer apellido?: ')
console.log(combinarNombres(primerNombre, primerApellido))


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return '"Hola ' + nombre +'!"';
}
var tuNombre = prompt('Cual es tu nombre?: ');
console.log(obtenerSaludo(tuNombre));



function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
 return 'El area del rectangulo es: ' + alto * ancho + ' unidades cuadradas';
}
var alto1 = prompt('Cual es el alto del rectangulo?: ');
var ancho1 = prompt('Cual es el ancho del rectangulo: ');
console.log(obtenerAreaRectangulo(alto1, ancho1));


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return 'El perimetro del cuadrado es de: ' + lado * 4 + ' unidades lineales'
}
var lado1 = prompt('Cual es la medida de un lado del cuadrado?: ');
console.log(retornarPerimetro(lado1))



function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return 'El Area del triangulo es de: ' + (base * altura) / 2 + ' unidades cuadradas';
}
var base1 = prompt('Cual es la medida de la base del triangulo?: ');
var altura2 = prompt('Cual es la medida de la altura del triangulo?: ');
console.log(areaDelTriangulo(base1, altura2));



function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return moneda + ' Euros son: ' + euro * 1.20 + ' Dolares';
}
var moneda = prompt('cuantos euros tienes?: ');
console.log(deEuroAdolar(moneda));


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length > 1){
    return 'Dato Incorrecto'
  }
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es Vocal'
  }
  else {
    return 'Dato Incorrecto'
  }
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
