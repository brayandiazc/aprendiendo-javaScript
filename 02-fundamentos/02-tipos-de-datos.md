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

## `string`

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

## `number`

El tipo de datos `number` o numérico se utiliza para representar números enteros y decimales.

```js
var numeroEntero = 42;
var numeroDecimal = 3.14;
```

## `boolean`

El tipo de datos `boolean` o booleano se utiliza para representar valores lógicos, es decir, verdadero o falso.

```js
var esMayorDeEdad = true;
var tieneLicencia = false;
```

## `undefined`

El tipo de datos `undefined` se utiliza para representar un valor no definido.

```js
var valorNoDefinido;
```

## `null`

El tipo de datos `null` se utiliza para representar un valor nulo o vacío.

```js
var valorNulo = null;
```

## `symbol`

El tipo de datos `symbol` se utiliza para representar un valor único e inmutable.

```js
var simbolo = Symbol("mi-simbolo");
```

## `bigint`

El tipo de datos `bigint` se utiliza para representar números enteros de gran tamaño.

```js
var numeroEnteroGrande = 9007199254740991n;
```

## `Array`

El tipo de datos `Array` o arreglo se utiliza para representar una colección de datos ordenados.

```js
var frutas = ["manzana", "naranja", "plátano"];
var numeros = [1, 2, 3, 4, 5];
```

## `object`

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