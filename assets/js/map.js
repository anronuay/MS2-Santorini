// Places Search Box (Reference: Google Maps Platform)

var map;

function initAutocomplete() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.3932, lng: 25.4615 },
    zoom: 11.5,
    mapTypeId: "roadmap",
    mapTypeControl: false
  });

  addMarkers();

  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    
    markers.forEach(marker => {
      marker.setMap(map);
    });
    markers = [];
    
    const bounds = new google.maps.LatLngBounds();
    places.forEach(place => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {

        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

// Markers & Info Windows (Reference: Google Maps Platform & Traversy Media 'Google Maps JavaScript API Tutorial' YouTube)

var markers = [
    { // Amoudi Bay
      coords: { lat: 36.4600, lng: 25.3705 },
      iconImage: "assets/images/attractions-icon.png",
      content: "<img src='assets/images/map-images/amoudi-bay.jpg'><h5>Amoudi Bay</h5><a href='https://en.wikipedia.org/wiki/Amoudi_Bay' target='_blank'>Click here to learn more about Amoudi Bay</a>",
    },
    { // Nea Kameni
      coords: { lat: 36.4000, lng: 25.4000 },
      iconImage: "assets/images/attractions-icon.png",
      content: "<img src='assets/images/map-images/nea-kameni.jpg'><h5>Nea Kameni</h5><a href='https://en.wikipedia.org/wiki/Nea_Kameni' target='_blank'>Click here to learn more about Nea Kameni</a>",
    },
    { // Red Beach
      coords: { lat: 36.348705, lng: 25.394634 },
      iconImage: "assets/images/attractions-icon.png",
      content: "<img src='assets/images/map-images/red-beach.jpg'><h5>Red Beach</h5><a href='https://en.wikipedia.org/wiki/Red_Beach_(Santorini)' target='_blank'>Click here to learn more about Red Beach</a>",
    },
    { // Akrotiri Archaeological Site
      coords: { lat: 36.3518, lng: 25.4034 },
      iconImage: "assets/images/attractions-icon.png",
      content: "<img src='assets/images/map-images/akrotiri-archaeological-site.jpg'><h5>Akrotiri Archaeological Site</h5><a href='https://en.wikipedia.org/wiki/Akrotiri_(prehistoric_city)' target='_blank'>Click here to learn more about Akrotiri</a>",
    },
    { // Lombranos
      coords: { lat: 36.4173, lng: 25.4282 },
      iconImage: "assets/images/restaurant-icon.png",
      content: "<img src='assets/images/map-images/lombranos.jpg'><h5>Lombranos</h5><a href='https://www.facebook.com/Lombranos/' target='_blank'>Click here to learn more about Lombranos</a>",
    },
    { // The Wine Bar
      coords: { lat: 36.435923, lng: 25.421759 },
      iconImage: "assets/images/restaurant-icon.png",
      content: "<img src='assets/images/map-images/the-wine-bar.jpg'><h5>The Wine Bar</h5><a href='https://winebar-santorini.gr/' target='_blank'>Click here to learn more about The Wine Bar</a>",
    },
    { // Caldera Romantica
      coords: { lat: 36.367639, lng: 25.386075 },
      iconImage: "assets/images/restaurant-icon.png",
      content: "<img src='assets/images/map-images/caldera-romantica-restaurant.jpg'><h5>Caldera Romantica</h5><a href='https://www.calderaromantica.gr/' target='_blank'>Click here to learn more about Caldera Romantica</a>",
    },
    { // Enigma Cafe
      coords: { lat: 36.4174, lng: 25.4317 },
      iconImage: "assets/images/restaurant-icon.png",
      content: "<img src='assets/images/map-images/enigma-cafe.jpg'><h5>Enigma Cafe</h5><a href='https://www.facebook.com/enigmacafesantorini/' target='_blank'>Click here to learn more about Enigma Cafe</a>",
    },
    { // Fira
      coords: { lat: 36.4166, lng: 25.4324 },
      iconImage: "assets/images/accommodation-icon.png",
      content: "<img src='assets/images/map-images/fira.jpg'><h5>Fira</h5><a href='https://en.wikipedia.org/wiki/Fira' target='_blank'>Click here to learn more about Fira</a>",
    },
    { // Oia
      coords: { lat: 36.4618, lng: 25.3753 },
      iconImage: "assets/images/accommodation-icon.png",
      content: "<img src='assets/images/map-images/oia.jpg'><h5>Oia</h5><a href='https://en.wikipedia.org/wiki/Oia,_Greece' target='_blank'>Click here to learn more about Oia</a>",
    },
    { // Imerovigli
      coords: { lat: 36.4328, lng: 25.4228 },
      iconImage: "assets/images/accommodation-icon.png",
      content: "<img src='assets/images/map-images/imerovigli.jpg'><h5>Imerovigli</h5><a href='https://en.wikipedia.org/wiki/Imerovigli' target='_blank'>Click here to learn more about Imerovigli</a>",
    },
    { // Firostefani
      coords: { lat: 36.4252, lng: 25.4292 },
      iconImage: "assets/images/accommodation-icon.png",
      content: "<img src='assets/images/map-images/firostefani.jpg'><h5>Firostefani</h5><a href='https://www.santorini-island.com/firostefani.html' target='_blank'>Click here to learn more about Firostefani</a>",
    },
  ];

function addMarkers() {
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
}

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if (props.iconImage) {

        marker.setIcon(props.iconImage);
    }

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
        infowindow.close();
      });
    }
  }
