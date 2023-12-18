//Pagina de Futbol
function ingresarPosicion() {
    posicion = prompt("¿Quieres ingresar otra posición?, 'esc'").toLowerCase()
}
let futbol = prompt("¿Te gusta el futbol?").toLowerCase();

if (futbol != "no") {
  alert("Genial, descubre tu numero según la posicion que juegas");

  let posicion = prompt("¿En un 4-1-2-1-2 De que juegas?").toLowerCase();
  while (posicion != "esc") {
    switch (posicion) {
      case "arquero":
        alert(`Buena elección, entonces usaras la #1`);
        ingresarPosicion()
        break;
      case "central derecho":
        alert(`Buena elección, entonces usaras la #2`);
        ingresarPosicion()
        break;
      case "lateral izquierdo":
        alert(`Buena elección, entonces usaras la #3`);
        ingresarPosicion()
        break;
      case "lateral derecho":
        alert(`Buena elección, entonces usaras la #4`);
        ingresarPosicion()
        break;
      case "volante central defensivo":
        alert(`Buena elección, entonces usaras la #5`);
        ingresarPosicion()
        break;
      case "central izquierdo":
        alert(`Buena elección, entonces usaras la #6`);
        ingresarPosicion()
        break;
      case "delantero derecho":
        alert(`Buena elección, entonces usaras la #7`);
        ingresarPosicion()
        break;
      case "volante derecho":
        alert(`Buena elección, entonces usaras la #8`);
        ingresarPosicion()
        break;
      case "delantero izquierdo":
        alert(`Buena elección, entonces usaras la #9`);
        ingresarPosicion()
        break;
      case "volante ofensivo":
        alert(`Buena elección, entonces usaras la #10`);
        ingresarPosicion()
        break;
      case "volante izquierdo":
        alert(`Buena elección, entonces usaras la #11`);
        ingresarPosicion()
        break;

      default:
        alert("No existe esa posicion");
        ingresarPosicion()
        break;
    }
  }
} else {
  alert("Esta bien, ¡Nos vemos!");
}
