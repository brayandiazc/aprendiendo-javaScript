# Clases

Las clases son una característica importante de ECMAScript 6 que nos permiten crear objetos y definir comportamientos relacionados en una sola entidad. Aquí te explico en detalle cómo funcionan las clases en JavaScript:

## Declaración de clases

La declaración de una clase en ECMAScript 6 utiliza la palabra clave `class`. El cuerpo de la clase contiene propiedades y métodos.

Ejemplo:

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
}

const persona = new Persona("Juan", 25);
console.log(persona.nombre); // Resultado: "Juan"
console.log(persona.edad); // Resultado: 25
persona.saludar(); // Resultado: "Hola, mi nombre es Juan."
```

En este ejemplo, creamos una clase `Persona` con un constructor que define las propiedades `nombre` y `edad`, y un método `saludar` que imprime un mensaje en la consola. Luego, creamos un objeto `persona` de la clase `Persona` utilizando el constructor y accedemos a sus propiedades y método.

## Herencia de clases

Las clases en ECMAScript 6 también admiten la herencia, lo que nos permite crear una nueva clase basada en una clase existente.

Ejemplo:
    
```javascript
class Empleado extends Persona {
  constructor(nombre, edad, trabajo) {
    super(nombre, edad);
    this.trabajo = trabajo;
  }

  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre} y trabajo como ${this.trabajo}.`);
  }
}

const empleado = new Empleado("Ana", 30, "desarrollador");
console.log(empleado.nombre); // Resultado: "Ana"
console.log(empleado.edad); // Resultado: 30
console.log(empleado.trabajo); // Resultado: "desarrollador"
empleado.saludar(); // Resultado: "Hola, mi nombre es Ana."
empleado.presentarse(); // Resultado: "Hola, mi nombre es Ana y trabajo como desarrollador."
```

En este ejemplo, creamos una clase `Empleado` que hereda de la clase `Persona`. El constructor de la clase `Empleado` llama al constructor de la clase `Persona` utilizando la palabra clave `super`, y define una nueva propiedad trabajo. Además, la clase `Empleado` tiene un método `presentarse` que utiliza las propiedades de `Persona` y `Empleado`. Luego, creamos un objeto `empleado` de la clase `Empleado` utilizando el constructor y accedemos a sus propiedades y métodos.

## Métodos estáticos

ECMAScript 6 también nos permite definir métodos estáticos en las clases. Los métodos estáticos son métodos que pertenecen a la clase en sí y no a sus instancias.

Ejemplo:

```javascript
class Utilidades {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Utilidades.sumar(2, 3)); // Resultado: 5
```

En este ejemplo, creamos una clase `Utilidades` con un método estático `sumar`. El método `sumar` no utiliza la palabra clave `this`, ya que no pertenece a ninguna instancia de la clase. En su lugar, se llama al método utilizando el nombre de la clase.

## Buenas prácticas

- Utiliza la palabra clave `class` para declarar una clase.
- Utiliza el método `constructor` para inicializar las propiedades de una clase.
- Utiliza la palabra clave `extends` para crear una clase que herede de otra clase.
- Utiliza la palabra clave `super` para llamar al constructor de la clase padre.
- Utiliza la palabra clave `static` para definir métodos estáticos.
- Utiliza la palabra clave `this` para acceder a las propiedades y métodos de una clase.
- Utiliza la palabra clave `new` para crear un objeto de una clase.
- Utiliza la palabra clave `instanceof` para comprobar si un objeto es una instancia de una clase.
