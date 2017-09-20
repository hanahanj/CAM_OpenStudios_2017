function initMap() {

    var markerGroups = {
        "parking": [],
        "trail": [],
        "shelter": []
    };
    var customIcons = {
        shelter: {
            icon: 'http://backpackingconnecticut.com/images/shelter_picnic.png'
        },
        parking: {
            icon: 'http://backpackingconnecticut.com/images/parking.png'
        }
    };

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


// SUNDAY locations
var locations_sunday = [
['Adrian Cox', 38.603474, -90.232971],
['Albert Yowshien Kuo', 38.589101, -90.227202],
['Alice Gadel', 38.638540, -90.232284],
['Anabun Pottery', 38.607793, -90.209319],
['Andy Leicht', 38.598918, -90.247756],

['Blake Sanders', 38.633575, -90.200425],
['Brandon Anschultz', 38.617371, -90.210680],
['Brandon Barnes', 38.589101, -90.227202],
['Bridget McDermott Flood & Michael Flood', 38.556266, -90.257799],
['Cailin Metz', 38.633048, -90.201454],

['Cayce Zavaglia', 38.611740, -90.235909],
['Cecelia M. Davidson', 38.638298, -90.231810],
['Collin Garrity', 38.585801, -90.225617],
['Conor Murphy', 38.594721, -90.237542],
['Damia Smith', 38.638540, -90.232284],

             ['Damien Johnson', 38.582988, -90.235988],
             ['David Coblitz', 38.631421, -90.192996],
             ['Edo Rosenblith', 38.633575, -90.200425],
             ['Elaine Unell ', 38.631421, -90.192996],
             ['Emma Vidal', 38.603474, -90.232971],

             ['Erica Popp', 38.589346, -90.227666],
             ['Film Base STL', 38.634728, -90.215866],
             ['Garrett Roberts', 38.607793, -90.209319],
             ['GINJU-AN ', 38.631112, -90.199019],
             ['Gregg Louis', 38.600391, -90.222389],

             ['Hannah Montford', 38.609411, -90.224579],
             ['Ingrum Studio', 38.650577, -90.262091],
             ['Jacob Francois', 38.650576, -90.262091],
             ['Jacob Stanley', 38.600775, -90.242878],
             ['Jeff Kapfer', 38.625280, -90.214468],

             ['Jessica Bayer', 38.589101, -90.227202],
             ['Joe Chesla', 38.636645, -90.225135],
             ['John Joseph Hunn', 38.584649, -90.234668],
             ['John Sarra', 38.611732, -90.235943],
             ['Karen Ann Jones', 38.634701, -90.215316],

             ['Kathy Gomric', 38.607793, -90.209319],
             ['Kelsey Viola Wiskirchen', 38.609411, -90.224579],
             ['Ken Wood', 38.633575, -90.200425],
             ['Kristin Cassidy', 38.593804, -90.227849],
             ['Leah deMatta', 38.638540, -90.232284],

             ['LeRoy Lottmann', 38.607793, -90.209319],
             ['Lowell Daniels', 38.609411, -90.224579],
             ['Maggie Zografakis', 38.633575, -90.200425],
             ['Margaret Keller', 38.593804, -90.227849],
             ['Marina Peng', 38.638540, -90.232284],

             ['Mark Swain', 38.570884, -90.239701],
             ['Maxine Joie du Maine', 38.638298, -90.231810],
             ['Melody Evans', 38.638540, -90.232284],
             ['Michael Martinez', 38.638298, -90.231810],
             ['Michael Parrett', 38.638540, -90.232284],

             ['Nanette Boileau', 38.600754, -90.242863],
             ['Norleen Nosri', 38.638540, -90.232284],
             ['Olivia Lahs-Gonzales', 38.600754, -90.242863],
             ['Pat Toenjes', 38.607794, -90.209320],
             ['Patrick L. Bellmann', 38.607793, -90.209319],

             ['Paul Kafalenos', 38.633575, -90.200425],
             ['Perennial: Community Workshop + Store', 38.586302, -90.226035],
             ['Rachel Youn', 38.633666, -90.199920],
             ['Rich Brooks', 38.607793, -90.209319],
             ['Robert Michelmann', 38.607256, -90.206833],

             ['Robin Lewis-Heagler', 38.634321, -90.213246],
             ['Ruth Kolker', 38.589101, -90.227202],
             ['Ruth Reese', 38.638540, -90.232284],
             ['Sage Dawson', 38.633575, -90.200425],
             ['Sandra Fischetti', 38.638298, -90.231810],

             ['Sarah Bernhardt', 38.589101, -90.227202],
             ['Sarah Paulsen', 38.638540, -90.232284],
             ['Scott Allison', 38.638298, -90.231810],
             ['Soulard Art Gallery', 38.607793, -90.209319],
             ['Steve Ingraham', 38.631112, -90.199019],

             ['The Collab', 38.548527, -90.257013],
             ['Tiffany J. Sutton', 38.638298, -90.231810],
             ['WORK/PLAY', 38.593802, -90.227840],
             ['Wyndi Antoinette DeSouza', 38.606312],
];



// SUNDAY CONTENT
var content_sunday = [
['<div id=content>'+'<a href="projects/cox"><h1>Adrian<br>Cox</h1></a>'],
['<div id=content>'+'<a href="projects/Kuo"><h1>Albert<br> Yowshien <br>Kuo</h1></a>'],
['<div id=content>'+'<a href="projects/Gadel"><h1>Alice <br>Gadel</h1></a>'],
['<div id=content>'+'<a href="projects/Pottery"><h1>Anabun <br>Pottery</h1></a>'],
['<div id=content>'+'<a href="projects/Leicht"><h1>Andy <br>Leicht</h1></a>'],


['<div id=content>'+'<a href="projects/Sanders"><h1>Blake Sanders</h1></a>'],
['<div id=content>'+'<a href="projects/Anschultz"><h1>Brandon Anschultz</h1></a>'],
['<div id=content>'+'<a href="projects/Barnes"><h1>Brandon Barnes</h1></a>'],
['<div id=content>'+'<a href="projects/Flood"><h1>Bridget McDermott Flood & Michael Flood</h1></a>'],
['<div id=content>'+'<a href="projects/Metz"><h1>Cailin Metz</h1></a>'],


['<div id=content>'+'<a href="projects/Zavaglia"><h1>Cayce Zavaglia</h1></a>'],
['<div id=content>'+'<a href="projects/Davidson"><h1>Cecelia M. Davidson</h1></a>'],
['<div id=content>'+'<a href="projects/Garrity"><h1>Collin Garrity</h1></a>'],
['<div id=content>'+'<a href="projects/Murphy"><h1>Conor Murphy</h1></a>'],
['<div id=content>'+'<a href="projects/Smith"><h1>Damia Smith</h1></a>'],

['<div id=content>'+'<a href="projects/Johnson"><h1>Damien Johnson</h1></a>'],
['<div id=content>'+'<a href="projects/Coblitz"><h1>David Coblitz</h1></a>'],
['<div id=content>'+'<a href="projects/Rosenblith"><h1>Edo Rosenblith</h1></a>'],
['<div id=content>'+'<a href="projects/Unell"><h1>Elaine Unell</h1></a>'],
['<div id=content>'+'<a href="projects/Vidal"><h1>Emma Vidal</h1></a>'],

['<div id=content>'+'<a href="projects/Popp"><h1>Erica Popp</h1></a>'],
['<div id=content>'+'<a href="projects/Film_Base"><h1>Film Base STL</h1></a>'],
['<div id=content>'+'<a href="projects/Roberts"><h1>Garrett Roberts</h1></a>'],
['<div id=content>'+'<a href="projects/AN"><h1>GINJU-AN</h1></a>'],
['<div id=content>'+'<a href="projects/Louis"><h1>Gregg Louis</h1></a>'],

['<div id=content>'+'<a href="projects/Montford"><h1>Hannah Montford</h1></a>'],
['<div id=content>'+'<a href="projects/Ingrum"><h1>Ingrum Studio</h1></a>'],
['<div id=content>'+'<a href="projects/Francois"><h1>Jacob Francois</h1></a>'],
['<div id=content>'+'<a href="projects/Stanley"><h1>Jacob Stanley</h1></a>'],
['<div id=content>'+'<a href="projects/Kapfer"><h1>Jeff Kapfer</h1></a>'],

['<div id=content>'+'<a href="projects/Bayer"><h1>Jessica Bayer</h1></a>'],
['<div id=content>'+'<a href="projects/Chesla"><h1>Joe Chesla</h1></a>'],
['<div id=content>'+'<a href="projects/Hunn"><h1>John Joseph Hunn</h1></a>'],
['<div id=content>'+'<a href="projects/Sarra"><h1>John Sarra</h1></a>'],
['<div id=content>'+'<a href="projects/Jones"><h1>Karen Ann Jones</h1></a>'],

['<div id=content>'+'<a href="projects/Gomric"><h1>Kathy Gomric</h1></a>'],
['<div id=content>'+'<a href="projects/Wiskirchen"><h1>Kelsey Viola Wiskirchen</h1></a>'],
['<div id=content>'+'<a href="projects/Wood"><h1>Ken Wood</h1></a>'],
['<div id=content>'+'<a href="projects/Cassidy"><h1>Kristin Cassidy</h1></a>'],
['<div id=content>'+'<a href="projects/deMatta"><h1>Leah deMatta</h1></a>'],

['<div id=content>'+'<a href="projects/Lottmann"><h1>LeRoy Lottmann</h1></a>'],
['<div id=content>'+'<a href="projects/Daniels"><h1>Lowell Daniels</h1></a>'],
['<div id=content>'+'<a href="projects/Zografakis"><h1>Maggie Zografakis</h1></a>'],
['<div id=content>'+'<a href="projects/Keller"><h1>Margaret Keller</h1></a>'],
['<div id=content>'+'<a href="projects/Peng"><h1>Marina Peng</h1></a>'],

['<div id=content>'+'<a href="projects/Swain"><h1>Mark Swain</h1></a>'],
['<div id=content>'+'<a href="projects/Maine"><h1>Maxine Joie du Maine</h1></a>'],
['<div id=content>'+'<a href="projects/Evans"><h1>Melody Evans</h1></a>'],
['<div id=content>'+'<a href="projects/Martinez"><h1>Michael Martinez</h1></a>'],
['<div id=content>'+'<a href="projects/Parrett"><h1>Michael Parrett</h1></a>'],

['<div id=content>'+'<a href="projects/Boileau"><h1>Nanette Boileau</h1></a>'],
['<div id=content>'+'<a href="projects/Nosri"><h1>Norleen Nosri</h1></a>'],
['<div id=content>'+'<a href="projects/Gonzales"><h1>Olivia Lahs-Gonzales</h1></a>'],
['<div id=content>'+'<a href="projects/Toenjes"><h1>Pat Toenjes</h1></a>'],
['<div id=content>'+'<a href="projects/Bellmann"><h1>Patrick L. Bellmann</h1></a>'],

['<div id=content>'+'<a href="projects/Kafalenos"><h1>Paul Kafalenos</h1></a>'],
['<div id=content>'+'<a href="projects/Perennial"><h1>Perennial: Community Workshop + Store</h1></a>'],
['<div id=content>'+'<a href="projects/Youn"><h1>Rachel Youn</h1></a>'],
['<div id=content>'+'<a href="projects/Brooks"><h1>Rich Brooks</h1></a>'],
['<div id=content>'+'<a href="projects/Michelmann"><h1>Robert Michelmann</h1></a>'],

['<div id=content>'+'<a href="projects/Heagler"><h1>Robin Lewis-Heagler</h1></a>'],
['<div id=content>'+'<a href="projects/Kolker"><h1>Ruth Kolker</h1></a>'],
['<div id=content>'+'<a href="projects/Reese"><h1>Ruth Reese</h1></a>'],
['<div id=content>'+'<a href="projects/Dawson"><h1>Sage Dawson</h1></a>'],
['<div id=content>'+'<a href="projects/Fischetti"><h1>Sandra Fischetti</h1></a>'],

['<div id=content>'+'<a href="projects/Bernhardt"><h1>Sarah Bernhardt</h1></a>'],
['<div id=content>'+'<a href="projects/Paulsen"><h1>Sarah Paulsen</h1></a>'],
['<div id=content>'+'<a href="projects/Allison"><h1>Scott Allison</h1></a>'],
['<div id=content>'+'<a href="projects/Soulard"><h1>Soulard Art Gallery</h1></a>'],
['<div id=content>'+'<a href="projects/Ingraham"><h1>Steve Ingraham</h1></a>'],

['<div id=content>'+'<a href="projects/Bernhardt"><h1>The Collab</h1></a>'],
['<div id=content>'+'<a href="projects/Paulsen"><h1>Tiffany J. Sutton</h1></a>'],
['<div id=content>'+'<a href="projects/Allison"><h1>WORK/PLAY</h1></a>'],
['<div id=content>'+'<a href="projects/Soulard"><h1>Wyndi Antoinette DeSouz</h1></a>'],


]

// Saturday locations
var locations_saturday= [
['Brush and Hammer Studio', 38.621003, -90.321318],
];

             // Saturday CONTENT
             var content_saturday = [
             ['<div id=content>'+'<a href="projects/cox"><h1>Brush and Hammer Studio</h1></p>'],

             ]



             var map = new google.maps.Map(document.getElementById('mapCanvas'), {
                 zoom: 13,
                 center: new google.maps.LatLng(38.605, -90.3),
                 styles: styles,
                 mapTypeControl: true

             });

             var infowindow = new google.maps.InfoWindow({
              maxWidth:300

          }
          );

             var marker, i;


// SUN Markers
for (i = 0; i < locations_sunday.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations_sunday[i][1], locations_sunday[i][2]),
    icon: 'http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png',
    map: map,

});


  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(content_sunday[i][0]);
      infowindow.open(map, marker);
  }
})(marker, i));
}

// SAT Markers

for (i = 0; i < locations_saturday.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations_saturday[i][1], locations_saturday[i][2]),
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    map: map,

});


  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(content_saturday[i][0]);
      infowindow.open(map, marker);
  }
})(marker, i));
}

}
