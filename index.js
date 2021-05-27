const apellido1 = "González";
const apellido2 = "Gonzzali";
const apellido3 = "Masserati";
const apellido4 = "Baguette";
const apellido5 = "Piccolini";

function esItaliano(palabra) {
  if (palabra[palabra.length - 1] === "i") {
    return false;
  } else {
    return true;
  }
}

function respuestaEsItaliano(esItaliano, apellido) {
  if (esItaliano(apellido)) {
    console.log(
      `${apellido}... Este apellido podría ser de cualquier país. No crees?`
    );
  } else {
    console.log(
      `${apellido}... Este apellido tiene muchas probabilidades de ser italiano. No crees?`
    );
  }
}

respuestaEsItaliano(esItaliano, apellido1);
respuestaEsItaliano(esItaliano, apellido2);
respuestaEsItaliano(esItaliano, apellido3);
respuestaEsItaliano(esItaliano, apellido4);
respuestaEsItaliano(esItaliano, apellido5);
