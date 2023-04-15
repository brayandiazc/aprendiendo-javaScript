# Variables en JavaScript

Las variables son elementos esenciales en cualquier lenguaje de programación. En JavaScript, las variables se utilizan para almacenar valores y hacer referencia a ellos en nuestro código.

## Declaración de variables

En JavaScript, podemos declarar variables usando las palabras clave `var`, `let`, o `const`. La diferencia entre estas tres es cómo manejan el alcance y la asignación de valores.

### `var`

La palabra clave `var` se utiliza para declarar variables globales o locales en una función sin importar el bloque en el que se declare.

```js
var miVariable = "Hola mundo";
```

En el ejemplo anterior, la variable `miVariable` es declarada en el ámbito global. Esto significa que la variable `miVariable` puede ser accedida desde cualquier parte del código. También es posible declarar variables e inicializarlas o asignarle valores más adelante.

```js
// Declaración de variables
var nombre;

// Asignación de valores
nombre = "Juan";

// Declaración de variables
var edad, programas, numeroIdentificacion;

// Asignación de valores
edad = 30;
programas = true;
numeroIdentificacion = 123456789;
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

## Buenas prácticas

1. Utiliza nombres descriptivos para tus variables. Por ejemplo, `nombre` es mejor que `n`.
2. Utiliza nombres que sean cortos y concisos.
3. Utiliza nombres que sean fáciles de escribir, leer, pronunciar, recordar y fáciles de buscar en el código.
4. Utiliza nombres en inglés en lo posible.
5. Las variables no deben contener espacios y no pueden contener caracteres especiales.
6. Las variables no deben contener palabras reservadas de JavaScript.
7. Las variables no deben contener nombres de funciones, métodos, clases, objetos, etc.
8. Las variables no deben iniciar con números, pero pueden contenerlos.
9. Los nombres de las variables deben ser en minúsculas, a menos que sean constantes.
10. Los tipos de escritura de las variables deben ser camelCase o snake_case.
