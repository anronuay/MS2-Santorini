var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.396132, lng: 25.461830},
    zoom: 11.75
  });
}

var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var locations = [
        {lat: 36.405899, lng: 25.396495}
      ]

var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});





