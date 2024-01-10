//Pagina de Futbol

let futbol = prompt("¿Te gusta el futbol?").toLowerCase();

if (futbol != "no") {
  alert("Genial, descubre tu numero según la posicion que juegas");
  alert("¿En un 4-1-2-1-2 De que juegas?")
  seguir = '';
  while (seguir != 'salir') {
    seguir = funcCamiseta()
    if (seguir == 'esc') {
      seguir = 'salir';
    } else if (seguir == 'reiniciar'){
    continue
    } else {
      alert(seguir)
    }
  }
}

function funcCamiseta() {
    let posicion = prompt('Ingresa tu posición, "esc" para salir').toLowerCase();
    
    if (posicion == "arquero") {
      return `Buena elección, entonces usaras la #1`
    } else if (posicion == "central derecho") {
      return 'Buena elección, entonces usaras la #2'
    } else if (posicion == "lateral izquierdo") {
      return 'Buena elección, entonces usaras la #3'
    } else if (posicion == "lateral derecho") {
      return `Buena elección, entonces usaras la #4`
    } else if (posicion == "volante central defensivo") {
      return `Buena elección, entonces usaras la #5`
    }else if (posicion == "central izquierdo") {
      return `Buena elección, entonces usaras la #6`
    }else if (posicion == "delantero derecho") {
      return `Buena elección, entonces usaras la #7`
    }else if (posicion == "volante derecho") {
      return `Buena elección, entonces usaras la #8`
    }else if (posicion == "delantero izquierdo") {
      return `Buena elección, entonces usaras la #9`
    }else if (posicion == "volante ofensivo") {
      return `Buena elección, entonces usaras la #10`
    }else if (posicion == "volante izquierdo") {
      return `Buena elección, entonces usaras la #11`
    }else if (posicion == "esc") {
      return `esc`
    } else {
      alert('Esa posición no existe')
      return 'reiniciar'
    }
}


