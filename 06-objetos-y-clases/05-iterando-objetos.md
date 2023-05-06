# Iterando objetos

Iterar sobre los objetos es una tarea común en JavaScript y ECMAScript 6 nos ofrece algunas formas nuevas y convenientes de hacerlo. Aquí te explico en detalle cómo puedes iterar sobre objetos en ECMAScript 6:

## for...in

La forma tradicional de iterar sobre los objetos en JavaScript es mediante el uso de la instrucción `for...in`. Esta instrucción recorre todas las propiedades enumerables de un objeto y ejecuta un bloque de código para cada propiedad.

Ejemplo:

```javascript
const persona = {nombre: "Juan", edad: 25};

for(let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
// Resultado: "nombre: Juan"
//           "edad: 25"
```

En este ejemplo, utilizamos la instrucción `for...in` para recorrer las propiedades del objeto `persona`. En cada iteración, mostramos el nombre de la propiedad y su valor utilizando la notación de corchetes.

## Object.keys()

ECMAScript 6 introdujo el método `Object.keys()` que devuelve un array con los nombres de todas las propiedades enumerables de un objeto. Podemos utilizar este método para iterar sobre un objeto de forma más conveniente.

Ejemplo:

```javascript
const persona = {nombre: "Juan", edad: 25};

for(let propiedad of Object.keys(persona)) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
// Resultado: "nombre: Juan"
//           "edad: 25"
```

En este ejemplo, utilizamos el método `Object.keys()` para obtener un array con los nombres de las propiedades del objeto `persona`. Luego, utilizamos un `for...of` loop para iterar sobre el array y mostrar el nombre de la propiedad y su valor.
`

## Object.entries()

ECMAScript 6 también introdujo el método `Object.entries()` que devuelve un array de arrays con el nombre y el valor de todas las propiedades enumerables de un objeto. Podemos utilizar este método para iterar sobre un objeto de forma aún más conveniente.

Ejemplo:

```javascript
const persona = {nombre: "Juan", edad: 25};

for(let [propiedad, valor] of Object.entries(persona)) {
  console.log(`${propiedad}: ${valor}`);
}
// Resultado: "nombre: Juan"
//           "edad: 25"
```

En este ejemplo, utilizamos el método Object.entries() para obtener un array de arrays con los nombres y valores de las propiedades del objeto persona. Luego, utilizamos un for...of loop para iterar sobre el array de arrays y mostrar el nombre de la propiedad y su valor.

## Buenas prácticas

- Cuando iteramos sobre los objetos, es una buena práctica utilizar el método `hasOwnProperty()` para asegurarnos de que la propiedad que estamos iterando pertenece al objeto y no a su prototipo.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `break` para detener el bucle después de encontrar la propiedad que estamos buscando.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `continue` para omitir la propiedad que no nos interesa.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `return` para detener la función después de encontrar la propiedad que estamos buscando.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `throw` para lanzar una excepción después de encontrar la propiedad que estamos buscando.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `yield` para devolver la propiedad que estamos buscando.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `await` para esperar a que se resuelva la propiedad que estamos buscando.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `async` para ejecutar la propiedad que estamos buscando de forma asíncrona.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `async*` para ejecutar la propiedad que estamos buscando de forma asíncrona y devolver un iterador.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `for await...of` para iterar sobre los objetos asíncronos.
- Cuando iteramos sobre los objetos, es una buena práctica utilizar la instrucción `for await...in` para iterar sobre los objetos asíncronos.
