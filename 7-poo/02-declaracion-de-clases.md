# Declaración de clases

La declaración de clases en JavaScript se introdujo en ECMAScript 6 como una forma de definir objetos que contienen propiedades y métodos relacionados. Una clase es una plantilla que se utiliza para crear objetos y define cómo se deben crear y manipular esos objetos. Las clases pueden heredar propiedades y métodos de otras clases, lo que las hace muy útiles para modelar situaciones complejas.

**Ejemplo:**

Supongamos que queremos crear una clase `Persona` que defina las propiedades y métodos básicos de una persona, como su nombre y edad. Podemos crear una `clase` utilizando la sintaxis class de la siguiente manera:

```javascript
// Definir la clase Persona
class Persona {
  // Constructor que toma nombre y edad como argumentos
  constructor(nombre, edad) {
    // Asignar los argumentos a las propiedades correspondientes
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método para presentarse
  presentarse() {
    // Imprimir un mensaje en la consola que incluye el nombre y la edad de la persona
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```

En esta clase, creamos un constructor que recibe los parámetros `nombre` y `edad` y los asigna a las propiedades `nombre` y `edad` de la instancia. Luego, creamos un método `presentarse` que muestra un mensaje personalizado en la consola utilizando las propiedades `nombre` y `edad`.

Para crear una nueva instancia de la clase Persona, podemos utilizar la sintaxis new Persona:

```javascript
// Crear una nueva instancia de la clase Persona con nombre "Juan" y edad 25
const juan = new Persona("Juan", 25);
```

En este ejemplo, creamos una nueva instancia de la clase `Persona` con el nombre `"Juan"` y la edad `25`.

Luego, podemos utilizar los métodos de la instancia para acceder y modificar sus propiedades:

```javascript
console.log(juan.nombre); // Resultado: "Juan"
console.log(juan.edad); // Resultado: 25

juan.edad = 26;
console.log(juan.edad); // Resultado: 26

juan.presentarse(); // Resultado: "Hola, mi nombre es Juan y tengo 26 años."
```

En este ejemplo, utilizamos la notación de punto para acceder a las propiedades `nombre` y `edad` de la instancia `juan`. Luego, utilizamos la misma notación para modificar la propiedad `edad` de `juan` y mostrar el resultado en la consola. Finalmente, llamamos al método `presentarse` de la instancia para mostrar un mensaje personalizado en la consola.

La declaración de clases en JavaScript nos permite crear objetos complejos con facilidad y organizar nuestro código de una manera clara y estructurada.

## Buenas prácticas

- Las clases deben tener nombres en singular y en mayúscula.
- Las clases deben tener un constructor que reciba los parámetros necesarios para crear una nueva instancia.
- Las clases deben tener métodos que permitan acceder y modificar sus propiedades.
- Las clases deben tener métodos que permitan realizar acciones con sus propiedades.
- Las clases deben tener métodos que permitan acceder y modificar sus propiedades.
- Las clases deben tener métodos que permitan realizar acciones con sus propiedades.
