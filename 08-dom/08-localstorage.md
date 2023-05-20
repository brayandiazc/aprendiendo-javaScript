# LocalStorage

El Local Storage es una característica del navegador web que permite almacenar datos en el dispositivo del usuario de forma persistente. Es una forma de almacenamiento de datos clave-valor similar a las cookies, pero con una mayor capacidad y sin enviar los datos al servidor con cada solicitud.

En JavaScript, puedes utilizar el objeto `localStorage` para interactuar con el Local Storage y almacenar y recuperar datos en él. A continuación, te muestro algunos ejemplos de cómo utilizar el Local Storage:

## Almacenar datos en el Local Storage

Para almacenar datos en el Local Storage, utilizamos la propiedad `localStorage` seguida del método `setItem`. Este método recibe dos argumentos: la clave (key) y el valor (value) que deseamos almacenar.

```javascript
localStorage.setItem('nombre', 'John');
localStorage.setItem('edad', '30');
```

En este ejemplo, almacenamos dos pares clave-valor en el Local Storage. La clave `'nombre'` tiene el valor `'John'` y la clave `'edad'` tiene el valor `'30'`.

## Recuperar datos del Local Storage

Para recuperar datos del Local Storage, utilizamos el método `getItem`, que recibe la clave del dato que queremos obtener y devuelve su valor.

```javascript
const nombre = localStorage.getItem('nombre');
const edad = localStorage.getItem('edad');

console.log(nombre); // Resultado: 'John'
console.log(edad); // Resultado: '30'
```

En este ejemplo, recuperamos los valores almacenados en el Local Storage utilizando las claves `'nombre'` y `'edad'`.

## Eliminar datos del Local Storage

Para eliminar datos del Local Storage, utilizamos el método `removeItem`, que recibe la clave del dato que queremos eliminar.

```javascript
localStorage.removeItem('nombre');
```

En este ejemplo, eliminamos el dato almacenado en el Local Storage con la clave `'nombre'`.

## Borrar todos los datos del Local Storage

Si deseas eliminar todos los datos almacenados en el Local Storage, puedes utilizar el método `clear`.

```javascript
localStorage.clear();
```

Este método eliminará todos los datos almacenados en el Local Storage.

Es importante tener en cuenta que los datos almacenados en el Local Storage están disponibles incluso después de cerrar y volver a abrir el navegador. Sin embargo, los datos del Local Storage son específicos del dominio y solo pueden ser accedidos por el mismo dominio que los almacenó.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ejemplo de Local Storage</title>
</head>
<body>
  <h1>Local Storage Example</h1>
  <input type="text" id="nameInput" placeholder="Ingresa tu nombre">
  <button onclick="guardarNombre()">Guardar</button>
  <p id="mensaje"></p>

  <script>
    function guardarNombre() {
      const nombre = document.getElementById('nameInput').value;
      localStorage.setItem('nombre', nombre);
      document.getElementById('mensaje').textContent = 'Nombre guardado en el Local Storage.';
    }

    window.addEventListener('DOMContentLoaded', function() {
      const nombreGuardado = localStorage.getItem('nombre');
      if (nombreGuardado) {
        document.getElementById('nameInput').value = nombreGuardado;
        document.getElementById('mensaje').textContent = 'Nombre cargado desde el Local Storage.';
      }
    });
  </script>
</body>
</html>
```

En este ejemplo, se muestra una página web simple que tiene un campo de entrada de texto para ingresar un nombre, un botón para guardar el nombre en el Local Storage y un párrafo donde se muestra un mensaje relacionado con el uso del Local Storage.

- Cuando se hace clic en el botón "Guardar", se obtiene el valor del campo de entrada de texto y se almacena en el Local Storage utilizando `localStorage.setItem`.
- Cuando la página se carga por primera vez (utilizando el evento `DOMContentLoaded`), se verifica si hay un nombre guardado en el Local Storage utilizando `localStorage.getItem`. Si hay un nombre guardado, se muestra en el campo de entrada de texto y se muestra un mensaje en el párrafo indicando que se cargó desde el Local Storage.

De esta manera, cada vez que se ingrese un nombre y se haga clic en el botón "Guardar", el nombre se almacenará en el Local Storage y se mantendrá incluso si la página se actualiza o se cierra y se vuelve a abrir.

El Local Storage es útil para almacenar datos de forma persistente en el navegador, como preferencias del usuario, estado de la aplicación, datos de inicio de sesión, entre otros. Sin embargo, ten en cuenta que el Local Storage tiene una capacidad limitada y no debe ser utilizado para almacenar información sensible o excesivamente grande.

Recuerda utilizar el Local Storage de manera responsable y limpiar los datos innecesarios para mantener un buen rendimiento y una experiencia de usuario satisfactoria.
