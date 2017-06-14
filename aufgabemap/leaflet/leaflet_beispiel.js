//Karte initialisieren
var map = L.map('map').setView([51.16997107448923, 10.521424594879116], 6);


//Tile-Layer hinzufügen
L.tileLayer('http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Marker hinzufügen
L.marker([51.3766, 12.4783]).addTo(map);
	
	
