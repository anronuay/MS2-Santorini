var map;

function createMap () {
    var options = {
        center: { lat: 36.396132, lng: -25.461830},
        zoom: 10}
    };

    map = new google.maps.Map(document.getElementById('map'), options);



/*var map;
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

*/


/*var input = document.getElementById("search");
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });

  var markersPlaces = [];

  searchBox.addListener("places_changed", function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) return;

    markersPlaces.forEach(function (m) {
      m.setMap(null);
    });
    

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (p) {
      if (!p.geometry) return;

      markersPlaces.push(
        new google.maps.Marker({
          map: map,
          title: p.name,
          position: p.geometry.location,
        })
      );

      if (p.geometry.viewport) bounds.union(p.geometry.viewport);
      else bounds.extend(p.geometry.location);
    });

    map.fitBounds(bounds);
  });
*/





