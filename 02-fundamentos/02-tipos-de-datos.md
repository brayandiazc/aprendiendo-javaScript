# Tipos de datos en JavaScript

En JavaScript, existen varios tipos de datos que se pueden utilizar para almacenar información en variables.

* `string`
* `number`
* `boolean`
* `undefined`
* `null`
* `symbol`
* `bigint`
* `array`
* `object`

## Tipo de dato `string`

El tipo de datos `string` o cadena de caracteres se utiliza para representar texto.

```js
var nombre = "Juan";
var apellido = "Pérez";
var nombreCompleto = nombre + " " + apellido;
```

También se pueden utilizar caracteres especiales en las cadenas de texto, como saltos de línea y tabulaciones, utilizando secuencias de escape.

```js
var mensaje = "Este es un mensaje\nen dos líneas.";
var titulo = "Página principal\t\tMi sitio web";
```

## Tipo de dato `number`

El tipo de datos `number` o numérico se utiliza para representar números enteros y decimales.

```js
var numeroEntero = 42;
var numeroDecimal = 3.14;
```

## Tipo de dato `boolean`

El tipo de datos `boolean` o booleano se utiliza para representar valores lógicos, es decir, verdadero o falso.

```js
var esMayorDeEdad = true;
var tieneLicencia = false;
```

## Tipo de dato `undefined`

El tipo de datos `undefined` se utiliza para representar un valor no definido.

```js
var valorNoDefinido;
```

## Tipo de dato `null`

El tipo de datos `null` se utiliza para representar un valor nulo o vacío.

```js
var valorNulo = null;
```

## Tipo de dato `symbol`

El tipo de datos `symbol` se utiliza para representar un valor único e inmutable.

```js
var simbolo = Symbol("mi-simbolo");
```

## Tipo de dato `bigint`

El tipo de datos `bigint` se utiliza para representar números enteros de gran tamaño.

```js
var numeroEnteroGrande = 9007199254740991n;
```

## Tipo de dato `Array`

El tipo de datos `Array` o arreglo se utiliza para representar una colección de datos ordenados.

```js
var frutas = ["manzana", "naranja", "plátano"];
var numeros = [1, 2, 3, 4, 5];
```

## Tipo de dato `object`

El tipo de datos `object` o objeto se utiliza para representar una colección de datos.

```js
var persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  programas: true,
  numeroIdentificacion: 123456789,
  bandasFavoritas: ["The Beatles", "Led Zeppelin", "Queen"],
};
```

## Buenas prácticas

Para saber cual es el tipo de dato de una variable, podemos utilizar el operador `typeof`.

```javascript
var nombre = "Juan";
console.log(typeof nombre); // string

var edad = 30;
console.log(typeof edad); // number

var programas = true;
console.log(typeof programas); // boolean

var valorNoDefinido;
console.log(typeof valorNoDefinido); // undefined

var valorNulo = null;
console.log(typeof valorNulo); // object

var simbolo = Symbol("mi-simbolo");
console.log(typeof simbolo); // symbol

var numeroEnteroGrande = 9007199254740991n;
console.log(typeof numeroEnteroGrande); // bigint

var frutas = ["manzana", "naranja", "plátano"];
console.log(typeof frutas); // object

var persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  programas: true,
  numeroIdentificacion: 123456789,
  bandasFavoritas: ["The Beatles", "Led Zeppelin", "Queen"],
};
console.log(typeof persona); // object
```
