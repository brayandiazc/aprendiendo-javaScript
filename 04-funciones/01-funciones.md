# Funciones en JavaScript

Las funciones son bloques de código reutilizable que se pueden llamar en cualquier momento durante la ejecución del programa. En JavaScript, puedes definir funciones de varias maneras, pero la más común es utilizando la palabra clave `function`.

```javascript
// Función que imprime un mensaje en la consola
function saludar() {
  console.log("Hola, bienvenido!");
}

// Llamada a la función
saludar(); // Hola, bienvenido!
```

En este ejemplo, hemos definido una función llamada `saludar` que no recibe parámetros. Cuando se llama a la función, se muestra en la consola "Hola, bienvenido!".

```javascript
// Definición de una función con un solo parámetro
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

// Llamada a la función
saludar("Juan"); // Hola, Juan!
```

En este ejemplo, hemos definido una función llamada `saludar` que acepta un parámetro `nombre`. Cuando se llama a la función, el valor del parámetro se concatena con el mensaje "Hola, " y se muestra en la consola.

## Parámetros y argumentos

Una función puede recibir cero o más parámetros. Los parámetros son variables que se utilizan dentro de la función para realizar algún tipo de operación.

```javascript
// Definición de una función con dos parámetros
function saludar(nombre, apellido) {
  console.log("Hola, " + nombre + " " + apellido + "!");
}

// Llamada a la función
saludar("Juan", "Pérez"); // Hola, Juan Pérez!
```

La función `saludar` definida en el ejemplo es una función que acepta dos parámetros: `nombre` y `apellido`. Cuando se llama a la función con los valores "Juan" y "Pérez", se concatena el valor de `nombre` con el valor de `apellido` y se muestra el mensaje "Hola, Juan Pérez!" en la consola.

```javascript
// Definición de una función con dos parámetros
function sumar(a, b) {
  var resultado = a + b;
  console.log("El resultado de la suma es: " + resultado);
}

// Llamada a la función
sumar(5, 7); // El resultado de la suma es: 12
```

En este ejemplo, hemos definido una función llamada `sumar` que acepta dos parámetros `a` y `b`. Cuando se llama a la función, los valores de `a` y `b` se suman y se muestra el resultado en la consola.

## Retorno de valores

Una función puede devolver un valor utilizando la palabra clave `return`. Cuando una función devuelve un valor, se puede asignar a una variable o utilizar como parte de una expresión.

```javascript
// Definición de una función que devuelve un valor
function sumar(a, b) {
  return a + b;
}

// Llamada a la función
var resultado = sumar(5, 7);
console.log("El resultado de la suma es: " + resultado); // El resultado de la suma es: 12
```

En este ejemplo, hemos definido una función llamada `sumar` que acepta dos parámetros `a` y `b`. Cuando se llama a la función, los valores de `a` y `b` se suman y se devuelve el resultado.

```javascript
// Definición de una función que devuelve un valor
function sumar(a, b) {
  return a + b;
}

// Llamada a la función
console.log("El resultado de la suma es: " + sumar(5, 7)); // El resultado de la suma es: 12
```

En este ejemplo, hemos definido una función llamada `sumar` que acepta dos parámetros `a` y `b`. Cuando se llama a la función, los valores de `a` y `b` se suman y se devuelve el resultado. En este caso, el resultado se muestra en la consola utilizando la función `console.log`.

```javascript
// Definición de una función que devuelve un valor
function multiplicar(a, b) {
  return a * b;
}

// Llamada a la función y asignación del valor de retorno a una variable
var resultado = multiplicar(3, 4);
console.log("El resultado de la multiplicación es: " + resultado); // El resultado de la multiplicación es: 12
```

En este ejemplo, hemos definido una función llamada `multiplicar` que acepta dos parámetros `a` y `b`. Cuando se llama a la función, los valores de `a` y `b` se multiplican y se devuelve el resultado. Luego, el valor de retorno se asigna a una variable llamada `resultado` y se muestra en la consola.

## Funciones anónimas

Una función anónima es una función que no tiene un nombre. En JavaScript, las funciones anónimas se utilizan principalmente como argumentos de otras funciones.

```javascript
// Definición de una función anónima como parámetro de otra función
setTimeout(function() {
  console.log("Han pasado 5 segundos");
}, 5000);
```

En este ejemplo, hemos utilizado la función `setTimeout` para ejecutar una función anónima después de 5 segundos. La función anónima no tiene nombre, pero se define dentro de la llamada a `setTimeout` y muestra un mensaje en la consola después de que han pasado los 5 segundos.

Espero que esta guía te haya sido útil para entender cómo trabajar con funciones en JavaScript. ¡A programar!
