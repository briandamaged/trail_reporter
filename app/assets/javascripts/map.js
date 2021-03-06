define(["jquery", "js!//maps.googleapis.com/maps/api/js?v=3.exp&callback=GoogleMapsLoaded&key="+GOOGLE_MAPS_API_KEY+"!order!exports=google"], function ($) {
  var map;
  var marker;

  var exports = {};

  function initialize() {
    var myLatlng = new google.maps.LatLng(38.8308,-77.3075);
    var mapOptions = {
      center: myLatlng,
      zoom: 15
    };

    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    google.maps.event.addListener(map,'click', function(event) {
      myLatlng = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
      console.log(myLatlng);
      placeMarker(myLatlng);
      document.getElementById('report_latitude').value = myLatlng.k;
      document.getElementById('report_longitude').value = myLatlng.B;
    })
  }

  $(document).on("google-maps:loaded", initialize);

  //Places marker & moves if already placed
  function placeMarker(myLatlng) {
    if ( marker ) {
      marker.setPosition(myLatlng);
    } else {
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map
      });
    }
  }
});
