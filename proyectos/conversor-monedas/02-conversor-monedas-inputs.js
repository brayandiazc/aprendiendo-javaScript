// Conversor de monedas haciendo uso de inputs

// En esta etapa, vamos a solicitar al usuario que ingrese el monto en dólares y vamos a guardar la información en una variable. Luego, vamos a imprimir en la consola el resultado de la conversión.

// Solicitamos al usuario que ingrese el monto en dólares
var dolares = prompt("Ingrese el monto en dólares:");

// Definimos las tasas de cambio fijas
var cop = 4500; // 1 dólar = 4500 pesos colombianos
var clp = 794; // 1 dólar = 794 pesos chilenos
var mxn = 18; // 1 dólar = 18 pesos mexicanos

// Calculamos el equivalente en cada moneda
const pesosColombianos = dolares * cop;
const pesosChilenos = dolares * clp
const pesosMexicanos = dolares * mxn;

// Imprimimos los resultados en la consola
console.log(dolares + " dólares son equivalentes a " + pesosColombianos + " pesos colombianos, " + pesosChilenos + " pesos chilenos y " + pesosMexicanos + " pesos mexicanos.");
