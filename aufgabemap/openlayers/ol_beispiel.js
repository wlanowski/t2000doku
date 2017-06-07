function init() {

    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'http://{a-c}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png'
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([10.521424594879116, 51.16997107448923]),
            zoom: 3
        })
    });
	
	
	
	//Start Marker
	
	
	  map.addOverlay(new ol.Overlay({
        position: ol.proj.transform(
                [80.6350, 7.2964],
                'EPSG:4326',
                'EPSG:3857'
                ),
        element: $('<img src="https://image.flaticon.com/icons/png/512/33/33622.png">')
    }));
 
    map.on('singleclick', function(evt) {
        var coord = evt.coordinate;
        var transformed_coordinate = ol.proj.transform(coord, "EPSG:900913", "EPSG:4326");
        console.log(transformed_coordinate);
    });


}