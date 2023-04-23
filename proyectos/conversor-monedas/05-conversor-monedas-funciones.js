// Esta función convierte un valor en dólares a la moneda especificada por el usuario.
function convertirDolares(valorDolares, monedaDestino) {
  var factorConversion; // Declaración de una variable factorConversion para almacenar el factor de conversión.

  switch (monedaDestino) { // Inicio de un bloque switch para evaluar el valor de la variable monedaDestino.
    case 'COP':
      factorConversion = 4500; // Si monedaDestino es igual a 'COP', factorConversion se establece en 4500.
      break; // Fin del bloque de caso.
    case 'CLP':
      factorConversion = 794; // Si monedaDestino es igual a 'CLP', factorConversion se establece en 794.
      break; // Fin del bloque de caso.
    case 'MXN':
      factorConversion = 18; // Si monedaDestino es igual a 'MXN', factorConversion se establece en 18.
      break; // Fin del bloque de caso.
    default: // Si monedaDestino no coincide con ninguno de los casos anteriores, se ejecuta el bloque predeterminado.
      return 'Moneda no soportada'; // Devuelve el mensaje "Moneda no soportada".
  }

  var resultado = valorDolares * factorConversion; // Multiplica el valor en dólares por el factor de conversión y lo almacena en la variable resultado.
  return resultado.toFixed(2); // Devuelve el resultado con dos decimales.
}

// Esta función solicita al usuario que ingrese el valor en dólares a convertir y la moneda de destino.
function obtenerEntradaUsuario() {
  var valorDolares = parseFloat(prompt('Ingresa el valor en dólares a convertir:')); // Pide al usuario que ingrese un valor en dólares y lo convierte en un número de punto flotante.

  if (isNaN(valorDolares)) { // Verifica si valorDolares no es un número.
    return null; // Devuelve nulo si valorDolares no es un número.
  }

  var monedaDestino = prompt('Ingresa la moneda de destino (COP, CLP, MXN):').toUpperCase(); // Pide al usuario que ingrese la moneda de destino y convierte el texto en mayúsculas.

  return { // Devuelve un objeto con dos propiedades, valorDolares y monedaDestino.
    valorDolares: valorDolares,
    monedaDestino: monedaDestino
  };
}

var entrada = obtenerEntradaUsuario(); // Llama a la función obtenerEntradaUsuario y almacena el resultado en la variable entrada.
if (entrada) { // Verifica si entrada es verdadero.
  var resultado = convertirDolares(entrada.valorDolares, entrada.monedaDestino); // Llama a la función convertirDolares y almacena el resultado en la variable resultado.
  alert(entrada.valorDolares + ' dólares equivalen a ' + resultado + ' ' + entrada.monedaDestino); // Muestra un mensaje en una ventana emergente con el resultado de la conversión.
} else { // Si entrada es nulo.
  alert('Entrada no válida'); // Muestra un mensaje en una ventana emergente que indica que la entrada no es válida.
}
