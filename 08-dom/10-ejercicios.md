# Ejercicios DOM

Esta sección contiene ejercicios para practicar los conceptos aprendidos en la sección de DOM.

## DOM

Los ejercicios de esta sección se basan en el uso de DOM.

### Ejercicio 1 - Crear elementos

Crea una función que reciba un array de strings como parámetro y utilice la función `map` y la sintaxis de string templates para devolver un nuevo array donde cada elemento corresponda a la siguiente cadena: "El elemento `n` es `nombre`", donde `n` es la posición del elemento en el array y `nombre` es el valor del elemento.

**Solución:**

```javascript
const crearCadenas = nombres => nombres.map((nombre, index) => `El elemento ${index} es ${nombre}`);

const nombres = ["Pedro", "Pablo", "María", "Juan"];

console.log(crearCadenas(nombres)); // Resultado: ["El elemento 0 es Pedro", "El elemento 1 es Pablo", "El elemento 2 es María", "El elemento 3 es Juan"]
```

En esta solución, creamos una función `crearCadenas` que toma un array de `nombres` y utiliza la función `map` y la sintaxis de string templates para devolver un nuevo array donde cada elemento corresponda a la siguiente cadena: "El elemento `n` es `nombre`", donde `n` es la posición del elemento en el array y `nombre` es el valor del elemento. Luego, llamamos a la función con el array `["Pedro", "Pablo", "María", "Juan"]` y mostramos el resultado en la consola.

**Desafío adicional:**

Modifica la función para que también reciba un segundo parámetro que indique el nombre de la etiqueta HTML que se utilizará para crear los elementos.

### Ejercicio 2 - Crear elementos

Crea una función que reciba un array de strings como parámetro y utilice la función `map` y la sintaxis de string templates para devolver un nuevo array donde cada elemento corresponda a la siguiente cadena: "El elemento `n` es `nombre`", donde `n` es la posición del elemento en el array y `nombre` es el valor del elemento. El array devuelto debe contener elementos `<li>` con las cadenas correspondientes como contenido.

**Solución:**

```javascript
const crearCadenas = nombres => nombres.map((nombre, index) => `<li>El elemento ${index} es ${nombre}</li>`);

const nombres = ["Pedro", "Pablo", "María", "Juan"];

console.log(crearCadenas(nombres)); // Resultado: ["<li>El elemento 0 es Pedro</li>", "<li>El elemento 1 es Pablo</li>", "<li>El elemento 2 es María</li>", "<li>El elemento 3 es Juan</li>"]
```

En esta solución, creamos una función `crearCadenas` que toma un array de `nombres` y utiliza la función `map` y la sintaxis de string templates para devolver un nuevo array donde cada elemento corresponda a la siguiente cadena: "El elemento `n` es `nombre`", donde `n` es la posición del elemento en el array y `nombre` es el valor del elemento. Luego, llamamos a la función con el array `["Pedro", "Pablo", "María", "Juan"]` y mostramos el resultado en la consola.

**Desafío adicional:**

Modifica la función para que también reciba un segundo parámetro que indique el nombre de la etiqueta HTML que se utilizará para crear los elementos.

### Ejercicio 3 - Botones con acciones

Agregar 3 botones en el HTML que permitan hacer lo siguiente:

- El primero agrega un encabezado (H1) en el documento.
- En ambos casos tanto al h1 como a la etiqueta p agrega un id único.
- El segundo agrega un párrafo (P) en el documento.
- El tercero ejecutará un alert con un mensaje.

**Solución:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Botones con acciones</title>
</head>
<body>
  <h1 id="titulo"></h1>
  <p id="parrafo"></p>

  <button onclick="agregarEncabezado()">Agregar Encabezado</button>
  <button onclick="agregarParrafo()">Agregar Párrafo</button>
  <button onclick="mostrarAlerta()">Mostrar Alerta</button>

  <script>
    function agregarEncabezado() {
      const tituloElemento = document.getElementById('titulo');
      tituloElemento.textContent = 'Este es un encabezado';
      tituloElemento.id = 'encabezado'; // Agrega un id único al h1
    }

    function agregarParrafo() {
      const parrafoElemento = document.getElementById('parrafo');
      parrafoElemento.textContent = 'Este es un párrafo';
      parrafoElemento.id = 'contenido'; // Agrega un id único al p
    }

    function mostrarAlerta() {
      alert('Este es un mensaje de alerta');
    }
  </script>
</body>
</html>
```

En este ejemplo, hemos agregado los 3 botones requeridos:

1. El primer botón, al hacer clic en él, ejecuta la función `agregarEncabezado()`. Esta función obtiene la referencia al elemento `<h1>` utilizando `getElementById` y establece el contenido de texto y un id único. En este caso, establecimos el texto del encabezado como "Este es un encabezado" y el id como "encabezado".
2. El segundo botón, al hacer clic en él, ejecuta la función `agregarParrafo()`. Esta función obtiene la referencia al elemento `<p>` utilizando `getElementById` y establece el contenido de texto y un id único. En este caso, establecimos el texto del párrafo como "Este es un párrafo" y el id como "contenido".
3. El tercer botón, al hacer clic en él, ejecuta la función `mostrarAlerta()`. Esta función simplemente muestra un mensaje de alerta con el texto "Este es un mensaje de alerta".

Espero que este ejemplo te ayude a comprender cómo agregar botones en HTML con acciones específicas utilizando JavaScript.

### Ejercicio 4 - Manipulación de div con botones

Agregar un div de tamaño 300 x 300 px y 3 botones al HTML y cada botón tendrá un evento que realizará lo siguiente:

- El primero cambiará el fondo del div a color rojo.
- El segundo le cambiará el tamaño al div a 500 x 500 px.
- El tercero le asignará un borde al div

**Solución:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Manipulación de div con botones</title>
  <style>
    #myDiv {
      width: 300px;
      height: 300px;
      background-color: gray;
    }
  </style>
</head>
<body>
  <div id="myDiv"></div>

  <button onclick="cambiarColor()">Cambiar color a rojo</button>
  <button onclick="cambiarTamaño()">Cambiar tamaño a 500x500 px</button>
  <button onclick="agregarBorde()">Agregar borde</button>

  <script>
    const divElement = document.getElementById('myDiv');

    function cambiarColor() {
      divElement.style.backgroundColor = 'red';
    }

    function cambiarTamaño() {
      divElement.style.width = '500px';
      divElement.style.height = '500px';
    }

    function agregarBorde() {
      divElement.style.border = '2px solid black';
    }
  </script>
</body>
</html>
```

En este ejemplo, hemos agregado un div con un tamaño inicial de 300x300 px y un color de fondo gris. Luego, hemos agregado los 3 botones con eventos asociados:

1. El primer botón, al hacer clic en él, ejecuta la función `cambiarColor()`. Esta función cambia el color de fondo del div a rojo mediante la modificación de la propiedad `backgroundColor`.
2. El segundo botón, al hacer clic en él, ejecuta la función `cambiarTamaño()`. Esta función cambia el tamaño del div a 500x500 px mediante la modificación de las propiedades `width` y `height`.
3. El tercer botón, al hacer clic en él, ejecuta la función `agregarBorde()`. Esta función agrega un borde de 2px de ancho y color negro al div mediante la modificación de la propiedad `border`.

Puedes personalizar el código CSS y los estilos según tus preferencias para adaptarlo a tu diseño y necesidades.

### Ejercicio 5 - Guardar y mostrar lista de nombres

Agregar un input y un botón para guardar una lista de nombres en el local storage. A su vez, cada nombre que se agregue se deberá mostrar en una lista en el documento. Cargar la lista de nombres al recargar la página (Si existen datos guardados). Agregar un botón de eliminar a cada elemento de la lista de nombres y que actualice el la interfaz y el local storage.

**Solución:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Guardar y mostrar lista de nombres</title>
</head>
<body>
  <h1>Lista de Nombres</h1>
  <input type="text" id="nameInput" placeholder="Ingrese un nombre">
  <button onclick="agregarNombre()">Guardar</button>
  <ul id="nameList"></ul>

  <script>
    const nameInput = document.getElementById('nameInput');
    const nameList = document.getElementById('nameList');

    // Función para agregar un nombre a la lista
    function agregarNombre() {
      const nombre = nameInput.value;
      if (nombre) {
        let nombresGuardados = localStorage.getItem('nombres');
        if (nombresGuardados) {
          nombresGuardados = JSON.parse(nombresGuardados);
          nombresGuardados.push(nombre);
        } else {
          nombresGuardados = [nombre];
        }
        localStorage.setItem('nombres', JSON.stringify(nombresGuardados));
        nameInput.value = '';
        mostrarNombres();
      }
    }

    // Función para mostrar los nombres en la lista
    function mostrarNombres() {
      nameList.innerHTML = '';
      let nombresGuardados = localStorage.getItem('nombres');
      if (nombresGuardados) {
        nombresGuardados = JSON.parse(nombresGuardados);
        nombresGuardados.forEach(function(nombre) {
          const listItem = document.createElement('li');
          listItem.textContent = nombre;
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.addEventListener('click', function() {
            eliminarNombre(nombre);
          });
          listItem.appendChild(deleteButton);
          nameList.appendChild(listItem);
        });
      }
    }

    // Función para eliminar un nombre de la lista
    function eliminarNombre(nombre) {
      let nombresGuardados = localStorage.getItem('nombres');
      if (nombresGuardados) {
        nombresGuardados = JSON.parse(nombresGuardados);
        const indice = nombresGuardados.indexOf(nombre);
        if (indice !== -1) {
          nombresGuardados.splice(indice, 1);
          localStorage.setItem('nombres', JSON.stringify(nombresGuardados));
          mostrarNombres();
        }
      }
    }

    // Cargar la lista de nombres al cargar la página
    window.addEventListener('DOMContentLoaded', mostrarNombres);
  </script>
</body>
</html>
```

En este ejemplo, hemos agregado un campo de entrada de texto (`input`), un botón para guardar el nombre en el Local Storage y una lista (`ul`) donde se mostrarán los nombres guardados.

- Al hacer clic en el botón "Guardar", se ejecuta la función `agregarNombre()`. Esta función obtiene el valor del campo de entrada de texto, lo agrega a la lista de nombres en el Local Storage y luego llama a la función `mostrarNombres()` para actualizar la lista en el documento.
- La función `mostrarNombres()` se encarga de obtener los nombres guardados del Local Storage, iterar sobre ellos y crear elementos de lista (`li`) para mostrarlos en el documento. Además, agrega un botón "Eliminar" a cada nombre, que al hacer clic ejecuta la función `eliminarNombre()` para eliminar el nombre correspondiente de la lista.
- La función `eliminarNombre(nombre)` se encarga de buscar y eliminar el nombre de la lista de nombres en el Local Storage y luego llama a la función `mostrarNombres()` para actualizar la lista en el documento.
- Al cargar la página, se llama a la función `mostrarNombres()` para mostrar la lista de nombres guardados en el Local Storage.
- Para guardar los nombres en el Local Storage, se utiliza el método `setItem()` y para obtenerlos se utiliza el método `getItem()`. Ambos métodos reciben como primer parámetro el nombre de la clave y como segundo parámetro el valor a guardar o el valor obtenido.

### Ejercicio 6 - Guardar y mostrar lista de tareas

Retomando el ejercicio anterior, agregar un botón de eliminar a cada elemento de la lista de nombres y que actualice la interfaz y el local storage

**Solución:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Guardar y mostrar lista de nombres</title>
</head>
<body>
  <h1>Lista de Nombres</h1>
  <input type="text" id="nameInput" placeholder="Ingrese un nombre">
  <button onclick="agregarNombre()">Guardar</button>
  <ul id="nameList"></ul>

  <script>
    const nameInput = document.getElementById('nameInput');
    const nameList = document.getElementById('nameList');

    // Función para agregar un nombre a la lista
    function agregarNombre() {
      const nombre = nameInput.value;
      if (nombre) {
        let nombresGuardados = obtenerNombresGuardados();
        nombresGuardados.push(nombre);
        guardarNombres(nombresGuardados);
        nameInput.value = '';
        mostrarNombres();
      }
    }

    // Función para obtener los nombres guardados del Local Storage
    function obtenerNombresGuardados() {
      let nombresGuardados = localStorage.getItem('nombres');
      return nombresGuardados ? JSON.parse(nombresGuardados) : [];
    }

    // Función para guardar los nombres en el Local Storage
    function guardarNombres(nombres) {
      localStorage.setItem('nombres', JSON.stringify(nombres));
    }

    // Función para mostrar los nombres en la lista
    function mostrarNombres() {
      nameList.innerHTML = '';
      const nombresGuardados = obtenerNombresGuardados();
      nombresGuardados.forEach(function(nombre) {
        const listItem = document.createElement('li');
        listItem.textContent = nombre;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
          eliminarNombre(nombre);
        });
        listItem.appendChild(deleteButton);
        nameList.appendChild(listItem);
      });
    }

    // Función para eliminar un nombre de la lista
    function eliminarNombre(nombre) {
      let nombresGuardados = obtenerNombresGuardados();
      const indice = nombresGuardados.indexOf(nombre);
      if (indice !== -1) {
        nombresGuardados.splice(indice, 1);
        guardarNombres(nombresGuardados);
        mostrarNombres();
      }
    }

    // Cargar la lista de nombres al cargar la página
    window.addEventListener('DOMContentLoaded', mostrarNombres);
  </script>
</body>
</html>
```

En esta actualización del código, hemos agregado el botón de eliminar en cada elemento de la lista de nombres:

- Dentro de la función `mostrarNombres()`, creamos el botón "Eliminar" para cada nombre en la lista. Al hacer clic en este botón, se ejecuta la función `eliminarNombre(nombre)` para eliminar el nombre correspondiente de la lista.
- La función `eliminarNombre(nombre)` obtiene los nombres guardados del Local Storage, busca el índice del nombre especificado y lo elimina del array. Luego, guarda la lista actualizada en el Local Storage y llama a la función `mostrarNombres()` para actualizar la lista en el documento.

De esta manera, cada vez que se agrega un nombre a la lista, se muestra en la interfaz junto con un botón de eliminar que permite eliminar ese nombre de la lista y actualizar tanto la interfaz como el Local Storage.

Espero que este ejercicio sea útil para comprender cómo agregar un botón de eliminar a cada elemento de una lista y actualizar la interfaz y el Local Storage en consecuencia.
