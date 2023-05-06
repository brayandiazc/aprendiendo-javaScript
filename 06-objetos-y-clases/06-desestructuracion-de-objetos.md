# Desestructuración de objetos

La desestructuración de objetos es una característica de ECMAScript 6 que nos permite extraer valores de un objeto y asignarlos a variables individuales en una sola línea de código. Aquí te explico en detalle cómo funciona la desestructuración de objetos en JavaScript:

## Sintaxis básica

La sintaxis básica de la desestructuración de objetos implica crear una variable para cada propiedad del objeto que se desea extraer. Las variables se crean dentro de un objeto literal con el mismo nombre que la propiedad.

Ejemplo:

```javascript
const persona = {nombre: "Juan", edad: 25};

const {nombre, edad} = persona;

console.log(nombre); // Resultado: "Juan"
console.log(edad); // Resultado: 25
```

En este ejemplo, utilizamos la sintaxis de desestructuración para extraer las propiedades `nombre` y `edad` del objeto `persona`. Las variables se crean automáticamente con el mismo nombre que las propiedades, lo que nos permite acceder a ellas directamente.

## Asignación de alias

Podemos asignar un nombre de variable diferente al nombre de la propiedad utilizando la sintaxis de alias.

Ejemplo:

```javascript
const persona = {nombre: "Juan", edad: 25};

const {nombre: primerNombre, edad: años} = persona;

console.log(primerNombre); // Resultado: "Juan"
console.log(años); // Resultado: 25
```

En este ejemplo, utilizamos la sintaxis de alias para asignar el nombre `primerNombre` a la propiedad `nombre` y el nombre `años` a la propiedad `edad`.

## Valores por defecto

Podemos proporcionar valores por defecto para las propiedades que no existen en el objeto utilizando la sintaxis de valores por defecto.

Ejemplo:

```javascript
const persona = {nombre: "Juan"};

const {nombre, edad = 25} = persona;

console.log(nombre); // Resultado: "Juan"
console.log(edad); // Resultado: 25 (por defecto)
```

En este ejemplo, utilizamos la sintaxis de valores por defecto para asignar un valor por defecto de `25` a la propiedad `edad`. Como la propiedad `edad` no existe en el objeto persona, se asigna automáticamente el valor por defecto.

## Desestructuración de objetos anidados

También podemos utilizar la desestructuración de objetos para extraer propiedades de objetos anidados.

Ejemplo:

```javascript
const persona = {nombre: "Juan", edad: 25, dirección: {calle: "Av. Principal", número: 123}};

const {nombre, edad, dirección: {calle, número}} = persona;

console.log(nombre); // Resultado: "Juan"
console.log(edad); // Resultado: 25
console.log(calle); // Resultado: "Av. Principal"
console.log(número); // Resultado: 123
```

En este ejemplo, utilizamos la desestructuración de objetos para extraer las propiedades `nombre`, `edad`, `calle` y `número` del objeto `persona`. La propiedad `dirección` se desestructura automáticamente y se extraen sus propias propiedades.

## Buenas prácticas

- La desestructuración de objetos es una característica muy útil de ECMAScript 6, pero debemos utilizarla con moderación.
- Si utilizamos la desestructuración de objetos en exceso, nuestro código puede volverse difícil de leer y mantener.
- La desestructuración de objetos es especialmente útil cuando trabajamos con funciones que devuelven objetos grandes con muchas propiedades.
- La desestructuración de objetos también es útil cuando trabajamos con funciones que reciben objetos grandes con muchas propiedades.
