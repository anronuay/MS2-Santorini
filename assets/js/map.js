var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.401331, lng: 25.462171},
    zoom: 8
  });
}