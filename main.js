const respuesta = "SAN JUAN"; //esta es la respuesta correcta

for (let contador = 0; contador <5 ; contador++) {
    let resUsuario = prompt ("Capital de San Juan: ");
    if (resUsuario.toUpperCase() == respuesta || resUsuario.toLowerCase() == respuesta ) { // se compra mays y minis para saber si es correcta la respueta
        alert ("Muy bien! Has acertado");
        break; // cuando la respuesta es correcta se finaliza el ciclo

} else {
 alert("Respuesta incorrecta!");
}
}