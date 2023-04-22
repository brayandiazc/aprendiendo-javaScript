# Arrow Functions

Las arrow functions son una forma más concisa de definir funciones en JavaScript. En lugar de usar la palabra clave `function`, se usan flechas `=>`.

La sintaxis general es la siguiente:

```javascript
(param1, param2, …, paramN) => { sentencias }
```

- Los parámetros se escriben dentro de los paréntesis y están separados por comas.
- La flecha `=>` separa los parámetros de las sentencias de la función.
- Si la función no recibe parámetros, se escriben los paréntesis vacíos `()`.
- Si la función solo tiene una sentencia, no es necesario usar llaves `{}` y se puede omitir el `return`.
- Si la función tiene múltiples sentencias, es necesario usar llaves `{}` y también incluir el `return` explícitamente.

Si la función tiene un solo parámetro, los paréntesis pueden ser omitidos:

```javascript
param => { sentencias }
```

Si la función tiene un solo parámetro y una sola sentencia, los paréntesis pueden ser omitidos y la sentencia puede ser omitida:

```javascript
param => sentencia
```

Si la función no tiene parámetros, los paréntesis deben ser omitidos:

```javascript
() => { sentencias }
```

Si la función no tiene parámetros y una sola sentencia, los paréntesis pueden ser omitidos y la sentencia puede ser omitida:

```javascript
() => sentencia
```

## Ejemplos de Arrow Functions

A continuación, algunos ejemplos de arrow functions:

```javascript
// Función que suma dos números
const suma = (a, b) => a + b;

// Función que eleva un número al cuadrado
const cuadrado = num => num ** 2;

// Función que devuelve el doble de un número
const doble = num => {
  const resultado = num * 2;
  return resultado;
};
```

En el primer ejemplo, se define una función que recibe dos parámetros y devuelve la suma de ambos. Como la función solo tiene una sentencia, se puede omitir las llaves `{}` y el `return`.

En el segundo ejemplo, se define una función que recibe un número y devuelve su cuadrado. Como la función solo tiene una sentencia, se pueden omitir las llaves `{}` y el `return`.

En el tercer ejemplo, se define una función que recibe un número y devuelve su doble. Como la función tiene múltiples sentencias, se deben usar llaves `{}` y se debe incluir el `return` explícitamente.

## Ventajas de las Arrow Functions

- Son más concisas y fáciles de leer que las funciones tradicionales.
- Tienen un contexto léxico this más claro y predecible que las funciones tradicionales.
- Permiten crear funciones anónimas de manera más simple y elegante.

## Desventajas de las Arrow Functions

- No pueden ser usadas como constructores (no tienen un objeto `prototype`).
- No tienen un `arguments` propio, por lo que si se desea acceder a los argumentos de la función, se deben usar argumentos predeterminados o rest parameters.
