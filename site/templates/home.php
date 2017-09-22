<?php snippet('header') ?>
<?php snippet('menu') ?>



<script type="text/javascript" src="assets/js/sundaymap.js"></script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDieZ7uAY4DPdT3Z4fp4KtykHl6dWryYdw&callback=initMap">
</script>

<div class="container home">
  <div id="mapContainer">
    <div id="mapCanvas" ></div>
  </div>

  <div class="logo">
    <img src="assets/images/Splash_Logo_BW.png"/>
  </div>

  <div id="saturday">
    <h1>Saturday</h1>
  </div>
  <div id="sunday">
    <h1>Sunday</h1>
  </div>

  <div id="date">
    <h1>October 7–8, 2017</h1>
  </div>
</div>


<?php snippet('footer') ?>