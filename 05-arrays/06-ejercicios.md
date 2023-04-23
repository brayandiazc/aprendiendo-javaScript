# Ejercicios de arrays

Esta sección contiene ejercicios para practicar los conceptos de arrays en JavaScript.

## Arrays

Los ejercicios de esta sección se basan en la declaración de arrays.

## Ejercicio 1

Crear un método que reciba un array de calificaciones y obtenga el promedio con el uso de los métodos de arrays. Si el promedio es mayor a 70 imprima que aprobó / si es menor, que no aprobó.

promedio([70, 80, 80, 90, 60]) // Aprobado: 76.
promedio([70, 50, 75, 70, 60]) // No Aprobado: 65.

```javascript
// Función que recibe un array de calificaciones y obtiene el promedio
function promedio(calificaciones) {
  var suma = 0; // Inicializamos una variable suma en 0

  for (var i = 0; i < calificaciones.length; i++) {
    // Creamos un bucle for que se ejecutará mientras i sea menor que la longitud del array
    suma += calificaciones[i]; // Sumamos a la variable suma el elemento en la posición i del array
  }

  var promedio = suma / calificaciones.length; // Calculamos el promedio dividiendo la suma entre la longitud del array

  if (promedio > 70) {
    // Si el promedio es mayor a 70
    console.log("Aprobado: " + promedio); // Imprimimos en consola que aprobó
  } else {
    // Si el promedio es menor o igual a 70
    console.log("No Aprobado: " + promedio); // Imprimimos en consola que no aprobó
  }
}

promedio([70, 80, 80, 90, 60]); // Aprobado: 76
promedio([70, 50, 75, 70, 60]); // No Aprobado: 65
```

## Ejercicio 2

Método que reciba un array e imprima en la consola cada uno de sus elementos.
imprimeArray([‘uno’, 2, null, 0]);
uno
2
null
0

```javascript
// Función que recibe un array e imprime en consola cada uno de sus elementos
function imprimeArray(array) {
  for (var i = 0; i < array.length; i++) {
    // Creamos un bucle for que se ejecutará mientras i sea menor que la longitud del array
    console.log(array[i]); // Imprimimos en consola el elemento en la posición i del array
  }
}

imprimeArray(["uno", 2, null, 0]); // Imprimimos en consola cada uno de los elementos del array
```

## Ejercicio 3

Crear un método que a partir de un array de calificaciones, filtre las notas aprobatorias y retorne el nuevo array.
aprobadas([50, 80, 100, 69, 70, 10]) // [80, 100, 70]
aprobadas([90, 90, 50, 45, 100, 80]) // [90, 90, 100, 80]

```javascript
// Función que recibe un array de calificaciones y retorna un nuevo array con las notas aprobatorias
function aprobadas(calificaciones) {
  var aprobadas = []; // Inicializamos un array vacío

  for (var i = 0; i < calificaciones.length; i++) {
    // Creamos un bucle for que se ejecutará mientras i sea menor que la longitud del array
    if (calificaciones[i] >= 70) {
      // Si el elemento en la posición i del array es mayor o igual a 70
      aprobadas.push(calificaciones[i]); // Agregamos el elemento en la posición i del array al array aprobadas
    }
  }

  return aprobadas; // Retornamos el array aprobadas
}

console.log(aprobadas([50, 80, 100, 69, 70, 10])); // [80, 100, 70]
console.log(aprobadas([90, 90, 50, 45, 100, 80])); // [90, 90, 100, 80]
```

## Ejercicio 4

Crear un método que reciba un array de nacionalidades y cuente las diferentes nacionalidades que existen.
(México/Argentina/Venezuela/Perú)
contar(["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]);
// Mexicanos: 2
// Venezolanos: 2
// Argentinos: 3
// Peruanos: 2

```javascript
// Función que recibe un array de nacionalidades y cuenta las diferentes nacionalidades que existen
function contar(nacionalidades) {
  var nacionalidadesContadas = {}; // Inicializamos un objeto vacío

  for (var i = 0; i < nacionalidades.length; i++) {
    // Creamos un bucle for que se ejecutará mientras i sea menor que la longitud del array
    if (nacionalidadesContadas[nacionalidades[i]]) {
      // Si el elemento en la posición i del array existe como propiedad del objeto nacionalidadesContadas
      nacionalidadesContadas[nacionalidades[i]]++; // Incrementamos en 1 el valor de la propiedad del objeto nacionalidadesContadas
    } else {
      // Si el elemento en la posición i del array no existe como propiedad del objeto nacionalidadesContadas
      nacionalidadesContadas[nacionalidades[i]] = 1; // Agregamos una propiedad al objeto nacionalidadesContadas con el nombre del elemento en la posición i del array y le asignamos el valor 1
    }
  }

  for (var nacionalidad in nacionalidadesContadas) {
    // Creamos un bucle for in para recorrer las propiedades del objeto nacionalidadesContadas
    console.log(
      nacionalidad + ": " + nacionalidadesContadas[nacionalidad] // Imprimimos en consola el nombre de la propiedad y su valor
    );
  }
}

contar([
  "mexicano",
  "argentino",
  "argentino",
  "venezolano",
  "peruano",
  "mexicano",
  "argentino",
  "peruano",
  "venezolano",
]); // Mexicanos: 2, Venezolanos: 2, Argentinos: 3, Peruanos: 2
```

## Ejercicio 5

Crear un array con el nombre de tus compañeros de clase y posteriormente realizar una función que reciba un nombre y muestre en un alert si se encuentra en la clase o no.

```javascript
// Función que recibe un nombre y muestra un alert diciendo si el nombre se encuentra en el array de compañeros de clase
function estaEnClase(nombre) {
  var clase = ["Cristina", "María", "Javier", "Miguel", "Sergio"]; // Creamos un array con los nombres de los compañeros de clase
  var encontrado = false; // Inicializamos una variable encontrado en false para indicar que no hemos encontrado el nombre en el array

  for (var i = 0; i < clase.length; i++) {
    // Creamos un bucle for que se ejecutará mientras i sea menor que la longitud del array
    if (clase[i] === nombre) {
      // Si el elemento en la posición i del array es igual al nombre que hemos recibido como parámetro
      encontrado = true; // Cambiamos el valor de encontrado a true
    }
  }

  if (encontrado) {
    // Si encontrado es true
    alert("El nombre " + nombre + " se encuentra en la clase"); // Mostramos un alert indicando que el nombre se encuentra en la clase
  } else {
    // Si encontrado es false
    alert("El nombre " + nombre + " no se encuentra en la clase"); // Mostramos un alert indicando que el nombre no se encuentra en la clase
  }
}

estaEnClase("Cristina"); // Llamamos a la función pasando como parámetro el nombre de un compañero
```
