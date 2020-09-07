var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.3932, lng: 25.4615},
    zoom: 11.5
  });
}
