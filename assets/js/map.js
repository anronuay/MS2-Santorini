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
      latlong: { lat: 36.4600, lng: 25.3705 },
      iconImage: "assets/images/attractions-icon.png",
      content: "<img src='assets/images/map-images/amoudi-bay_150px.jpg'><h3>Amoudi Bay</h3><p>The bay is a well known site on the island, and is often cited as an excellent location for viewing the sunset. The bay is also known for the 200 steps leading from the base of the feature to the town of Oia on the cliffs above. Due to the locale's importance to local tourism, the base of the bay's cliffs is dotted with buildings belonging to the village of Ormos Armeni, and many sailing tours use Amoudi as their staging point.</p>",
    },
    { // Nea Kameni
      latlong: { lat: 36.4000, lng: 25.4000 },
      iconImage: "assets/images/attractions-icon.png",
      content: "<img src='assets/images/map-images/nea-kameni_150px.jpg'><h3>Nea Kameni</h3><p>Nea Kameni is a small uninhabited Greek island of volcanic origin located in the Aegean Sea, within the flooded Santorini caldera. Nea Kameni and the neighbouring small island Palea Kameni (the new and old burnt islands) have formed over the past two millennia through repeated eruptions of dacite lava and ash.</p>",
    },
    { // Red Beach
      latlong: { lat: 36.6059, lng: 174.6979 },
      iconImage: "assets/images/attractions-icon.png",
      content: "<img src='assets/images/map-images/red-beach_150px.jpg'><h3>Red Beach</h3><p>Red Beach is a volcanic sand beach on the Aegean island of Santorini. The beach is famed for its titular red-hued sand, and is a noted for being popular tourist attraction. The beach's sand is composed of black and red pulverized volcanic rock from the nearby Santorini caldera.</p>",
    },
    { // Akrotiri Archaeological Site
      latlong: { lat: 36.3518, lng: 25.4034 },
      iconImage: "assets/images/attractions-icon.png",
      content: "<img src='assets/images/map-images/akrotiri-archaeological-site_150px.jpg'><h3>Akrotiri Archaeological Site</h3><p>The settlement was destroyed in the Theran eruption sometime in the 16th century BC and buried in volcanic ash, which preserved the remains of fine frescoes and many objects and artworks. The settlement has been suggested as a possible inspiration for Plato's story of Atlantis. Akrotiri has been excavated since 1967.</p>",
    },
    { // Lombranos
      latlong: { lat: 36.4173, lng: 25.4282 },
      iconImage: "assets/images/restaurant-icon.png",
      content: "<img src='assets/images/lombranos_150px.jpg'><h3>Lombranos</h3><p>Lombranos is a traditional cave tavern located in the old port of Santorini. Our mission is to make our customers feel the Greek traditional cuisine and hospitality.</p>",
    },
    { // The Wine Bar
      latlong: { lat: 36.435451, lng: 25.422828 },
      iconImage: "assets/images/restaurant-icon.png",
      content: "<img src='assets/images/map-images/the-wine-bar_150px.jpg'><h3>The Wine Bar</h3><p>Click here to learn more about Kounelas Fish Taverna</p>",
    },
    { // Caldera Romantica Restaurant
      latlong: { lat: 36.3629, lng: 25.3856 },
      iconImage: "assets/images/restaurant-icon.png",
      content: "<img src='assets/images/map-images/caldera-romantica-restaurant_150px.jpg'><h3>Caldera Romantica Restaurant</h3><p>The new restaurant with one of the best views of caldera near Caldera Romantica Hotel. Greek fusion cuisine created by a young chef with all the fresh local igredients of Santorini.</p>",
    },
    { // Enigma Cafe
      latlong: { lat: 36.4174, lng: 25.4317 },
      iconImage: "assets/images/restaurant-icon.png",
      content: "<img src='assets/images/map-images/enigma-cafe_150px.jpg'><h3>Enigma Cafe</h3><p>Enigma cafe is located on the cliffside in Santorini Fira providing mesmerising views of the Caldera and the volcano. Enjoy your coffee, have breakfast, sandwiches and salads and enjoy the sunset with delicious cocktails.</p>",
    },
    { // Fira
      latlong: { lat: 36.4166, lng: 25.4324 },
      iconImage: "assets/images/accommodation-icon.png",
      content: "<img src='assets/images/map-images/fira_150px.jpg'><h3>Fira</h3><p>Fira is the modern capital of the Greek Aegean island of Santorini. Fira is a city of white-washed houses built on the edge of the 400 metres (1,312 feet) high caldera on the western edge of the semi-circular island of Thera.</p>",
    },
    { // Oia
      latlong: { lat: 36.4618, lng: 25.3753 },
      iconImage: "assets/images/accommodation-icon.png",
      content: "<img src='assets/images/map-images/oia_150px.jpg'><h3>Oia</h3><p>It covers the whole island of Therasia and the northwesternmost part of Santorini, which it shares with the municipal unit of Santorini. The main street is named Nikolaou Nomikou. The population was 1,545 inhabitants at the 2011 census, and the land area is 19.449 km</p>",
    },
    { // Imerovigli
      latlong: { lat: 36.4328, lng: 25.4228 },
      iconImage: "assets/images/accommodation-icon.png",
      content: "<img src='assets/images/map-images/imerovigli_150px.jpg'><h3>Imerovigli</h3><p>Imerovigli is mostly famous for its beautiful sunset, that it is called 'balcony to the Aegean'. It's houses are built amphitheatrically around the caldera and it is crossed by narrow, paved paths.</p>",
    },
    { // Firostefani
      latlong: { lat: 36.4252, lng: 25.4292 },
      iconImage: "assets/images/accommodation-icon.png",
      content: "<img src='assets/images/map-images/firostefani_150px.jpg'><h3>Firostefani</h3><p>Although Firostefani village is considered a separate settlement, it is actually an extension of Fira, the capital of Santorini. The name 'Firostefani' (Fira + Stefani, meaning crown in Greek) derives from its position on the highest part of Fira. Its gifted location on the caldera, on the north part of the island makes it a remarkable site.</p>",
    },
  ];

function addMarkers() {
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
}


  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.latlong,
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

