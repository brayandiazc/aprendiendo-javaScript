# Programación orientada a objetos (POO)

La programación orientada a objetos es un paradigma de programación que se basa en el uso de objetos que interactúan entre sí para resolver un problema. Los objetos pueden tener propiedades y métodos que los definen, y se pueden crear nuevas instancias de un objeto a partir de una clase que lo define.

**Ejemplo:**

Supongamos que queremos crear una aplicación que permita almacenar información sobre estudiantes de una escuela. Cada estudiante tendrá un nombre, una edad y una nota promedio. Para ello, podemos crear una clase `Estudiante` que defina las propiedades y métodos que tendrá cada estudiante:

```javascript
class Estudiante {
  constructor(nombre, edad, notaPromedio) {
    this.nombre = nombre;
    this.edad = edad;
    this.notaPromedio = notaPromedio;
  }

  obtenerNombre() {
    return this.nombre;
  }

  obtenerEdad() {
    return this.edad;
  }

  obtenerNotaPromedio() {
    return this.notaPromedio;
  }

  establecerNotaPromedio(notaPromedio) {
    this.notaPromedio = notaPromedio;
  }
}
```

En esta clase, creamos un constructor que recibe los parámetros `nombre`, `edad` y `notaPromedio` y los asigna a las propiedades `nombre`, `edad` y `notaPromedio` de la instancia. Luego, creamos métodos que nos permiten obtener y establecer las propiedades de la instancia.

Para crear un nuevo estudiante, podemos crear una nueva instancia de la clase `Estudiante` y asignarle los valores correspondientes:

```javascript
const juan = new Estudiante("Juan", 15, 8.5);
```

En este ejemplo, creamos una instancia de la clase `Estudiante` con el nombre `"Juan"`, la edad `15` y la nota promedio `8.5`.

Luego, podemos utilizar los métodos de la instancia para obtener o establecer sus propiedades:

```javascript
console.log(juan.obtenerNombre()); // Resultado: "Juan"
console.log(juan.obtenerEdad()); // Resultado: 15
console.log(juan.obtenerNotaPromedio()); // Resultado: 8.5

juan.establecerNotaPromedio(9);
console.log(juan.obtenerNotaPromedio()); // Resultado: 9
```

En este ejemplo, utilizamos los métodos `obtenerNombre`, `obtenerEdad` y `obtenerNotaPromedio` para obtener las propiedades de la instancia `juan`. Luego, utilizamos el método `establecerNotaPromedio` para cambiar la nota promedio de juan y mostramos el resultado en la consola.

Con la programación orientada a objetos, podemos crear clases y objetos que nos permiten modelar situaciones de la vida real y resolver problemas de manera más eficiente y organizada.

## Buenas prácticas

- Utiliza `const` para declarar variables que no cambiarán su valor y `let` para las que sí lo harán.
- Utiliza `class` para definir clases y `new` para crear nuevas instancias de una clase.
- Utiliza `this` para referirte a la instancia actual de una clase.
- Utiliza `constructor` para definir el constructor de una clase.
- Utiliza `extends` para crear una clase que herede de otra clase.
- Utiliza `super` para llamar al constructor de la clase padre.
- Utiliza `extends` para crear una clase que herede de otra clase.
