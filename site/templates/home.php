<?php snippet('header') ?>
<?php snippet('menu') ?>

	


<script>function initMap() {


  var styles = [
  {
   stylers: [ 
   { "color": "#f5f5f5" },
   { saturation: -100 }
   ]
 },{
   featureType: "road", 
   elementType: "geometry",
   stylers: [
   { color: "#8ee5ee" },

   { visibility: "simplified" }
   ]
 },

 { "elementType": "labels",
 "stylers": [
 {
   "visibility": "off"
 }
 ]
},

{
  featureType: "water", 
  elementType: "geometry",
  stylers: [
  { color: "#c9c9c9" },
               // { lightness: 250 },
               { visibility: "simplified" }
               ]
             },

             ];



    var map = new google.maps.Map(document.getElementById('mapCanvas'), {
       zoom: 13,
  center: new google.maps.LatLng(38.605, -90.3),
  styles: styles,
  mapTypeControl: true
  
    });
}

</script>
<script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDieZ7uAY4DPdT3Z4fp4KtykHl6dWryYdw&callback=initMap">
    </script>




	<div id="mapContainer">
		<div id="mapCanvas" ></div>
	</div>
	

<?php snippet('footer') ?>