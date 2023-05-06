# String templates (Template Literals)

Los string templates son una característica de ECMAScript 6 que nos permiten crear cadenas de texto de forma más legible y fácil de mantener. Aquí te explico en detalle cómo funcionan los string templates:

## Sintaxis

Los string templates se definen con comillas graves (```) en lugar de comillas simples o dobles. Dentro de un string template, podemos incluir variables, expresiones y otros strings utilizando la sintaxis `${}`.

Ejemplo:

```javascript
const nombre = "Juan";
const edad = 25;

const mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // Resultado: "Mi nombre es Juan y tengo 25 años."
```

En este ejemplo, creamos una cadena de texto que incluye variables `nombre` y `edad`. Utilizamos la sintaxis `${}` para incluir las variables dentro del string.

## Multilínea

Los string templates también nos permiten crear cadenas de texto multilínea. Esto significa que podemos crear cadenas de texto que contienen saltos de línea sin tener que utilizar caracteres especiales como `\n`.

Ejemplo:

```javascript
const mensaje = `
  Hola,
  Bienvenido al sitio web.
  Gracias por visitarnos.
`;
console.log(mensaje);
// Resultado:
// "Hola,
//  Bienvenido al sitio web.
//  Gracias por visitarnos."
```

En este ejemplo, creamos una cadena de texto multilínea utilizando comillas graves. No es necesario utilizar caracteres de escape o concatenación para crear una cadena de texto multilínea.

## Tagged Templates

Además de los string templates regulares, ECMAScript 6 también introdujo los tagged templates. Los tagged templates son una forma de personalizar el procesamiento de una cadena de texto.

Ejemplo:

```javascript
function etiqueta(strings, ...expresiones) {
  console.log(strings); // Resultado: ["Mi nombre es ", " y tengo ", " años."]
  console.log(expresiones); // Resultado: ["Juan", 25]
  return "Mensaje personalizado";
}

const nombre = "Juan";
const edad = 25;

const mensaje = etiqueta`Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // Resultado: "Mensaje personalizado"
```

En este ejemplo, creamos una función `etiqueta` que toma una cadena de texto y una serie de expresiones. La función muestra los strings y expresiones en la consola y devuelve un mensaje personalizado. Luego, utilizamos el string template con la función `etiqueta` para procesar la cadena de texto.

Espero que esta explicación te haya sido útil. Los string templates son una característica muy útil de ECMAScript 6 que nos permite crear cadenas de texto de forma más legible y fácil de mantener.

## Buenas prácticas

- Utiliza string templates para crear cadenas de texto de forma más legible y fácil de mantener.
- Utiliza tagged templates para personalizar el procesamiento de una cadena de texto.
