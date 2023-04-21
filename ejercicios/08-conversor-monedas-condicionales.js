// Conversor de monedas haciendo uso de ciclos

// En esta etapa, vamos a solicitar al usuario que ingrese el monto en dólares y vamos a guardar la información en una variable. Además haremos uso de las condiciones para verificar la opción elegida por el usuario y realizar la conversión correspondiente.

// Obtenemos el valor en dólares a convertir
var dolares = prompt("Ingresa el valor en dólares a convertir:");

// Obtenemos la opción de conversión deseada
var opcion = prompt("Ingresa la opción de conversión: \n1 - Peso Colombiano \n2 - Peso Chileno \n3 - Peso Mexicano");

var cop = 4500; // 1 dólar = 4500 pesos colombianos
var clp = 794; // 1 dólar = 794 pesos chilenos
var mxn = 18; // 1 dólar = 18 pesos mexicanos

// Verificamos la opción elegida y realizamos la conversión correspondiente
if (opcion == 1) {
  const pesosColombianos = dolares * cop;
  alert(dolares + " dólares equivalen a " + pesosColombianos.toFixed(2) + " pesos colombianos");
} else if (opcion == 2) {
  const pesosChilenos = dolares * clp;
  alert(dolares + " dólares equivalen a " + pesosChilenos.toFixed(2) + " pesos chilenos");
} else if (opcion == 3) {
  const pesosMexicanos = dolares * mxn;
  alert(dolares + " dólares equivalen a " + pesosMexicanos.toFixed(2) + " pesos mexicanos");
} else {
  alert("Opción inválida");
}
