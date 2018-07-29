if (navigator.geolocation) {
    alert("Felicidades Geolocation funciona! /(°u°)/");
}
else {
    alert("Geolocation no Funciona! (°n°)");
}

var x = document.getElementById("ubicacion");
function myUbicacion() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    x.innerHTML = "Latitud: " + position.coords.latitude +
        "<br>Longitud: " + position.coords.longitude;

}
/*
    var options = {
        enableHighAccuracy: true,
        timeout: 6000,
        maximunAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    function success(position) {
        var coordenadas = position.coords;

        console.log('tu position actual es:');
        console.log('Latitud: ' + coordenadas.latitude);
        console.log('Longitud' + coordenadas.longitude);
        console.log('Mas o menos' + coordenadas.accuracy + 'metros');
    };

    function error(error) {
        console.warn('Error(' + error.code + '): ' + error.message);
    };
    */