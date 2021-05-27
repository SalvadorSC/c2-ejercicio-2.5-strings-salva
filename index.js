const apellidos = [
  "González",
  "Gonzzali",
  "Masserati",
  "Baguette",
  "Piccolini",
];

const esItaliano = (palabra) => palabra[palabra.length - 1] === "i";

function respuestaEsItaliano(esItaliano, apellido) {
  console.log(
    esItaliano(apellido)
      ? `${apellido}... Este apellido podría ser de cualquier país. No crees?`
      : `${apellido}... Este apellido tiene muchas probabilidades de ser italiano. No crees?`
  );
}

apellidos.forEach((element) => respuestaEsItaliano(esItaliano, element));
