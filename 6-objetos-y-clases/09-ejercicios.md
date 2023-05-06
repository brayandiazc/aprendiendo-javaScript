# Ejercicios Objeto y Clases

Esta sección contiene ejercicios para practicar los conceptos aprendidos en la sección de Objetos y Clases.

## Objeto y Clases

Los ejercicios de esta sección se basan en el uso de objetos y clases.

### Ejercicio 1 - EcmaScript 6

Crea una función que reciba un array de números y utilice la sintaxis de arrow functions para filtrar solo los números pares y retornar un nuevo array con los resultados.

**Solución:**

```javascript
const filtrarNumerosPares = numeros => numeros.filter(num => num % 2 === 0);

const numeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarNumerosPares(numeros)); // Resultado: [2, 4, 6]
```

En esta solución, utilizamos la sintaxis de arrow functions para crear una función `filtrarNumerosPares` que toma un array de `numeros` y utiliza el método `filter` para filtrar solo los números pares. Luego, llamamos a la función con el array `[1, 2, 3, 4, 5, 6]` y mostramos el resultado en la consola.

**Desafío adicional:**

Modifica la función para que también reciba un segundo parámetro que indique si se deben filtrar los números impares en lugar de los pares.

### Ejercicio 2 - Declaración con let y const

Crea una función que utilice la sintaxis de `let` y `const` para almacenar un objeto con los datos de una persona, incluyendo su nombre, edad y profesión. Luego, utiliza la sintaxis de string templates para crear un mensaje personalizado que incluya la información de la persona.

**Solución:**

```javascript
const crearMensaje = (nombre, edad, profesion) => {
  const persona = {
    nombre,
    edad,
    profesion
  };

  const mensaje = `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y soy ${persona.profesion}.`;

  return mensaje;
};

console.log(crearMensaje("Juan", 25, "Desarrollador")); // Resultado: "Hola, mi nombre es Juan, tengo 25 años y soy Desarrollador."
```

En esta solución, creamos una función `crearMensaje` que toma tres parámetros `nombre`, `edad` y `profesion` y utiliza la sintaxis de `let` y `const` para almacenar un objeto `persona` con los datos. Luego, utiliza la sintaxis de string templates para crear un mensaje personalizado que incluya la información de la persona. Finalmente, llamamos a la función con los valores `"Juan"`, `25` y `"Desarrollador"` y mostramos el resultado en la consola.

**Desafío adicional:**

Modifica la función para que permita que los valores de `nombre`, `edad` y profesion sean opcionales y proporciona valores por defecto en caso de que no se proporcionen.

### Ejercicio 3 - String templates

Crea una función que utilice la sintaxis de string templates para crear un mensaje personalizado que incluya la información de una persona, incluyendo su nombre, edad y profesión.

**Solución:**

```javascript
const crearMensaje = (nombre, edad, profesion) => `Hola, mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.`;

console.log(crearMensaje("Juan", 25, "Desarrollador")); // Resultado: "Hola, mi nombre es Juan, tengo 25 años y soy Desarrollador."
```

En esta solución, creamos una función `crearMensaje` que toma tres parámetros nombre, `edad` y `profesion` y utiliza la sintaxis de string templates para crear un mensaje personalizado que incluya la información de la persona. Luego, llamamos a la función con los valores `"Juan"`, `25` y `"Desarrollador"` y mostramos el resultado en la consola.

**Desafío adicional:**

Modifica la función para que también incluya la información del país de origen de la persona. Si la persona no tiene un país de origen definido, muestra un mensaje genérico que indique que no se dispone de esta información.

### Ejercicio 4 - Objetos

Crea una función que utilice la sintaxis de objetos para almacenar la información de una persona, incluyendo su nombre, edad y profesión. Luego, utiliza la notación de punto para mostrar cada propiedad del objeto en la consola.

**Solución:**

```javascript
const crearPersona = (nombre, edad, profesion) => {
  const persona = {
    nombre,
    edad,
    profesion
  };

  console.log(persona.nombre);
  console.log(persona.edad);
  console.log(persona.profesion);
};

crearPersona("Juan", 25, "Desarrollador"); // Resultado: "Juan", 25, "Desarrollador"
```

En esta solución, creamos una función `crearPersona` que toma tres parámetros `nombre`, `edad` y `profesion` y utiliza la sintaxis de objetos para almacenar la información en un objeto `persona`. Luego, utilizamos la notación de punto para mostrar cada propiedad del objeto en la consola. Finalmente, llamamos a la función con los valores `"Juan"`, `25` y `"Desarrollador"`.

**Desafío adicional:**

Modifica la función para que la información de la persona sea ingresada por el usuario a través de una ventana de diálogo.

### Ejercicio 5 - Iterando objetos

Crea una función que utilice la sintaxis de `for...in` para recorrer las propiedades de un objeto y mostrar cada propiedad y su valor en la consola.

**Solución:**

```javascript
const mostrarPropiedades = objeto => {
  for(let propiedad in objeto) {
    console.log(`${propiedad}: ${objeto[propiedad]}`);
  }
};

const persona = {nombre: "Juan", edad: 25, profesion: "Desarrollador"};
mostrarPropiedades(persona); // Resultado: "nombre: Juan", "edad: 25", "profesion: Desarrollador"
```

En esta solución, creamos una función `mostrarPropiedades` que utiliza la sintaxis de `for...in` para recorrer las propiedades de un objeto y mostrar cada propiedad y su valor en la consola. Luego, creamos un objeto `persona` con las propiedades `nombre`, `edad` y `profesion`, y llamamos a la función `mostrarPropiedades` con el objeto `persona`.

**Desafío adicional:**

Modifica la función para que también pueda recorrer las propiedades de un objeto anidado y mostrar su valor en la consola.

### Ejercicio 6 - Desestructuración de objetos

Crea una función que utilice la sintaxis de desestructuración de objetos para tomar un objeto con las propiedades `nombre` y `edad`, y mostrar cada propiedad en la consola.

**Solución:**

```javascript
const mostrarPropiedades = ({nombre, edad}) => {
  console.log(nombre);
  console.log(edad);
};

const persona = {nombre: "Juan", edad: 25};
mostrarPropiedades(persona); // Resultado: "Juan", 25
```

En esta solución, creamos una función `mostrarPropiedades` que utiliza la sintaxis de desestructuración de objetos para tomar un objeto con las propiedades `nombre y edad`, y mostrar cada propiedad en la consola. Luego, creamos un objeto `persona` con las propiedades `nombre y edad`, y llamamos a la función `mostrarPropiedades` con el objeto `persona`.

**Desafío adicional:**

Modifica la función para que tenga un segundo parámetro que indique cuál propiedad se debe mostrar en la consola.

### Ejercicio 7 - Desestructuración de arrays

Crea una función que utilice la sintaxis de desestructuración de arrays para tomar un array con tres elementos y mostrar cada elemento en la consola.

**Solución:**

```javascript
const mostrarElementos = ([elemento1, elemento2, elemento3]) => {
  console.log(elemento1);
  console.log(elemento2);
  console.log(elemento3);
};

const miArray = ["Manzana", "Banana", "Naranja"];
mostrarElementos(miArray); // Resultado: "Manzana", "Banana", "Naranja"
```

En esta solución, creamos una función `mostrarElementos` que utiliza la sintaxis de desestructuración de arrays para tomar un array con tres elementos y mostrar cada elemento en la consola. Luego, creamos un array `miArray` con tres elementos y llamamos a la función `mostrarElementos` con el array `miArray`.

**Desafío adicional:**

Modifica la función para que tenga un segundo parámetro que indique el número de elementos que se deben mostrar en la consola.

### Ejercicio 8 - Clases

Crea una clase `Persona` con las propiedades `nombre` y `edad`, y un método saludar que muestre un mensaje personalizado en la consola.

**Solución:**

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const juan = new Persona("Juan", 25);
juan.saludar(); // Resultado: "Hola, mi nombre es Juan y tengo 25 años."
```

En esta solución, creamos una clase Persona con un constructor que recibe los parámetros nombre y edad y los asigna a las propiedades nombre y edad de la instancia. Luego, creamos un método saludar que muestra un mensaje personalizado en la consola utilizando las propiedades nombre y edad. Finalmente, creamos una instancia de la clase Persona con el nombre juan y la edad 25, y llamamos al método saludar de la instancia.

**Desafío adicional:**

Modifica la clase `Persona` para que también tenga una propiedad `profesion`, y modifica el método `saludar` para que incluya la información de la profesión de la persona.
