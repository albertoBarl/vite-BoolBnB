<template lang="">
  <h1>Vue 3 TomTom Maps Demo</h1>

  <div id="map" ref="mapRef"></div>
</template>
<script>
import { onMounted, ref } from "vue";

export default {
  name: "Map",

  setup() {
    const mapRef = ref(null);

    onMounted(() => {
      const tt = window.tt;

      var map = tt.map({
        key: "88h7OGbX03JY9XNCvFfNYmu0jPwzkmQ2",

        container: mapRef.value,

        style: "tomtom://vector/1/basic-main",
      });

      map.addControl(new tt.FullscreenControl());

      map.addControl(new tt.NavigationControl());

      addMarker(map);
    });
    function addMarker(map) {
      const tt = window.tt;
      var location = [12.0803, 42.63169];
      var popupOffset = 25;

      var marker = new tt.Marker().setLngLat(location).addTo(map);
      var popup = new tt.Popup({ offset: popupOffset });
      reverseGeocoding(marker, popup);
      marker.setPopup(popup).togglePopup();
    }

    function reverseGeocoding(marker, popup) {
      const tt = window.tt;
      tt.services
        .reverseGeocode({
          key: "88h7OGbX03JY9XNCvFfNYmu0jPwzkmQ2",
          position: marker.getLngLat(),
        })
        .go()
        .then(function (result) {
          console.log(result.addresses[0].address.freeformAddress);
          popup.setHTML(result.addresses[0].address.freeformAddress);
        });
    }

    return {
      mapRef,
    };
  },
};
</script>
<style lang="scss" scoped>
#map {
  height: 50vh;
  width: 50vw;
}
</style>
