const apellido1 = "minúsculas";
const apellido2 = "minúsculi";

function esItaliano(palabra) {
  if (palabra[palabra.length - 1] === "i") {
    return true;
  } else {
    return false;
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
