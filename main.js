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



const camisetas = [];

class Camiseta{
  constructor(club, colorPri, colorSec){
    this.id = camisetas.length + 1;
    this.club = club;
    this.colorPri = colorPri.toLowerCase();
    this.colorSec = colorSec.toLowerCase();
  }
}

camisetas.push(new Camiseta("River Plate", "Blanco", "Rojo"));
camisetas.push(new Camiseta("Boca Juniors", "Azul", "Amarillo"));
camisetas.push(new Camiseta("Independiente", "Rojo", "Blanco"));
camisetas.push(new Camiseta("Racing Club", "Celeste", "Blanco"));
camisetas.push(new Camiseta("San Lorenzo", "Azul", "Rojo"));
camisetas.push(new Camiseta("Estudiantes de la Plata", "Rojo", "Blanco"));
camisetas.push(new Camiseta("Velez Sarfield", "Blanco", "Azul"));
camisetas.push(new Camiseta("Newell's Old Boys", "Rojo", "Negro"));
camisetas.push(new Camiseta("Rosario Central", "Azul", "Amarillo"));
camisetas.push(new Camiseta("Huracan", "Blanco", "Rojo"));
camisetas.push(new Camiseta("Lanus", "Granate", "Blanco"));
camisetas.push(new Camiseta("Banfield", "Blanco", "Verde"));
camisetas.push(new Camiseta("Argentinos Juniors", "Rojo", "Blanco"));
camisetas.push(new Camiseta("Platense", "Blanco", "Marron"));
camisetas.push(new Camiseta("Defensa y Justicia", "Verde", "Amarillo"));
camisetas.push(new Camiseta("Belgrano", "Celeste", "Blanco"));
camisetas.push(new Camiseta("Talleres", "Azul", "Blanco"));
camisetas.push(new Camiseta("Instituto", "Rojo", "Blanco"));
camisetas.push(new Camiseta("Gimnasia y Esgrima de la Plata", "Blanco", "Azul"));
camisetas.push(new Camiseta("Godoy Cruz", "Azul", "Blanco"));
camisetas.push(new Camiseta("Barracas Central", "Rojo", "Blanco"));
camisetas.push(new Camiseta("Central Cordoba", "Negro", "Blanco"));
camisetas.push(new Camiseta("Tigre", "Azul", "Rojo"));
camisetas.push(new Camiseta("Atletico Tucuman", "Blanco", "Celeste"));
camisetas.push(new Camiseta("Independiente Rivadavia", "Azul", "Blanco"));
camisetas.push(new Camiseta("Deportivo Riestra", "Negro", "Blanco"));
camisetas.push(new Camiseta("Union", "Rojo", "Blanco"));
camisetas.push(new Camiseta("Sarmiento", "Verde", "Blanco"));


function filtrarPorColor(){
  let color = (prompt('Ingrese su color'));
  let resultado = camisetas.filter((c) => c.colorPri === color || c.colorSec === color);
  alert(`Equipos que utilizan el color ${color}`)
  return resultado
};
  

alert("Conoce a los equipos de primera division por su color.");

filtrarPorColor().forEach(c =>{
  alert(`
  club: ${c.club}
  colorPri: ${c.colorPri}
  colorSec: ${c.colorSec}
  `)
})






