
/*Creado por Heidi Chaves */
//alert("Prueba funciona");

function CloseWarnCookies(){
  ElementById("warning-cookies");
  element.style.display = "none";
}

var h = document.getElementById("dibujoHeidi");
var lienzo = h.getContext("2d");

function dibujarLinea(color, xinicial, xfinal, yinicial, yfinal){
  lienzo.beginPath();
    lienzo.strokeStyle = color;//Atributo
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
  lienzo.closePath();
}

var lineas = 30;  //varaible de límite
var l = 0; //contador de líneas del 0 al 29
var xi = 0;
var yf = 300;
var color='blue';
var color2='green';
var color3='purple';
var color4='red';
var color5='gray';
var color6='orange';
var color7='black';
var color8='gold';

xi3 = 300;
yf3 = 600;

for (let l = 0; l < lineas; l++) {
  // body...
  yi = 10 * l;
  xf = 10 * (l + 1);

  dibujarLinea(color, 0, yi, xf, 300);
  dibujarLinea(color2, 300, yi, xf, 0);

  yi2 = (10 * l) + 300;
  xf2 = (10 * (l + 1)) + 300;

  dibujarLinea(color3, 300, yi2, xf2, 600);
  dibujarLinea(color4, 600, yi2, xf2, 300);

  dibujarLinea(color5, 300, yi2, xf, 300);
  dibujarLinea(color6, 600, yi2, xf, 0);

  dibujarLinea(color7, 300, yi, xf2, 300);
  dibujarLinea(color8, 0, yi, xf2, 600);

  console.log("Linea: " + l);
  console.log("Resul xf2: " + yi2);
  console.log("Resul xf2: " + xf2);
}
