//Pagina de Futbol

let futbol = prompt("¿Te gusta el futbol?").toLowerCase();

if(futbol != "no"){
    alert("Genial, descubre tu numero según la posicion que juegas")
}else{
    alert("Esta bien, ¡Nos vemos!")
    }


for (let numero = 1; numero <= 11; numero++) {
    let posicion = prompt("¿En un 4-1-2-1-2 De que juegas?").toLowerCase();
    while (posicion != ESC) {
        switch (posicion) {
            case "arquero":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;

            case "central derecho":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "lateral izquierdo":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "lateral derecho":
            alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "volante central defensivo":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "central izquierdo":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "delantero  derecho":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "volante derecho":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "delantero izquierdo":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "volante ofensivo":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;
            case "volante izquierdo":
                alert(`Buena elección, entonces usaras la #${numero}`);
                break;

            default:
                alert("No existe esa posicion")
                break;
        }
        posicion = prompt("¿En un 4-1-2-1-2 De que juegas?")
    }
    
}