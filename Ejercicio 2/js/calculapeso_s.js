/* Heidi Chaves
 * Ejemplo con switch */
alert("funciona");

var usuario = prompt("¿Dime, cual es tu peso en Kilogramos? ");
var peso = parseFloat(usuario);
planeta = parseInt(prompt("Elije el planeta con el que quieras saber tu peso:\n1. = Mercurio. \n2. = Venus. \n3. = Marte. \n4. = Jupiter. \n5. = Saturno. \n6. = Urano. \n7. = Neptuno. "));
var g_tierra = 9.8;
var g_mercurio = 2.7;
var g_venus = 8.8;
var g_marte = 3.7;
var g_jupiter = 22.8;
var g_saturno = 9;
var g_urano = 7.7;
var g_neptuno = 11;
var peso_final;
var n_planeta;

  switch (planeta) {
    case 1:
        peso_final = (peso * g_mercurio) / g_tierra;
        n_planeta = "Mercurio";
        break;
    case 2:
        peso_final = (peso * g_venus) / g_tierra;
        n_planeta = "Venus";
        break;
    case 3:
        peso_final = (peso * g_marte) / g_tierra;
        n_planeta = "Marte";
        break;
    case 4:
        peso_final = (peso * g_jupiter) / g_tierra;
        n_planeta = "Jupiter";
        break;
    case 5:
        peso_final = (peso * g_saturno) / g_tierra;
        n_planeta = "Saturno";
        break;
    case 6:
        peso_final = (peso * g_urano) / g_tierra;
        n_planeta = "Urano";
        break;
    case 7:
        peso_final = (peso * g_neptuno) / g_tierra;
        n_planeta = "Neptuno";
        break;
    default:
    peso_final = 1000000;
    document.write("Dato errado, por favor seleccione el valor solicitado. " +  "\n");
    n_planeta = "Kripton";
  }
  document.write("Tu peso en la tierra en kilogramos es de: <strong>" + peso + " kilogramos.</strong>" + "\n");
  peso_final = parseFloat(peso_final.toFixed(2));
  document.write("...Y el peso final en " + n_planeta + " es de <strong>: " + peso_final + " kilogramos.</strong>");
