const apellido1 = "González";
const apellido2 = "Gonzzali";

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
