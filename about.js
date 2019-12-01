function initMap() {
  let ducktown = {lat: 35.0359126, lng: -84.3827012};
  let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: ducktown});
  let marker = new google.maps.Marker({position: ducktown, map: map});
}
