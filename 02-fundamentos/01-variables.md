# Variables en JavaScript

Las variables son elementos esenciales en cualquier lenguaje de programación. En JavaScript, las variables se utilizan para almacenar valores y hacer referencia a ellos en nuestro código.

## Declaración de variables

En JavaScript, podemos declarar variables usando las palabras clave `var`, `let`, o `const`. La diferencia entre estas tres es cómo manejan el alcance y la asignación de valores.

### `var`

La palabra clave `var` se utiliza para declarar variables globales o locales en una función sin importar el bloque en el que se declare.

```js
var miVariable = "Hola mundo";
```

### `let`

La palabra clave `let` se utiliza para declarar variables locales en un bloque, declaración o expresión, y solo está disponible dentro del bloque en el que se declara.

```js
let miVariable = "Hola mundo";
```

### `const`

La palabra clave `const` se utiliza para declarar variables de solo lectura que no pueden ser reasignadas. El valor de una variable `const` no puede cambiar a lo largo de la ejecución del programa.

```js
const miVariable = "Hola mundo";
```

### Ejemplo

Cuando usar `var`, `let` o `const`?

Depende de la situación. Si deseas declarar una variable global, usa `var`. Si deseas declarar una variable local, usa `let`. Si deseas declarar una variable de solo lectura, usa `const`.

```javascript
// Declaración de variables
var nombre = "Juan";
let paisDeResidencia = "España";
const edad = 30;
var programas = true;
const numeroIdentificacion = 123456789;
let bandasFavoritas = ["The Beatles", "Led Zeppelin", "Queen"];

// Creación de objeto
const persona = {
  nombre: nombre,
  paisDeResidencia: paisDeResidencia,
  edad: edad,
  programas: programas,
  numeroIdentificacion: numeroIdentificacion,
  bandasFavoritas: bandasFavoritas,
};

console.log(persona);
```
