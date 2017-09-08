function init() {
	
	
	// Karte initialisieren
	
    var map = new ol.Map({
        target: 'map',
        layers: [

			// Tile-Layer hinzufügen
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'http://{a-c}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png'
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([10.521424594879116, 51.16997107448923]),
            zoom: 6
        })
    });
	
	
	// Marker hinzufügen
	
    var markers = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([12.4783, 51.3766])),
                })
            ]
        }),
        style: new ol.style.Style({
            image: new ol.style.Icon({
                src: '//openlayers.org/en/v3.12.1/examples/data/icon.png',
                anchor: [0.5, 1]
            })
        })
    });
    map.addLayer(markers);

}