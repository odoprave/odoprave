var center = [2226951.83, 6212416.61];

var googleLayer = new olgm.layer.Google();

var osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM(),
  visible: false
});

var tileWMSLayer  = new ol.layer.Tile({
    title: 'Aktuálna premávka',
    source: new ol.source.TileWMS({
        url: "https://odoprave.global.ssl.fastly.net/geoserver/nsdi/wms",
        params: {'LAYERS': 'nsdi:uds'},
        serverType: 'geoserver'
    }),
    visible: true,
});


var map = new ol.Map({
  // use OL3-Google-Maps recommended default interactions
  interactions: olgm.interaction.defaults(),
  layers: [
    googleLayer,
    osmLayer,
    tileWMSLayer,
  ],
  target: 'map',
  view: new ol.View({
    center: center,
    zoom: 8
  })
});

var olGM = new olgm.OLGoogleMaps({map: map}); // map is the ol.Map instance
olGM.activate();

var gmap = olGM.getGoogleMapsMap();

var trafficLayer = new google.maps.TrafficLayer();
trafficLayer.setMap(gmap);

function toggleSK() {
  tileWMSLayer.setVisible(!tileWMSLayer.getVisible());
};


function toggleGO() {
  if (trafficLayer.getMap()==null) {
    trafficLayer.setMap(gmap);
  } else {
    trafficLayer.setMap(null);
  }
}

function switchMap() {
  if(tileWMSLayer.getVisible() && trafficLayer.getMap()!=null) {
    toggleGO();
  }
  if(!tileWMSLayer.getVisible() && trafficLayer.getMap()==null) {
    toggleGO();
  }
  toggleGO();
  toggleSK();
}

