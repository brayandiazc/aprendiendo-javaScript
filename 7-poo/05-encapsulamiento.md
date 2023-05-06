# Encapsulamiento en clases

El encapsulamiento en JavaScript se refiere a la capacidad de una clase de ocultar sus propiedades y métodos internos y exponer solo los que se necesitan externamente. Esto puede ayudar a proteger la integridad del objeto y evitar que se acceda y modifique sus propiedades y métodos de manera inadecuada. En JavaScript, el encapsulamiento se puede lograr utilizando los modificadores de acceso `public`, `private` y `protected`.

**Ejemplo:**

Supongamos que queremos crear una clase `CuentaBancaria` que defina las propiedades y métodos básicos de una cuenta bancaria, como su saldo y su número de cuenta. Sin embargo, queremos proteger el saldo de la cuenta de ser accedido y modificado directamente. Podemos crear una clase `CuentaBancaria` utilizando la sintaxis `class` y la palabra clave `private` para proteger el saldo de la cuenta:

```javascript
// Definir la clase CuentaBancaria
class CuentaBancaria {
  #saldo = 0;

  // Constructor que toma numeroCuenta como argumento
  constructor(numeroCuenta) {
    // Asignar el argumento a la propiedad numeroCuenta
    this.numeroCuenta = numeroCuenta;
  }

  // Getter para la propiedad privada #saldo
  get saldo() {
    return this.#saldo;
  }

  // Método para depositar una cantidad en la cuenta
  depositar(cantidad) {
    this.#saldo += cantidad;
    console.log(`Se han depositado $${cantidad} en la cuenta.`);
  }

  // Método para retirar una cantidad de la cuenta
  retirar(cantidad) {
    if (cantidad > this.#saldo) {
      console.log("No hay suficiente saldo para realizar la operación.");
    } else {
      this.#saldo -= cantidad;
      console.log(`Se han retirado $${cantidad} de la cuenta.`);
    }
  }
}
```

En esta clase, creamos una propiedad `#saldo` utilizando la sintaxis `#nombrePropiedad` y la palabra clave `private`.Esto hace que la propiedad `#saldo` sea inaccesible desde fuera de la clase. Luego, creamos un método `get` llamado `saldo`que devuelve el valor de la propiedad `#saldo`.

También creamos dos métodos `depositar` y `retirar` que modifican la propiedad `#saldo` de la instancia. Si la cantidad a retirar es mayor que el saldo disponible, se muestra un mensaje de error en la consola.

Para crear una nueva instancia de la clase `CuentaBancaria`, podemos utilizar la sintaxis `new CuentaBancaria`:

```javascript
// Crear una nueva instancia de la clase CuentaBancaria con numeroCuenta "123456789"
const miCuenta = new CuentaBancaria("123456789");
```

En este ejemplo, creamos una nueva instancia de la clase `CuentaBancaria` con el número de cuenta `"123456789"`.

Podemos utilizar los métodos de la instancia para depositar y retirar fondos:

```javascript
// Depositar 1000 en miCuenta
miCuenta.depositar(1000); // Resultado: "Se han depositado $1000 en la cuenta."

// Mostrar el saldo actualizado de miCuenta
console.log(miCuenta.saldo); // Resultado: 1000

// Retirar 500 de miCuenta
miCuenta.retirar(500); // Resultado: "Se han retirado $500 de la cuenta."

// Mostrar el saldo actualizado de miCuenta
console.log(miCuenta.saldo); // Resultado: 500

// Intentar retirar 1000 de miCuenta, que no es posible debido al saldo insuficiente
miCuenta.retirar(1000); // Resultado: "No hay suficiente saldo para realizar la operación."
```

En este ejemplo, utilizamos los métodos `depositar` y `retirar` de la instancia para modificar su propiedad `#saldo`. Luego, utilizamos el método `get` para obtener el valor actual del saldo y lo mostramos en la consola. Finalmente, intentamos retirar más dinero del que hay disponible en la cuenta y se muestra un mensaje de error en la consola.

El encapsulamiento en JavaScript nos permite proteger las propiedades y métodos internos de una clase y exponer solo los que necesitamos externamente. Esto ayuda a mantener la integridad del objeto y evitar que se acceda y modifique sus propiedades y métodos de manera inadecuada.