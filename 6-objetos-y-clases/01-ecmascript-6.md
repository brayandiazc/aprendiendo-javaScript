# EcmaScript 6

El estándar ECMAScript 6 (también conocido como ES6 o ECMAScript 2015) es una versión importante de JavaScript que se lanzó en 2015. Esta versión agregó muchas características nuevas y útiles al lenguaje, lo que lo hace más poderoso y fácil de usar.

Aquí hay algunas de las características más importantes de ECMAScript 6:

## Variables

En ES6, se introdujeron dos nuevas formas de declarar variables: `let` y `const`. A diferencia de `var`, `let` y `const` tienen alcances de bloque, lo que significa que solo están disponibles dentro del bloque en el que se declaran.

Ejemplo:

```javascript
// Declaración de variables con let y const
let nombre = "Juan";
const PI = 3.1416;

// Cambio de valor de una variable
nombre = "Pedro"; // Válido
PI = 3.14; // Inválido
```

## Arrow Functions

Las funciones de flecha (también conocidas como funciones lambda) son una forma más concisa de escribir funciones en ES6. Se definen utilizando la sintaxis `() => {}`.

Ejemlo:

```javascript
// Función normal
function sumar(a, b) {
  return a + b;
}

// Función de flecha
const sumar = (a, b) => {
  return a + b;
}
```

## Template Strings (Template Literals)

Las plantillas de cadena (template strings) son una forma más conveniente de crear cadenas de texto en JavaScript. Permiten la interpolación de variables y expresiones dentro de una cadena utilizando la sintaxis `${}`.

Ejemplo:

```javascript
const nombre = "Juan";
const edad = 25;

const mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // Resultado: "Mi nombre es Juan y tengo 25 años."
```

## Desestructuración

La desestructuración es una forma de extraer datos de matrices y objetos en variables separadas. Esto puede ser útil cuando se trabaja con funciones que devuelven matrices u objetos grandes.

Ejemplo:

```javascript
// Desestructuración de objetos
const persona = {nombre: "Juan", edad: 25};
const {nombre, edad} = persona;

console.log(nombre); // Resultado: "Juan"
console.log(edad); // Resultado: 25

// Desestructuración de matrices
const numeros = [1, 2, 3];
const [a, b, c] = numeros;

console.log(a); // Resultado: 1
console.log(b); // Resultado: 2
console.log(c); // Resultado: 3
```

## Clases

ES6 introdujo una nueva sintaxis para definir clases en JavaScript. Las clases permiten crear objetos que tienen propiedades y métodos.

Ejemplo:

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
}

const juan = new Persona("Juan", 25);
juan.saludar(); // Resultado: "Hola, mi nombre es Juan."
```

## Promesas

Las promesas son una forma de manejar tareas asíncronas en JavaScript. Permiten realizar tareas que pueden tardar en completarse, como la obtención de datos de un servidor, y luego realizar una acción cuando se complete la tarea.

Ejemplo:

```javascript
const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = {nombre: "Juan", edad: 25};
      if(datos) {
        resolve(datos);
      } else {
        reject("Error al obtener los datos.");
      }
    }, 2000);
  });
}

obtenerDatos()
  .then((datos) => {
    console.log(datos); // Resultado: {nombre: "Juan", edad: 25}
  })
  .catch((error) => {
    console.error(error); // Resultado: "Error al obtener los datos."
  });
```

En este ejemplo, la función obtenerDatos devuelve una promesa que se resuelve después de 2 segundos y devuelve un objeto con datos simulados. Si la promesa se resuelve correctamente, el método then se llama con los datos obtenidos. Si la promesa se rechaza, el método catch se llama con un mensaje de error.

Espero que esto te ayude a entender cómo funcionan las promesas en ECMAScript 6.
